import { combineReducers } from 'redux';
import { gifReducer } from './gifReducer';

export default combineReducers({
  gifs: gifReducer,
});
