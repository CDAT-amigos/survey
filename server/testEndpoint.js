const {GraphQLClient} = require('graphql-request')
const {API_KEY}=process.env

//TODO!! Make query work with actual app sync schema
const query = `{
  Movie(title: "Inception") {
    releaseDate
    actors {
      name
    }
  }
}`

const client= new GraphQLClient(
    'https://finozlhfpjgh5a6lzt2yefvwoi.appsync-api.us-east-2.amazonaws.com/graphql', 
    {
        headers:{
            Authorization:API_KEY
        }
    }
)

client.request(query).then(data => console.log(data))