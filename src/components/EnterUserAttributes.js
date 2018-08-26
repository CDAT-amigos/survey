import React from 'react'
import {UPDATE_USER_ATTRIBUTES} from '../apollo/gqlQueries'
import {Mutation} from 'react-apollo'
import {wrapVariables} from '../AppSync/helpers'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'

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
            <FormControl>
                <InputLabel htmlFor='name-simple'>
                    Name
                </InputLabel>
                <Input 
                    id='name-simple' 
                    value={name} 
                    onChange={updateName(
                        setUserAttributes, 
                        {role}
                    )} 
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor='role-simple'>
                    Role
                </InputLabel>
                <Input 
                    id='role-simple' 
                    value={role} 
                    onChange={updateRole(
                        setUserAttributes, 
                        {name}
                    )} 
                />
            </FormControl>
        </div>
    )}
</Mutation>
)

