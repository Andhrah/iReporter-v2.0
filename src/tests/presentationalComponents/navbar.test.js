import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../../components/presentational/Navbar';

const props = {
  firstname: 'Andra',
  lastname: 'Collins',
  username: 'Alexandra',
  email: 'alexandra@test.com',
};

describe('Navbar test suite', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Navbar {...props} />
      </MemoryRouter>
    );
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
  it('logs a user out', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Navbar {...props} />
      </MemoryRouter>
    );
    wrapper.find('.logout').simulate('click');
    expect(wrapper.instance().props.firstname).toEqual(undefined);
  });
});
