import { signupType } from '../actions/signupActions';

const INITIAL_STATE = {
  data: '',
  loading: '',
};

/**
 * @description - sign up reducer function
 * @param {object} [state=initialState] - Initial state to load
 * @param {Function} action - Action to dispatch
 * @returns {object}
 */

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case signupType.LOADING:
      return { ...state, loading: true };
    case signupType.SUCCESS:
      return { ...state, data: action.payload };
    case signupType.FAILURE:
      return { ...state, data: action.error };
    default:
      return state;
  }
};
