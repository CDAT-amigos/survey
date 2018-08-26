//this is for client side state management using apollo
import {
  GET_USER_ATTRIBUTES
} from '../gqlQueries'
import {
  generateResolver
} from '../../AppSync/helpers'

export default generateResolver(GET_USER_ATTRIBUTES)