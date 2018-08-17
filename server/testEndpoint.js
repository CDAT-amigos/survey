const {request} = require('graphql-request')

//TODO!! Make query work with actual app sync schema
const query = `{
  Movie(title: "Inception") {
    releaseDate
    actors {
      name
    }
  }
}`

//TODO!! add correct url
request('https://api.graph.cool/simple/v1/movies', query).then(data => console.log(data))