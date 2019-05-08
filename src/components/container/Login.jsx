/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginView from '../presentational/Login';
import { login } from '../../actions';
import Navbar from '../presentational/Navbar';

/**
 * @class Signup
 * @extends { React }
*/

export class Login extends Component {
  state = {
    values: {
      email: '',
      password: '',
    },
    errors: {
      email: '',
      password: ''
    },
    signInCompleted: false,
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
    const { login: loginUser } = this.props;
    const {
      values: {
        email,
        password,
      }
    } = this.state;

    const userData = {
      email,
      password
    };
    const hasError = this.handleValidation(userData);
    if (!hasError) {
      loginUser(userData);
      const { history } = this.props;
      history.push('/');
      return this.setState({ signInCompleted: true });
    }
  }

  /**
   * This function validates data from the form
   * @param {object} data - This is data gotten from the form
   */
  handleValidation = (userData) => {
    const errors = {};
    if (!userData.email) {
      errors.email = 'Please enter a valid email';
    }
    if (!userData.password || userData.password.length < 6) {
      errors.password = 'Invalid password, password must not be less than 6 characters';
    }
    this.setState({ errors });
    return Object.keys(errors).some(field => Boolean(field));
  }

  render() {
    const { values, errors } = this.state;
    return (
      <>
        <Navbar />
        <LoginView
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          values={values}
          errors={errors}
        />
      </>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func,
  history: PropTypes.object.isRequired,
};

Login.defaultProps = {
  login: () => {},
};

export default connect(null, { login })(withRouter(Login));
