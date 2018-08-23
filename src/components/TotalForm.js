import React from 'react'
import {Query} from 'react-apollo'
import EnterUserAttributes from './EnterUserAttributes'
import LoadingMessage from './LoadingMessage'
import SubmitButton from './SubmitButton'
import {getUserAttributesQuery} from '../apollo/resolvers'
export default ()=>(
    <Query query={getUserAttributesQuery}>
        {({loading, error, data})=>{
            const {name, role}=data.getUserAttributes
            return (
                <LoadingMessage 
                    loading={loading}
                    error={error}
                >
                    <EnterUserAttributes
                        name={name}
                        role={role}
                        key='enteruser'
                    />
                    <SubmitButton
                    name={name}
                    role={role}
                    key='submitbutton'
                />
                </LoadingMessage>
            )
        }}
    </Query>
)