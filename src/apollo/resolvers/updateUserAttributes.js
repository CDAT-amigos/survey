//this is for client side state management using apollo
//import gql from 'graphql-tag'
import {getUserAttributesQuery} from '../../graphql'
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