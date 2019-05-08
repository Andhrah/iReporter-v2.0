import React from 'react';
import { shallow } from 'enzyme';
import ContentLoader from '../../components/presentational/ContentLoader';

describe('ContentLoader  test suite', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<ContentLoader />);
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
