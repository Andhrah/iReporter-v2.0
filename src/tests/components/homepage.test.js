import Homepage from '../../components/container/Homepage';

describe('<Homepage /> rendering', () => {
  it('should render one <p>', () => {
    const wrapper = shallow(<Homepage />);
    expect(wrapper.children('p')).toHaveLength(1);
    console.log(wrapper.children());
  });
});
