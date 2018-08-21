import React from 'react'
import './App.css'
import {client} from './apollo'
import { ApolloProvider } from 'react-apollo'

import DisplayUsers from './components/DisplayUsers'
import TotalForm from './components/TotalForm'


export default ()=>(
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app</h2>

    </div>
    <TotalForm/>
    <DisplayUsers/>
    
  </ApolloProvider>
)
