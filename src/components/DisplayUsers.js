import React from 'react'
import { Query } from 'react-apollo'
import InfiniteScroll from 'react-infinite-scroll-component'
import gql from 'graphql-tag'

export const getUsersQuery=gql`
query listUsers($nextToken:String) {
  listUsers(limit:20 nextToken:$nextToken){
    items{
      id
      name
      role
    },
    nextToken
  }
}
`

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
    <Query 
        query={getUsersQuery} 
        fetchPolicy='cache-and-network'
    >
        {({loading, error, data, fetchMore})=>{
            console.log(data)
            const items=data.listUsers?data.listUsers.items:[]
            const nextToken=data.listUsers?data.listUsers.nextToken:null
            return (
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
            )
        }}
    </Query>
)