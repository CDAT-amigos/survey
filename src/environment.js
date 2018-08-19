import {
    Environment,
    Network,
    RecordSource,
    Store,
} from 'relay-runtime'
const {
    REACT_APP_API_KEY: API_KEY, 
    REACT_APP_END_POINT: END_POINT
}=process.env

const fetchQuery=(
    operation,
    variables,
)=>{
    return fetch(END_POINT, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "x-api-key":API_KEY
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then(response => {
        return response.json()
    })
}
  
const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),  
})
  
export default environment;