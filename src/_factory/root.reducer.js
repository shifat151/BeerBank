import { combineReducers } from 'redux';
import { beer } from './beer.reducer';

const rootReducer = combineReducers({
  beers: beer
});

export default rootReducer;
