/**
 * @flow
 * @relayHash dc726ea48244eec30eba3be4a92777fe
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateUserInput = {
  name: string,
  role: string,
};
export type mutationsMutationVariables = {|
  input: CreateUserInput
|};
export type mutationsMutationResponse = {|
  +createUser: ?{|
    +id: string,
    +name: string,
    +role: string,
  |}
|};
export type mutationsMutation = {|
  variables: mutationsMutationVariables,
  response: mutationsMutationResponse,
|};
*/


/*
mutation mutationsMutation(
  $input: CreateUserInput!
) {
  createUser(input: $input) {
    id
    name
    role
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateUserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateUserInput!"
      }
    ],
    "concreteType": "User",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "role",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "mutationsMutation",
  "id": null,
  "text": "mutation mutationsMutation(\n  $input: CreateUserInput!\n) {\n  createUser(input: $input) {\n    id\n    name\n    role\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "mutationsMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "mutationsMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0a5e4b3bec1564a6976a21f94f3801e9';
module.exports = node;
