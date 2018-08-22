import React from 'react'
//import {SET_USER_ATTRIBUTES} from '../graphql'
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'

const SET_USER_ATTRIBUTES=gql`
  mutation setUserAttributes($input: CreateUserInput!){
    setUserAttributes(input:$input) @client {
      name
      role
    }
  }
`
const adjustInput=fn=>obj=>fn({
    variables:{
        input:obj
    }
})

export default ({name, role})=>(
<Mutation 
    mutation={SET_USER_ATTRIBUTES}
>
    {setUserAttributes=> (
        <div>
            Name: <input value={name} onChange={e=>adjustInput(setUserAttributes)({role, name:e.target.value})}/>
            Role: <input value={role} onChange={e=>adjustInput(setUserAttributes)({name, role:e.target.value})}/>
        </div>
    )}
</Mutation>
)

