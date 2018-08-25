import React from 'react'
import gql from 'graphql-tag'
import {getUsersQuery} from './DisplayUsers'
import {AppSyncMutationArray} from '../AppSync/components'

const CREATE_USER=gql`
  mutation createUser($input: CreateUserInput!){
    createUser(input: $input){
      id
      name
      role
    }
  }
`


export default ({name, role})=>{
    const input={name, role}
    return (
    <AppSyncMutationArray 
        mutation={CREATE_USER} 
        query={getUsersQuery}
        variables={input}
        typename='Users'
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