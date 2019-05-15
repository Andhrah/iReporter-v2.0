/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RedFlagView from '../presentational/RedFlag';
import { getSingleRedflag } from '../../actions/singleRedFlagAction';
import Navbar from '../presentational/Navbar';
import checkAuthentication from '../../utils/authentication';

export class RedFlag extends Component {
  state = {
    editMode: false,
    activeEditField: '',
    showDeleteModal: false,
    deleted: false
  };

  componentDidMount() {
    const { match: { params: { id } }, getSingleRedflag: fetchSingleRedflag } = this.props;
    fetchSingleRedflag(id);
  }

  render() {
    const { singleRedFlag: { data, loading } } = this.props;
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
        <RedFlagView redFlag={data[0]} />
      </>
      )
    );
  }
}

RedFlag.propTypes = {
  match: PropTypes.object.isRequired,
  getSingleRedflag: PropTypes.func.isRequired,
  singleRedFlag: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  singleRedFlag: state.singleRedFlag
});

export default connect(mapStateToProps, { getSingleRedflag })(RedFlag);
