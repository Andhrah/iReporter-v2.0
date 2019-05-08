import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Signup from '../../components/presentational/Signup';

const props = {
  handleChange: () => {},
  handleSubmit: () => {},
  values: {
    economy: 'economy',
    badroad: 'badroad',
    badHousing: 'badHousing',
    noElectricity: 'noElectricity',
    poorElectricity: 'poorElectricity',
    refuseDamping: 'refuseDamping',
    collapsedBridge: 'collapsedBridge',
    otherReasons: 'nothing',
    otherReasonsSpecify: 'nothing',
    interventionDate: '2019-05=04',
    describe: 'describe',
    interventionImages: 'interventionImages.png',
  },
  errors: {
    emailError: 'invalid email',
    passwordError: 'inavlid password',
  }
};

describe('Signup  test suite', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Signup {...props} />
      </MemoryRouter>
    );
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
