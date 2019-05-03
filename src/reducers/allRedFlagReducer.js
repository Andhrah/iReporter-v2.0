import { getRedFlagType } from '../actions/allRedFlagAction';

const INITIAL_STATE = {
  data: [],
  loading: '',
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case getRedFlagType.LOADING:
      return { ...state, loading: true };
    case getRedFlagType.SUCCESS:
      return { ...state, data: action.payload };
    case getRedFlagType.FAILURE:
      return { ...state, loading: false, data: '' };
    default:
      return state;
  }
};
