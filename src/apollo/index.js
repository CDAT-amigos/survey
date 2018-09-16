import ApolloClient from "apollo-boost"
import resolvers from './resolvers'
import defaults from './defaults'

const {
    REACT_APP_API_KEY:API_KEY, 
    REACT_APP_END_POINT:END_POINT
} = process.env

export const client = new ApolloClient({
    uri:END_POINT,
    headers:{
        'x-api-key':API_KEY
    },
    clientState: {
        resolvers,
        defaults
    }
})
