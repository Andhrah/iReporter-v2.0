import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import RedFlagForm  from '../../components/presentational/RedFlagForm';

const props = {
  handleChange: () => {},
  handleSubmit:  () => {},
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
  handleDayClick: () => {}, 
  selectedDay: new Date().toDateString(),
  refFlagImage: 'refFlagImage.png',
};

describe('RedFlagForm test suite', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <MemoryRouter>
        <RedFlagForm {...props} />
      </MemoryRouter>
    );
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
                                                                                                                                                                                                                