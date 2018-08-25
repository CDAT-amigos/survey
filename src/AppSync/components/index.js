import React from 'react'
import {Mutation, Query} from 'react-apollo'
import { 
    wrapVariables, 
    getOptimisticResponse,
    updateAppSync,
    filterData
} from '../helpers'


/**
 * Similar to a standard Apollo Mutation component
 * "type" is one of "PREPEND", "APPEND", or "REMOVE"
 * "typename" is the __typename of the mutation object
 */
export const AppSyncMutationArray=({
    mutation, query, variables, 
    children, type, typename, 
    ...rest
})=>{
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
export const AppSyncQueryArray=({
    query, variables, 
    children, type, ...rest
})=>(
    <Query 
        query={query} 
        variables={wrapVariables(variables)}
        children={filterData(query, type, children)}
        {...rest}
    />
)