import allInterventionsReducer from '../../reducers/allInterventionsReducer';
import { getInterventionType } from '../../actions/allInterventionAction';
import { getAllInterventions } from '../../actions/allInterventionAction';

const interventions = [{
  id: 9,
  created_on: '2018-12-29T00:00:00.000Z',
  created_by: 2,
  intervention_reasons: [
    'Bribery',
    'emblezzlement'
  ],
  location: '6.605874, 8.34917',
  status: 'Under Investigation',
  images: [
    'image'
  ],
  videos: [
    'video'
  ],
  comment: 'We need government intervention'
}];

describe('allInterventionsReducer test suite', () => {
  it('return all interventions', () => {
    const INITIAL_STATE = {
      data: [],
      loading: '',
    };
    const state = allInterventionsReducer(INITIAL_STATE, getAllInterventions);
    expect(state).toEqual({
      data: [],
      loading: '',
    });
  });
});
