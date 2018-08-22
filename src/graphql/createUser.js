import gql from 'graphql-tag'

export const CREATE_USER=gql`
  mutation createUser($input: CreateUserInput!){
    createUser(input: $input){
      id
      name
      role
    }
  }
`

/*
export const SET_USER_ATTRIBUTES=gql`
  mutation setUserAttributes($input: CreateUserInput!){
    setUserAttributes(input:$input) @client {
      name
      role
    }
  }
`*/