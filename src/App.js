import React from 'react'
import './App.css'
import {client} from './apollo'
import { ApolloProvider, Query, Mutation } from 'react-apollo'
import {getUsersQuery, getUsersOptions, CREATE_USER, SET_USER_ATTRIBUTES } from './graphql'
import DisplayUsers from './components/DisplayUsers'


const CreateUser=()=>(
  <Mutation 
    mutation={CREATE_USER}
  >
    {createUser=>(
      <button onClick={()=>createUser({
          variables:{
            input:{
              name:'Charles',
              role:'User'
            }
          },
          optimisticResponse:{
            __typename:'Mutation', //what is this for?
            createUser:{
              __typename:'User',//what is this for?
              name:'Someone',
              role:'User',
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
const SetUserAttributes=()=>(
  <Mutation 
    mutation={SET_USER_ATTRIBUTES}
  >
    {setUserAttributes=>(
      <div>
        Name: <input onChange={e=>setUserAttributes({name:e.target.value})}/>
        Role: <input onChange={e=>setUserAttributes({role:e.target.value})}/>
      </div>
      
    )}
  
  </Mutation>
)

export default ()=>(
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app</h2>

    </div>
    <SetUserAttributes/>
    <CreateUser/>
    
    <DisplayUsers/>
    
  </ApolloProvider>
)
