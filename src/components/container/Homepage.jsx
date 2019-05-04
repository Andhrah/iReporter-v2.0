import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomepageView from '../presentational/Homepage';
import { getAllRedflags, getAllInterventions } from '../../actions';

class Homepage extends Component {
  componentDidMount() {
    const {
      getAllRedflags: fetchRedFlags,
      getAllInterventions: fetchInterventions
    } = this.props;
    fetchRedFlags();
    fetchInterventions();
  }

  render() {
    const { redFlags, interventions } = this.props;
    return (
      <div>
        <HomepageView redFlags={redFlags} interventions={interventions} />
      </div>
    );
  }
}

Homepage.propTypes = {
  getAllRedflags: PropTypes.func,
  getAllInterventions: PropTypes.func,
  redFlags: PropTypes.array,
  interventions: PropTypes.array,
};

Homepage.defaultProps = {
  getAllRedflags: () => {},
  getAllInterventions: () => {},
  redFlags: [],
  interventions: [],
};

const mapStateToProps = state => ({
  redFlags: state.allRedFlags.data,
  interventions: state.allInterventions.data
});

const mapDispatchToProps = {
  getAllRedflags,
  getAllInterventions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
