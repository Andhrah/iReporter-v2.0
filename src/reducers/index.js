import { combineReducers } from 'redux';
import allRedFlagReducer from './allRedFlagReducer';
import allInterventionsReducer from './allInterventionsReducer';

export default combineReducers({
  allRedFlags: allRedFlagReducer,
  allInterventions: allInterventionsReducer,
});
