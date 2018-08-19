import {graphql, commitMutation} from 'react-relay'
const mutationCreateUser=graphql`
mutation mutationsMutation($input: CreateUserInput!) {
  createUser(input:$input){
    id,
    name,
    role
  }
}
`
const sharedUpdaterCreateUser=store=>{
    const root = store.getRoot()
    const newItem=store.getRootField('createUser') //do I need to replicate this logic or not in optimisticUpdater?
    console.log(newItem.getValue('name'))
    console.log(newItem.getValue('role'))
    console.log(newItem.getValue('id'))
    const users=root.getLinkedRecord('listUsers') //should have an "items" aspect
    const existingUsers=users.getLinkedRecords('items')||[]
    users.setLinkedRecords([...existingUsers, newItem], 'items')
}
let tempId=0 //seems like bad practice :|
export const createUser=(environment, name, role)=>commitMutation(
    environment,
    {
        mutation:mutationCreateUser,
        variables:{
            input:{
                name,
                role
            }
        },
        onCompleted:(response, error)=>{
            console.log(response)
        },
        /*optimisticUpdater:store=>{
            //const root=store.getRoot()

            const id=`client:newUser:${tempId++}`
            const newItem=store.create(id, 'createUser') //how does this not create anything??
            newItem.setValue(name, 'name')
            newItem.setValue(role, 'role')
            newItem.setValue(id, 'id')
            //I really dont like how relay mutates :|
            sharedUpdaterCreateUser(store)
        },*/
        updater: store=>{
            sharedUpdaterCreateUser(store)
        }
    }
)