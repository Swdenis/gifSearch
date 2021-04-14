import { DELETE_GIF, GET_GIFS, SET_GIF } from '../actions/types'
import _ from 'lodash'

export const gifReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_GIF:
      return { ...state, [action.payload]: action.payload }
    case DELETE_GIF:
      return _.omit(state, [action.payload])
    case GET_GIFS:
      return { ...state, ..._.mapKeys(action.payload, 'id') }
    default:
      return state
  }
}
