/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InterventionView from '../presentational/Intervention';
import { getSingleIntervention } from '../../actions/singleInterventionAction';
import Navbar from '../presentational/Navbar';
import checkAuthentication from '../../utils/authentication';

export class Intervention extends Component {
  state = {
    editMode: false,
    activeEditField: '',
    showDeleteModal: false,
    deleted: false
  };

  async componentDidMount() {
    const {
      match: { params: { id } },
      getSingleIntervention: fetchSingleIntervention
    } = await this.props;
    await fetchSingleIntervention(id);
  }

  render() {
    const { singleIntervention: { data, loading } } = this.props;
    checkAuthentication();
    return (
      !loading
      && (
      <>
        <Navbar
          firstname={localStorage.getItem('firstname')}
          lastname={localStorage.getItem('lastname')}
          email={localStorage.getItem('email')}
          username={localStorage.getItem('username')}
          />
        { data.length > 0 && <InterventionView intervention={data[0]} /> }
      </>
      )
    );
  }
}

Intervention.propTypes = {
  match: PropTypes.object.isRequired,
  getSingleIntervention: PropTypes.func.isRequired,
  singleIntervention: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  singleIntervention: state.singleIntervention
});


export default connect(mapStateToProps, { getSingleIntervention })(Intervention);
