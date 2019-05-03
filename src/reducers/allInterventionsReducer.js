import { getInterventionType } from '../actions/allInterventionAction';

const INITIAL_STATE = {
  data: [],
  loading: '',
};

/**
 * @description - articles reducer function
 * @param {object} [state=initialState] - Initial state to load
 * @param {Function} action - Action to dispatch
 * @returns {object}
 */

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case getInterventionType.LOADING:
      return { ...state, loading: true };
    case getInterventionType.SUCCESS:
      return { ...state, data: action.payload };
    case getInterventionType.FAILURE:
      return { ...state, loading: false, data: '' };
    default:
      return state;
  }
};
