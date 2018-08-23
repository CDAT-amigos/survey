## Survey

This application is a survey application.  

## Roadmap

TODO!!

## Test API

Run `npm run testapi`

## Layout

GraphQL queries and mutations which make a network call should be co-located with the component.  See, for example [DisplayUsers](./src/components/DisplayUsers.js) or [SubmitButton](./src/components/SubmitButton.js).

GraphQL queries and mutations which are only for local state management should be stored in the [resolvers](./src/apollo/resolvers) folder.  These queries should be exported since they can be reused.  See, for example [TotalForm](./src/components/TotalForm.js) or [EnterUserAttributes](./src/components/EnterUserAttributes.js) 
