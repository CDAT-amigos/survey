import React from 'react'
import {Mutation} from 'react-apollo'
import {getUsersQuery, CREATE_USER } from '../graphql'
export default ({name, role})=>(
    <Mutation 
        mutation={CREATE_USER}
     >
    {createUser=>(
      <button onClick={()=>createUser({
          variables:{
            input:{
              name, 
              role
            }
          },
          optimisticResponse:{
            __typename:'Mutation', //what is this for?
            createUser:{
              __typename:'User',//what is this for?
              name,
              role,
              id:'5' //this is needed because Apollo is stupid
            }
          },
          update:(cache, {data:{createUser}})=>{
            const {listUsers}=cache.readQuery({query:getUsersQuery})
            const {items}=listUsers
            console.log(items)
            console.log(createUser)
            const data={listUsers:{items:[...(items||[]), createUser], ...listUsers}}
            cache.writeQuery({
              query:getUsersQuery,
              data
            })
          }
        })}
      >
        Create User
      </button>
    )}
  </Mutation>
)