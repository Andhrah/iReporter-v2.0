import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InterventionsView from '../presentational/Interventions';
import { getAllInterventions } from '../../actions';

class Interventions extends Component {
  componentDidMount() {
    const {
      getAllInterventions: fetchInterventions,
    } = this.props;
    fetchInterventions();
  }

  render() {
    const { interventions } = this.props;

    return (
      <InterventionsView interventions={interventions} />
    );
  }
}

Interventions.propTypes = {
  getAllInterventions: PropTypes.func,
  interventions: PropTypes.array,
};

Interventions.defaultProps = {
  getAllInterventions: () => {},
  interventions: [],
};

const mapStateToProps = state => ({
  interventions: state.allRedFlags.data,
});

export default connect(mapStateToProps, { getAllInterventions })(Interventions);
