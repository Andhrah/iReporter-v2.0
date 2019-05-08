import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import RedFlag from '../../components/presentational/RedFlag';

const props = {
  redFlag: {
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
  },
};

describe('RedFlag test suite', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <MemoryRouter>
        <RedFlag {...props} />
      </MemoryRouter>
    );
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
