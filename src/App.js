import React from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import {createUser} from './mutations'
import environment from './environment'
/**note that every query or mutation must
 * be of the form [moduleNameQuery] or [moduleNameMutation] 
 * So since this is App.js, the query below is named
 * AppQuery
 *
 **/
const query=graphql`
query AppQuery{
  listUsers{
    items{
      id
      name
      role
    }
  }
}
`


export default ()=>(
<QueryRenderer
  environment={environment}
  query={query}
  variables={{}}
  render={({error, props}) => {
    if (error) {
      return <div>Error!</div>
    }
    if (!props) {
      return <div>Loading...</div>
    }
    console.log(props)
    return <div><ul>
      {props.listUsers.items.map(({id, name, role})=>{ //note to everyone else: id, name and role are GUARANTEED to exist so I don't have to mess with checking them.  Thanks GRAPHQL!
        return <li key={id}>{id}-{name}-{role}</li>
      })}
      </ul>
      <button onClick={()=>{
        console.log("clicked")
        createUser(environment, 'Charles', 'User')
      }}>add user </button> 
      </div>
  }}
/>
)
