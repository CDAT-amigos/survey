import React from 'react'
import { AppSyncQueryArray } from '../AppSync/components'
import InfiniteScroll from 'react-infinite-scroll-component'
import {GET_USERS_QUERY} from '../apollo/gqlQueries'

export default ()=>(
    <AppSyncQueryArray 
        query={GET_USERS_QUERY} 
        type='APPEND'
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