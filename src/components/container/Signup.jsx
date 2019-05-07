/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignupView from '../presentational/Signup';
import { signup } from '../../actions';
import Navbar from '../presentational/Navbar';

/**
 * @class Signup
 * @extends { React }
 */

class Signup extends Component {
  state = {
    values: {
      firstname: '',
      lastname: '',
      othername: '',
      email: '',
      username: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
    errors: {
      signup: '',
      firstname: '',
      lastname: '',
      othername: '',
      email: '',
      username: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
    signUpCompleted: false,
  }

  /**
   * @description - This function handles the set the new state
   * when an element state changes in a form field managed by a component,
   * we track it using the onChange attribute
   * @param {object} event - This is the event object
   */

  handleChange = (event) => {
    const { name, value } = event.target;
    const { errors } = this.state;
    this.setState({
      errors: Object.assign({}, errors, {
        [name]: ''
      }),
    });
    this.setState(prevState => ({ values: { ...prevState.values, [name]: value } }));
  }

  /**
   * This function handles the onsubmit event. It triggers validation and sends data to the API
   * @param {object} event - This is the event object
   */

  handleSubmit = (event) => {
    event.preventDefault();
    const { signup: signupUser } = this.props;
    const {
      values: {
        firstname,
        lastname,
        othername,
        username,
        email,
        phoneNumber,
        password,
        confirmPassword
      }
    } = this.state;

    const userData = {
      firstname,
      lastname,
      othername,
      username,
      email,
      phoneNumber,
      password,
      confirmPassword,
    };

    const hasError = this.handleValidation(userData);
    if (!hasError) {
      signupUser(userData);
      const { history } = this.props;
      this.setState({ signUpCompleted: true, });
      history.push('/');
    }
  }

  /**
   * This function validates data from the form
   * @param {object} data - This is data gotten from the form
   */
  handleValidation = (userData) => {
    const errors = {};
    if (!userData.firstname || userData.firstname.length < 3) {
      errors.firstname = 'First Name should not be less than 3 letters';
    }
    if (!userData.lastname || userData.lastname.length < 3) {
      errors.lastname = 'Last Name should not be less than 3 letters';
    }
    if (!userData.username || userData.username.length < 3) {
      errors.username = 'Username should not be less than 3 digits';
    }
    if (!userData.phoneNumber) {
      errors.phoneNumber = 'Please enter a valid phone number';
    }
    if (!userData.email) {
      errors.email = 'Please enter a valid email';
    }
    if (userData.password !== userData.confirmPassword) {
      errors.password = 'password mismatch';
      errors.confirmPassword = 'password mismatch';
    }
    if (!userData.password || userData.password.length < 6) {
      errors.password = 'Please enter a valid password, password must not be less than 6 characters';
    }
    this.setState({ errors });
    return Object.keys(errors).some(field => Boolean(field));
  }

  render() {
    const { values, errors } = this.state;
    return (
      <>
        <Navbar />
        <SignupView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        values={values}
        errors={errors}
      />
      </>
    );
  }
}

Signup.propTypes = {
  signup: PropTypes.func,
  history: PropTypes.object.isRequired,
};

Signup.defaultProps = {
  signup: () => {},
};


export default connect(null, { signup })(withRouter(Signup));
