import React from 'react'
import {UPDATE_USER_ATTRIBUTES} from '../apollo/resolvers'
import {Mutation} from 'react-apollo'
//import gql from 'graphql-tag'

const adjustInput=(defObj, obj)=>({
    variables:{
        input:{...defObj, ...obj}
    }
})

const updateName=(setUserAttributes, role)=>({target:{value}})=>setUserAttributes(adjustInput({role, name:value}))

const updateRole=(setUserAttributes, name)=>({target:{value}})=>setUserAttributes(adjustInput({name, role:value}))

export default ({name, role})=>(
<Mutation 
    mutation={UPDATE_USER_ATTRIBUTES}
>
    {setUserAttributes=> (
        <div>
            Name: <input value={name} onChange={updateName(
                setUserAttributes, 
                role
            )}/>
            Role: <input value={role} onChange={updateRole(
                setUserAttributes, 
                name
            )}/>
        </div>
    )}
</Mutation>
)

