import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RedFlagsView from '../presentational/RedFlags';
import { getAllRedflags } from '../../actions';

class RedFlags extends Component {
  componentDidMount() {
    const {
      getAllRedflags: fetchRedFlags,
    } = this.props;
    fetchRedFlags();
  }

  render() {
    const { redFlags } = this.props;

    return (
      <RedFlagsView redFlags={redFlags} />
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
