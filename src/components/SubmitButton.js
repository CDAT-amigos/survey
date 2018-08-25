import React from 'react'
import gql from 'graphql-tag'
import {getUsersQuery} from './DisplayUsers'
import {Mutation} from 'react-apollo'
import uuidv4 from 'uuid/v4'
const CREATE_USER=gql`
  mutation createUser($input: CreateUserInput!){
    createUser(input: $input){
      id
      name
      role
    }
  }
`

//I think this can be generalized easily
const update=(cache, {data:{createUser}})=>{

    const data=cache.readQuery({
        query:getUsersQuery
    })
    console.log(createUser)
    console.log(data)
    data.listUsers.items=[createUser, ...data.listUsers.items]
    cache.writeQuery({
        query:getUsersQuery,
        data
    })
}
export default ({name, role})=>{
    const input={name, role}
    return (
    <Mutation 
        mutation={CREATE_USER} 
        variables={{input}}
        update={update}
        optimisticResponse={{
            __typename:'Mutation',
            createUser:{
                ...input, 
                id:uuidv4(),
                __typename:'User'
            }
        }}
    >
        {createUser=>(
            <button onClick={createUser}>
                Create User
            </button>
        )}
    </Mutation>
    )
}
/*
graphqlMutation(
  CREATE_USER, 
  getUsersQuery, 
  'UserAttributes'//does it have to be Userattributes?
)(({name, role, createUser})=>(
  <button onClick={()=>createUser({name, role})}>
    Create User
  </button>
))*/