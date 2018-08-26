import React from 'react'
import { AppSyncQueryArray } from '../AppSync/components'
import InfiniteScroll from 'react-infinite-scroll-component'
import {GET_USERS_QUERY} from '../apollo/gqlQueries'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import FolderIcon from '@material-ui/icons/Folder'
import Typography from '@material-ui/core/Typography'

const loader=(
    <Typography 
        variant="subheading"      
        gutterBottom
    >
        Loading...
    </Typography>
)
const endMessage=(
    <Typography 
        variant="subheading"      
        gutterBottom
    >
        End of Surveys
    </Typography>
)
export default ()=>(
    <AppSyncQueryArray 
        query={GET_USERS_QUERY} 
        type='APPEND'
    >
        {({data:{nextToken, items}, getNext})=>(
            <List dense={true}>
                <InfiniteScroll 
                    height={300}
                    dataLength={items.length} 
                    next={getNext} 
                    hasMore={nextToken}
                    loader={loader}
                    endMessage={endMessage}
                >
                    {items.map(({id, name, role})=>(
                        <ListItem key={id}>
                            <ListItemAvatar>
                                <Avatar>
                                    <FolderIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={name}
                                secondary={role}
                            />
                        </ListItem>
                    ))}
                </InfiniteScroll>
            </List>
        )}
    </AppSyncQueryArray>
)