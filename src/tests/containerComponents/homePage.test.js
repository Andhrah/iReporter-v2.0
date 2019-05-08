import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import Homepage from '../../components/container/Homepage';

const props = {
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
  redFlags: [{
    id: 21,
    created_on: '2019-01-29T00:00:00.000Z',
    created_by: 1,
    corruption_methods: [
      'Bribery',
      ' Abuse of power'
    ],
    entity_involved: [
      'custom Officer',
      ' police'
    ],
    location: '6.605874, 3.349149',
    corruption_date: '2019-01-22T00:00:00.000Z',
    names_involved: [
      'Jane doe',
      ' John Bull'
    ],
    status: 'Under Investigation',
    images: [
      'image1',
      ' image2'
    ],
    videos: [
      'video1',
      ' video2'
    ],
    comment: 'Political corruption is a persistent phenomenon in Nigeria.'
  }, {
    id: 20,
    created_on: '2019-01-29T00:00:00.000Z',
    created_by: 1,
    corruption_methods: [
      'Bribery',
      ' Abuse of power'
    ],
    entity_involved: [
      'custom Officer',
      ' police'
    ],
    location: '6.605874, 3.349149',
    corruption_date: '2019-01-22T00:00:00.000Z',
    names_involved: [
      'Jane doe',
      ' John Bull'
    ],
    status: 'Under Investigation',
    images: [
      'image1',
      ' image2'
    ],
    videos: [
      'video1',
      ' video2'
    ],
    comment: 'Political corruption is a persistent phenomenon in Nigeria.'
  }],
};

describe('Homepage test suite', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Homepage {...props} />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
