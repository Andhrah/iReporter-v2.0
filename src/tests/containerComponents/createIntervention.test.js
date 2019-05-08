import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import ConnectedCreateIntervention, { CreateIntervention } from '../../components/container/CreateIntervention';

const props = {
  createIntervention: jest.fn(),
};

const eventDescribe = {
  target: {
    value: 'We will intervene shortly',
    name: 'describe'
  }
};

const event = {
  preventDefault: jest.fn(),
};

describe('CreateIntervention test suite', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <ConnectedCreateIntervention {...props} />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('handles change correctly', () => {
    const wrapper = shallow(
      <CreateIntervention {...props} />
    );
    expect(wrapper.instance().state.interventionCreated).toEqual(false);
    const interventionDescription = wrapper.instance().handleChange(eventDescribe);
    expect(typeof (interventionDescription)).toEqual('object');
  });

  it('handles submmit correctly', async () => {
    const wrapper = shallow(
      <CreateIntervention {...props} />
    );
    expect(wrapper.instance().state.interventionCreated).toEqual(false);
    await wrapper.instance().handleSubmit(event);
    await expect(wrapper.instance().state.interventionCreated).toEqual(true);
  });
});
