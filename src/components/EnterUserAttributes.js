import React from 'react'
import {SET_USER_ATTRIBUTES} from '../graphql'
import {Mutation} from 'react-apollo'
export default ({name, role})=>(
<Mutation 
    mutation={SET_USER_ATTRIBUTES}
>
    {setUserAttributes=>(
        <div>
            Name: <input value={name} onChange={e=>setUserAttributes({role, name:e.target.value})}/>
            Role: <input value={role} onChange={e=>setUserAttributes({name, role:e.target.value})}/>
        </div>

    )}
</Mutation>
)

