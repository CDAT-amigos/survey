import gql from 'graphql-tag'

export const GET_USERS_QUERY=gql`
query listUsers($nextToken:String) {
  listUsers(limit:20 nextToken:$nextToken){
    items{
      id
      name
      role
    },
    nextToken
  }
}
`

export const GET_SURVEYS_QUERY=gql`
query listSurveys($nextToken:String){
    listSurveys(limit:20 nextToken:$nextToken){
        items{
            id
            title
            createdId
        }
    }
}
`

export const GET_SURVEY_BY_ID_QUERY=gql`
query getSurvey($id:ID!){
    getSurvey(id:$id){
        items{
            id
            title
            createdId
        }
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


export const UPDATE_USER_ATTRIBUTES=gql`
  mutation updateUserAttributes($input: CreateUserInput!){
    updateUserAttributes(input:$input) @client {
      name
      role
    }
  }
`

export const GET_USER_ATTRIBUTES=gql`
query getUserAttributes {
  getUserAttributes @client {
    name
    role
  }
}
`

