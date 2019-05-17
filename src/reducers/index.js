import { combineReducers } from 'redux';
import allRedFlagReducer from './allRedFlagReducer';
import allInterventionsReducer from './allInterventionsReducer';
import singleRedFlagReducer from './singleRedFlagReducer';
import signUpReducer from './signupReducer';
import singleInterventionReducer from './singleInterventionReducer';

export default combineReducers({
  allRedFlags: allRedFlagReducer,
  allInterventions: allInterventionsReducer,
  singleRedFlag: singleRedFlagReducer,
  singleIntervention: singleInterventionReducer,
  signUp: signUpReducer,
});
