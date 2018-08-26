import React from 'react'
import {AppSyncMutationArray} from '../AppSync/components'
import {
    CREATE_USER,
    GET_USERS_QUERY
} from '../apollo/gqlQueries'
import Button from '@material-ui/core/Button'

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
            <Button 
                onClick={createUser}
                variant='contained'
                color='primary'
            >
                Create User
            </Button>
        )}
    </AppSyncMutationArray>
    )
}