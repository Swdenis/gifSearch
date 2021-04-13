import { SET_GIF } from '../actions/types';

export const gifReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_GIF:
      return { ...state, item: action.payload };
    default:
      return state;
  }
};
