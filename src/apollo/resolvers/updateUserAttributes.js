//this is for client side state management using apollo
import gql from 'graphql-tag'

export const UPDATE_USER_ATTRIBUTES=gql`
  mutation updateUserAttributes($input: CreateUserInput!){
    updateUserAttributes(input:$input) @client {
      name
      role
    }
  }
`

export const CREATE_USER=gql`
  mutation createUser($input: CreateUserInput!){
    createUser(input: $input){
      id
      name
      role
    }
  }
`

export const getUserAttributesQuery=gql`
query getUserAttributes {
  getUserAttributes @client {
    name
    role
  }
}
`

export default (_, {input:{name, role}}, {cache})=>{
  const query=getUserAttributesQuery
  const previousState=cache.readQuery({query})
  const data={
    getUserAttributes: {
      ...previousState.getUserAttributes,
      name,
      role
    }
  }
  cache.writeQuery({
    query,
    data
  })
  return null
}