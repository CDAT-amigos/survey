import React from 'react'
import {Mutation, Query} from 'react-apollo'
import { 
    wrapVariables, 
    getOptimisticResponse,
    updateAppSync,
    filterData
} from '../helpers'



export const AppSyncMutationArray=({mutation, query, variables, children, type, typename, ...rest})=>{
    const localUpdate=updateAppSync(mutation, query, type)
    return (
    <Mutation 
        mutation={mutation} 
        variables={wrapVariables(variables)}
        update={localUpdate}
        optimisticResponse={
            getOptimisticResponse(mutation, variables, typename)
        }
        children={children}
        {...rest}
    />

    )
}

/**injects extra "getNext" variable into children */
export const AppSyncQueryArray=({query, variables, children, type, ...rest})=>(
    <Query 
        query={query} 
        variables={wrapVariables(variables)}
        children={filterData(query, type, children)}
        {...rest}
    />
)