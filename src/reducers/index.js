import { combineReducers } from 'redux';
import allRedFlagReducer from './allRedFlagReducer';
import allInterventionsReducer from './allInterventionsReducer';
import singleRedFlagReducer from './singleRedFlagReducer';
import signUpReducer from './signupReducer';
import mediaUploadReducer from './mediaUploadReducer';

export default combineReducers({
  allRedFlags: allRedFlagReducer,
  allInterventions: allInterventionsReducer,
  singleRedFlag: singleRedFlagReducer,
  signUp: signUpReducer,
  mediaUpload: mediaUploadReducer
});
