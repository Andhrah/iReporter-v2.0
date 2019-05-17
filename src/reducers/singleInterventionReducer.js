import { getSingleInterventionType } from '../actions/singleInterventionAction';

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case getSingleInterventionType.LOADING:
      return { ...state, loading: true };
    case getSingleInterventionType.SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case getSingleInterventionType.FAILURE:
      return { ...state, loading: false, data: '' };
    default:
      return state;
  }
};
