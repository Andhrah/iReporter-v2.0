import { combineReducers } from 'redux';
import allRedFlagReducer from './allRedFlagReducer';
import allInterventionsReducer from './allInterventionsReducer';
import singleRedFlagReducer from './singleRedFlagReducer';
import signUpReducer from './signupReducer';

export default combineReducers({
  allRedFlags: allRedFlagReducer,
  allInterventions: allInterventionsReducer,
  singleRedFlag: singleRedFlagReducer,
  signUp: signUpReducer,
});
