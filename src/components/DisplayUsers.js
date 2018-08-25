import React from 'react'
import { AppSyncQueryArray } from '../AppSync/components'
import InfiniteScroll from 'react-infinite-scroll-component'
import gql from 'graphql-tag'

//import {updateArrayAppSync} from '../apollo/helpers'
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
/*
const updateLocal=updateArrayAppSync('listUsers', 'APPEND')
const next=({fetchMore, nextToken})=>()=>fetchMore({
    query:getUsersQuery,
    variables:{
        nextToken
    },
    updateQuery:(previousResult, {fetchMoreResult})=>{
        return updateLocal(previousResult, fetchMoreResult)
    }
})*/
export default ()=>(
    <AppSyncQueryArray 
        query={getUsersQuery} 
        type='APPEND'
        //fetchPolicy='cache-and-network'
    >
        {({data:{nextToken, items}, getNext})=>(
            <ul>
                <InfiniteScroll 
                    height={300}
                    dataLength={items.length} 
                    next={getNext} 
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
        )}
    </AppSyncQueryArray>
)