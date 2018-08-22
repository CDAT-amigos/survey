//this is for client side state management using apollo
import gql from 'graphql-tag'
//import {getUserAttributesQuery} from '../../graphql'
/**query GetPageName {
      apolloClientDemo @client {
        currentPageName
      }
    } */

    /**query {
    apolloClientDemo @client {
      currentPageName
    }
  } */
export default (_, {name, role}, {cache})=>{
  //const query=getUserAttributesQuery
  const query=gql`
    query getUserAttributes {
      getUserAttributes @client {
        name
        role
      }
    }
  `
  const previousState=cache.readQuery({query})
  console.log(name)
  console.log(role)
  console.log(previousState)
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