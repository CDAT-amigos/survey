import React from 'react'
import {UPDATE_USER_ATTRIBUTES} from '../apollo/gqlQueries'
import {Mutation} from 'react-apollo'
import {wrapVariables} from '../AppSync/helpers'

const update=type=>
    (setUserAttributes, defObj)=>
    ({target:{value}})=>
    setUserAttributes({
        variables:wrapVariables(
            {...defObj, [type]:value}
        )
    })

const updateName=update('name')
const updateRole=update('role')

export default ({name, role})=>(
<Mutation 
    mutation={UPDATE_USER_ATTRIBUTES}
>
    {setUserAttributes=> (
        <div>
            Name: <input value={name} onChange={updateName(
                setUserAttributes, 
                {role}
            )}/>
            Role: <input value={role} onChange={updateRole(
                setUserAttributes, 
                {name}
            )}/>
        </div>
    )}
</Mutation>
)

