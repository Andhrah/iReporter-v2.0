import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InterventionsView from '../presentational/Interventions';
import { getAllInterventions } from '../../actions';
import Navbar from '../presentational/Navbar';

export class Interventions extends Component {
  componentDidMount() {
    const {
      getAllInterventions: fetchInterventions,
    } = this.props;
    fetchInterventions();
  }

  render() {
    const { interventions } = this.props;

    return (
      <>
        <Navbar
          firstname={localStorage.getItem('firstname')}
          lastname={localStorage.getItem('lastname')}
          email={localStorage.getItem('email')}
          username={localStorage.getItem('username')}
          />
        <InterventionsView interventions={interventions} />
      </>
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
  interventions: state.allInterventions.data,
});

export default connect(mapStateToProps, { getAllInterventions })(Interventions);
