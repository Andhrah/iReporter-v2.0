import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import HomepageIncidentCard from '../../components/presentational/homepageIncidentCard';

const props = {
  incident: {
    corruption_methods: ['theft'],
    comment: 'this is ared flag',
  },
  type: 'intervention',
};

describe('homepageIncidentCard test suite', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <MemoryRouter>
        <HomepageIncidentCard {...props} />
      </MemoryRouter>
    );
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
