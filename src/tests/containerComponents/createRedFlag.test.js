import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import ConnectedCreateRedFlag, { CreateRedFlag } from '../../components/container/CreateRedFlag';

const props = {
  createIntervention: jest.fn(),
};

const eventName = {
  target: {
    value: 'Alexandra, Leticia, Jacinta',
    name: 'namesInvolved'
  }
};

const eventUsersComment = {
  target: {
    value: 'Alexandra, Leticia, Jacinta',
    name: 'comment'
  }
};

const event = {
  preventDefault: jest.fn(),
};

describe('CreateRedFlag test suite', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <ConnectedCreateRedFlag {...props} />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('handles day click correctly', () => {
    const wrapper = shallow(
      <CreateRedFlag {...props} />
    );
    wrapper.instance().handleDayClick(new Date('December 17, 2019 03:24:00'));
    expect(wrapper.instance().state.selectedDay).toEqual(new Date('December 17, 2019 03:24:00'));
  });

  it('handles change correctly', () => {
    const wrapper = shallow(
      <CreateRedFlag {...props} />
    );
    expect(wrapper.instance().state.redFlagCreated).toEqual(false);
    const splittedNames = wrapper.instance().handleChange(eventName);
    expect(typeof (splittedNames)).toEqual('object');
    const usersComment = wrapper.instance().handleChange(eventUsersComment);
    expect(typeof (usersComment)).toEqual('object');
  });

  it('handles submmit correctly', async () => {
    const wrapper = shallow(
      <CreateRedFlag {...props} />
    );
    expect(wrapper.instance().state.redFlagCreated).toEqual(false);
    await wrapper.instance().handleSubmit(event);
    await expect(wrapper.instance().state.redFlagCreated).toEqual(true);
  });
});
