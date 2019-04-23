import { combineReducers } from 'redux';
import trucksReducer from './trucks_reducer';
import jobsReducer from './jobs_reducer';

const rootReducer = combineReducers({
  trucks: trucksReducer,
  jobs: jobsReducer,
});

export default rootReducer;
