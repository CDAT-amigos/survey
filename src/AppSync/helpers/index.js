/**
 * these are ended with "AppSync" because the
 * "items" key is a result of how AppSync
 * defines the schema
 */
import uuidv4 from 'uuid/v4'
//export for testing
export const getUnique=(arr, key)=>{
    let obj={}
    return arr.filter(v=>{
        const keyDoesNotExist=!obj[v[key]]
        obj[v[key]]=true
        return keyDoesNotExist
    })
}

/**
 * Helper function for wrapping variables
 * in an object with key "input"
 */
export const wrapVariables=input=>({input})

const updateArrayAppSync=(query, type)=>(current, next)=>{
    const queryKey=getGQLKey(query)
    switch(type){
        case 'APPEND':
            next[queryKey].items=[
                ...current[queryKey].items,
                ...next[queryKey].items
            ]       
            break
        case 'PREPEND':
            next[queryKey].items=[
                ...next[queryKey].items,
                ...current[queryKey].items
            ]
            break
        default:
            console.log("Doing nothing by default")
    }
    return next
}

export const getGQLKey=query=>query.definitions[0].name.value

/**
 * Gets optimistic object to pass to "mutation" component
 */
export const getOptimisticResponse=(
    mutation, 
    input, 
    typename
)=>{
    const mutationKey=getGQLKey(mutation)
    return {
        __typename:'Mutation',
        [mutationKey]:{
            ...input,
            id:uuidv4(),
            __typename:typename
        }
    }
    
}
/**
 * Called twice during a mutation: once for optimistic
 * and once for actual
 */
export const updateAppSync=(mutation, query, type)=>(cache, {data})=>{
    const mutationKey=getGQLKey(mutation)
    const relevantData=data[mutationKey]
    const queryKey=getGQLKey(query)
    const currentData=cache.readQuery({
        query
    })
    switch(type){
        case 'APPEND':
            currentData[queryKey].items.push(relevantData)
            break
        case 'PREPEND':
            currentData[queryKey].items=[
                relevantData, 
                ...currentData[queryKey].items
            ]
            break
        case 'REMOVE':
            currentData[queryKey].items=currentData[queryKey]
                .items
                .filter(({id})=>id!==relevantData.id)
            break
        default:
            console.log("Doing nothing by default")
    }
    currentData[queryKey].items=getUnique(
        currentData[queryKey].items, 
        'id'
    )
    cache.writeQuery({
        query,
        data:currentData
    })
}

const next=({query, fetchMore, nextToken, update})=>()=>fetchMore({
    query,
    variables:{
        nextToken
    },
    updateQuery:(previousResult, {fetchMoreResult})=>{
        return update(previousResult, fetchMoreResult)
    }
})
/**
 * Adjusts data flowing from Query component
 * Addas a "getNext" attribute which can be
 * used in pagination
 */
export const filterData=(query, type, children)=>({data, fetchMore, ...rest})=>{
    const queryKey=getGQLKey(query)
    const update=updateArrayAppSync(query, type)
    const items=data[queryKey]?data[queryKey].items:[]
    const nextToken=data[queryKey]?data[queryKey].nextToken:null
    const getNext=next({query, fetchMore, nextToken, update})
    return children({data:{items, nextToken}, getNext, ...rest})
}

/**
 * Useful for client side resolvers
 */
export const generateResolver=query=>(_, {input}, {cache})=>{
    const queryKey=getGQLKey(query)
    const previousState=cache.readQuery({query})
    const data={
      [queryKey]: {
        ...previousState[queryKey],
        ...input
      }
    }
    cache.writeQuery({
      query,
      data
    })
    return null
  }