const {GraphQLClient} = require('graphql-request')
require('dotenv').config()
const {API_KEY}=process.env
console.log(API_KEY)

const query = `{
  listUsers{
    items{
      id
      name
      role
    }
  }
}
`

const client= new GraphQLClient(
    'https://finozlhfpjgh5a6lzt2yefvwoi.appsync-api.us-east-2.amazonaws.com/graphql', 
    {
        headers:{
            Authorization:API_KEY
        }
    }
)

client.request(query).then(data => console.log(data))