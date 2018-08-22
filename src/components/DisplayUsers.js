import React from 'react'
import { Query } from 'react-apollo'
import InfiniteScroll from 'react-infinite-scroll-component'
import gql from 'graphql-tag'
const getUsersQuery=gql`
query listUsers($nextToken:String) {
  listUsers(limit:30 nextToken:$nextToken){
    items{
      id
      name
      role
    },
    nextToken
  }
}
`
/**the update query may be exportable.... similar to SubmitButton */
const next=({fetchMore, nextToken})=>()=>fetchMore({
    query:getUsersQuery,
    variables:{
        nextToken
    },
    updateQuery:(previousResult, {fetchMoreResult})=>{
        const {items:previousItems}=previousResult.listUsers
        const {items:nextItems, nextToken}=fetchMoreResult.listUsers
        return {
            ...fetchMoreResult,
            nextToken,
            listUsers:{
                ...fetchMoreResult.listUsers,
                items:[...previousItems, ...nextItems]
            }
        }
    }
})

export default ()=>(
    <Query query={getUsersQuery} >
        {({loading, error, data, fetchMore})=>{
            if(loading) return<p>Loading...</p>
            if(error) return <p>Error: {error.message}</p>
            console.log(data)
            const {listUsers}=data
            const {items, nextToken}=listUsers
            return (
                <div>
                    <ul>
                        <InfiniteScroll 
                            height={300}
                            dataLength={items.length} 
                            next={next({fetchMore, nextToken})} 
                            hasMore={nextToken}
                            loader={<h4>Loading...</h4>}
                            endMessage={
                                <p style={{textAlign: 'center'}}>
                                <b>Yay! You have seen it all</b>
                                </p>
                            }

                        >
                            {items.map(({id, name, role}, index)=>(
                                <li key={id||index}>{name}: {role}</li>)
                            )}
                        </InfiniteScroll>
                    </ul>
                </div>
            )
        }}
    </Query>
)