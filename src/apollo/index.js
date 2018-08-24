import AWSAppSyncClient, { 
  createAppSyncLink, 
  createLinkWithCache 
} from 'aws-appsync'
import resolvers from './resolvers'
import defaults from './defaults'
import { withClientState } from 'apollo-link-state'
import { ApolloLink } from 'apollo-link'

const {REACT_APP_API_KEY:API_KEY, REACT_APP_END_POINT:END_POINT} = process.env

console.log(defaults)
const stateLink = createLinkWithCache(cache => withClientState({
  cache,
  resolvers,
  defaults
}))

const appSyncLink = createAppSyncLink({
  url: END_POINT,
  region:'us-east-2',
  auth:{
    type:'API_KEY',
    apiKey:API_KEY
  },
})

const link = ApolloLink.from([stateLink, appSyncLink])

export const client = new AWSAppSyncClient({}, { link })