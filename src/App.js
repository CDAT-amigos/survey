import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import './App.css'
import {client} from './apollo'
import { ApolloProvider } from 'react-apollo'
import DisplayUsers from './components/DisplayUsers'
import TotalForm from './components/TotalForm'
import {getBaseUrl} from './utilities/urlUtils'
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import defaultTheme from './themes'
import { 
  MuiThemeProvider, 
  createMuiTheme 
} from '@material-ui/core/styles'

const theme = createMuiTheme(defaultTheme)

const handleChange=(match, history)=>(_, value)=>{
  history.push(getBaseUrl(match)+(value+1))
}
const AppBarInst=({match, history})=>(
  <AppBar position='sticky'>
    <Tabs 
      value={parseInt(match.params.tabId, 10)-1} 
      onChange={handleChange(match, history)} 
      fullWidth
    >
      <Tab label="Surveys" />
      <Tab label="Create Survey" />
      <Tab label="Analytics" />
    </Tabs>
  </AppBar>
)

export default ()=>(
  <Router>
    <MuiThemeProvider theme={theme}> 
      <ApolloProvider client={client}>
        <Switch>
          <Redirect from='/' to='/tab/1' exact/>
        </Switch>
        <Route 
          path='/tab/:tabId'
          render={props=><AppBarInst key='appbar' {...props}/>}
        />
        <Route 
          path='/tab/1'
          exact
          component={DisplayUsers}
        />
        <TotalForm/>
      </ApolloProvider>
    </MuiThemeProvider>
  </Router>
)
