import React from 'react'
import {getUserAttributesQuery} from '../graphql'
import {Query} from 'react-apollo'
import EnterUserAttributes from './EnterUserAttributes'
import SubmitButton from './SubmitButton'
export default ()=>(
    <Query query={getUserAttributesQuery}>
        {({loading, error, data})=>{
            if(loading) return<p>Loading...</p>
            if(error) return <p>Error: {error.message}</p>
            console.log(data)
            const {name, role}=data.getUserAttributes
            console.log(name)
            console.log(role)
            return [
                <EnterUserAttributes
                    name={name}
                    role={role}
                    key='enteruser'
                />,
                <SubmitButton
                    name={name}
                    role={role}
                    key='submitbutton'
                />
            ]
        }}
    </Query>
)