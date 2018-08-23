import React from 'react'
import {Query} from 'react-apollo'
import EnterUserAttributes from './EnterUserAttributes'
import SubmitButton from './SubmitButton'
import {getUserAttributesQuery} from '../apollo/resolvers'
export default ()=>(
    <Query query={getUserAttributesQuery}>
        {({loading, error, data})=>{
            if(loading) return<p>Loading...</p>
            if(error) return <p>Error: {error.message}</p>
            const {name, role}=data.getUserAttributes
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