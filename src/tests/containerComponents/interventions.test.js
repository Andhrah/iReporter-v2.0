import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import ConnectedInterventions, { Interventions } from '../../components/container/Interventions';

const props = {
  getAllInterventions: jest.fn(n => n * n),
  interventions: [{
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
  }],
};

describe('Interventions test suite', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <ConnectedInterventions {...props} />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('handles component did mount correctly', () => {
    const wrapper = shallow(
      <Interventions {...props} />
    );
    wrapper.instance().componentDidMount();
    expect(wrapper.instance().props.getAllInterventions).toHaveBeenCalled();
  });
});
