import gql from 'graphql-tag'

export const getUsersQuery=gql`
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

export const getUsersOptions=({
    props:({data:{listUsers}})=>({listUsers})
})

export const getUserAttributesQuery=gql`
    query getUserAttributes {
        getUserAttributes @client {
            name
            role
        }
    }
`

export const getUserAttributesOptions=({
    props:({data:{getUserAttributes}})=>({
        getUserAttributes
    })
})