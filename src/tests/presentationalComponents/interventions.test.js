import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Interventions from '../../components/presentational/Interventions';

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
};

describe('Interventions test suite', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Interventions {...props} />
      </MemoryRouter>
    );
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
