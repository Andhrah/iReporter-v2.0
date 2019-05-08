import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import ConnectedRedFlag, { RedFlag } from '../../components/container/RedFlag';

const props = {
  getSingleRedflag: jest.fn(n => n * n),
  match: { params: { id: 1 } },
  singleRedFlag: { data: ['first value', 'second value'], loading: true },
};

describe('RedFlag test suite', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <ConnectedRedFlag {...props} />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('handles component did mount correctly', () => {
    const wrapper = shallow(
      <RedFlag {...props} />
    );
    wrapper.instance().componentDidMount();
    expect(wrapper.instance().props.getSingleRedflag).toHaveBeenCalled();
  });
});
