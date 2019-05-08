import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/presentational/Footer';

describe('Footer  test suite', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
