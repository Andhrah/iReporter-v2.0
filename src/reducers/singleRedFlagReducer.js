import { getSingleRedFlagType } from '../actions/singleRedFlagAction';

const INITIAL_STATE = {
  data: [{
    id: null,
    created_on: '',
    created_by: null,
    corruption_methods: [],
    entity_involved: [],
    location: '',
    corruption_date: '',
    names_involved: [],
    status: '',
    images: [],
    videos: [],
    comment: '',
  }],
  loading: false,
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case getSingleRedFlagType.LOADING:
      return { ...state, loading: true };
    case getSingleRedFlagType.SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case getSingleRedFlagType.FAILURE:
      return { ...state, loading: false, data: '' };
    default:
      return state;
  }
};
