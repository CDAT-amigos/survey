import React from 'react';
import {graphql, QueryRenderer} from 'react-relay';

import environment from './environment'

export default ()=>(
<QueryRenderer
  environment={environment}
  query={graphql`
    query AppQuery{
      listUsers{
        items{
          id
          name
          role
        }
      }
    }
  `}
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
      </ul></div>
  }}
/>
)
