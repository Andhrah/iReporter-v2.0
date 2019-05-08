import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import ConnectedSignup, { Signup } from '../../components/container/Signup';

const props = {
  createIntervention: jest.fn(),
  history: {
    push: jest.fn(n => n),
  }
};

const eventSuccess = {
  target: {
    value: 'alexandra@test.com',
    name: 'email'
  }
};

const eventClearError = {
  target: {
    value: '',
    name: 'email'
  }
};

const eventSubmit = {
  preventDefault: jest.fn(),
};

describe('Signup test suite', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <ConnectedSignup {...props} />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('handles validation correctly', () => {
    const wrapper = shallow(
      <Signup {...props} />
    );
    expect(wrapper.instance().state.errors.email).toEqual('');
    expect(wrapper.instance().state.errors.password).toEqual('');
    // Email validation
    wrapper.instance().handleValidation({ email: undefined, password: 'password' });
    expect(wrapper.instance().state.errors.email).toEqual('Please enter a valid email');
    // password validation
    wrapper.instance().handleValidation({ email: 'validuser@test.com', password: undefined });
    expect(wrapper.instance().state.errors.password).toEqual('Please enter a valid password, password must not be less than 6 characters');
  });

  it('handles change correctly', () => {
    const wrapper = shallow(
      <Signup {...props} />
    );
    // Success
    expect(wrapper.instance().state.values.email).toEqual('');
    wrapper.instance().handleChange(eventSuccess);
    expect(wrapper.instance().state.values.email).toEqual(eventSuccess.target.value);

    // Clear Error
    wrapper.setState({
      errors: {
        email: 'Invalid email'
      }
    });
    wrapper.instance().handleChange(eventClearError);
    expect(wrapper.instance().state.errors.email).toEqual(eventClearError.target.value);
  });

  it('handles submmit correctly', async () => {
    const wrapper = shallow(
      <Signup {...props} />
    );
    wrapper.setState({
      values: {
        email: 'validnewuser@test.com',
        password: 'password',
        firstname: 'validnewuser',
        lastname: 'lastnamevalidnewuser',
        othername: '',
        username: 'validnewuser',
        phoneNumber: '07065432145',
        confirmPassword: 'password',
      }
    });
    expect(wrapper.instance().state.signUpCompleted).toEqual(false);
    await wrapper.instance().handleSubmit(eventSubmit);
    await expect(wrapper.instance().state.signUpCompleted).toEqual(true);
  });
});
