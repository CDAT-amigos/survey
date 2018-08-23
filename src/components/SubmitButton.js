import React from 'react'
import { CREATE_USER } from '../apollo/resolvers'
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
export default graphqlMutation(
  CREATE_USER, 
  getUsersQuery, 
  'UserAttributes'//does it have to be Userattributes?
)(({name, role, createUser})=>(
  <button onClick={()=>createUser({name, role})}>
    Create User
  </button>
))