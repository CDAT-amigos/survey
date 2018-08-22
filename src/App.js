import React from 'react'
import './App.css'
import {client} from './apollo'
import { ApolloProvider } from 'react-apollo'
import { Rehydrated } from 'aws-appsync-react'
import DisplayUsers from './components/DisplayUsers'
import TotalForm from './components/TotalForm'


export default ()=>(
  <ApolloProvider client={client}>
    <Rehydrated>
      <div>
        <h2>My first Apollo app</h2>
      </div>
      <TotalForm/>
      <DisplayUsers/>
    </Rehydrated>
  </ApolloProvider>
)
