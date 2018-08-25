import React from 'react'
import {Query} from 'react-apollo'
import EnterUserAttributes from './EnterUserAttributes'
import LoadingMessage from './LoadingMessage'
import SubmitButton from './SubmitButton'
import {GET_USER_ATTRIBUTES} from '../apollo/gqlQueries'
export default ()=>(
    <Query query={GET_USER_ATTRIBUTES}>
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