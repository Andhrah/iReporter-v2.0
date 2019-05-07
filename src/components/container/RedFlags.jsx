import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RedFlagsView from '../presentational/RedFlags';
import { getAllRedflags } from '../../actions';
import Navbar from '../presentational/Navbar';

class RedFlags extends Component {
  async componentDidMount() {
    const {
      getAllRedflags: fetchRedFlags,
    } = this.props;
    await fetchRedFlags();
  }

  render() {
    const { redFlags } = this.props;
    console.log(redFlags);

    return (
      <>
        <Navbar
          firstname={localStorage.getItem('firstname')}
          lastname={localStorage.getItem('lastname')}
          email={localStorage.getItem('email')}
          username={localStorage.getItem('username')}
          />
        <RedFlagsView redFlags={redFlags} />
      </>
    );
  }
}

RedFlags.propTypes = {
  getAllRedflags: PropTypes.func,
  redFlags: PropTypes.array,
};

RedFlags.defaultProps = {
  getAllRedflags: () => {},
  redFlags: [],
};

const mapStateToProps = state => ({
  redFlags: state.allRedFlags.data,
});

export default connect(mapStateToProps, { getAllRedflags })(RedFlags);
