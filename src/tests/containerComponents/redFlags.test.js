import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import ConnectedRedFlags, { RedFlags } from '../../components/container/RedFlags';

const props = {
  getAllRedflags: jest.fn(n => n * n),
  redFlags: [{
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

describe('RedFlags test suite', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <ConnectedRedFlags {...props} />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('handles component did mount correctly', () => {
    const wrapper = shallow(
      <RedFlags {...props} />
    );
    wrapper.instance().componentDidMount();
    expect(wrapper.instance().props.getAllRedflags).toHaveBeenCalled();
  });
});
