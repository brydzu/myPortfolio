import { combineReducers } from 'redux';
import FirstReducer from './FirstReducer'
const rootReducer = combineReducers({
  first: FirstReducer
});

export default rootReducer;
