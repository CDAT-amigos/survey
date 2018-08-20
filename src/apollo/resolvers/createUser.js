//this is for client side state management using apollo
import gql from 'graphql-tag'

export default (_, {name, role}, {cache})=>{
  const query=gql`
    query getNameAttributes {
      getNameAttributes @client {
        name
        role
      }
    }
  `
  const previousState=cache.readQuery({query})
  const data={
    getNameAttributes: {
      ...previousState.getNameAttributes,
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