export const updateAppSync=(mutationKey, query, type)=>(cache, {data})=>{
    const relevantData=data[mutationKey]
    const queryKey=query.definitions[0].name.value
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
    cache.writeQuery({
        query,
        data:currentData
    })
}