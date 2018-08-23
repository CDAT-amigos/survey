import React from 'react'
import { graphqlMutation } from 'aws-appsync-react'
import gql from 'graphql-tag'

const getUsersQuery=gql`
query listUsers($nextToken:String) {
  listUsers(limit:30 nextToken:$nextToken){
    items{
      id
      name
      role
    },
    nextToken
  }
}
`

const CREATE_USER=gql`
  mutation createUser($input: CreateUserInput!){
    createUser(input: $input){
      id
      name
      role
    }
  }
`
export default graphqlMutation(
  CREATE_USER, 
  getUsersQuery, 
  'UserAttributes'//does it have to be Userattributes?
)(({name, role, createUser})=>(
  <button onClick={()=>createUser({name, role})}>
    Create User
  </button>
))