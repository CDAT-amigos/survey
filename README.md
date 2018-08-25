## Survey

This application is a survey application.  

## Roadmap

TODO!!

## Test API

Run `npm run testapi`

## Layout

GraphQL queries and mutations are stored in [gqlQueries](./src/apollo/gqlQueries/index.js)

AppSync typically has a very stringent schema structure that has relatively (but deterministically) deep nested object structure.  To simplify boilerplate, I added two components which wrap the Mutation and Query Apollo components.  These are intended for use with array data and are located in [AppSync]('./src/AppSync/components/index.js).  

Client side resolvers are located in the [resolvers](./src/apollo/resolvers) folder. I've created a reusable AppSync friendly resolver generator.  For how to use, see the [updateUserAttributes](./src/apollo/resolvers/updateUserAttributes.js) resolver.




