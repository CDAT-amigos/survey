import React from 'react'
import {AppSyncMutationArray} from '../AppSync/components'
import {
    CREATE_USER,
    GET_USERS_QUERY
} from '../apollo/gqlQueries'


export default ({name, role})=>{
    const input={name, role}
    return (
    <AppSyncMutationArray 
        mutation={CREATE_USER} 
        query={GET_USERS_QUERY}
        variables={input}
        typename='User'
        type='PREPEND'
    >
        {createUser=>(
            <button onClick={createUser}>
                Create User
            </button>
        )}
    </AppSyncMutationArray>
    )
}