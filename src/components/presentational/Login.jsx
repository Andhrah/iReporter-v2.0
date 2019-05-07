import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Login = ({
  handleChange, handleSubmit, values, errors
}) => {
  const {
    email,
    password,
  } = values;
  const {
    email: emailError,
    password: passwordError,
  } = errors;
  return (
    <section className="form-section">
      <div className="form-container" id="signin-wrapper">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="error" id="login-error" />
          <div className="input-container">
            <label htmlFor="email">Email/Username</label>
            <input type="email" value={email} name="email" onChange={handleChange} className="text-input" id="email" required />
            <div className="error" id="email-error">{emailError}</div>
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input type="password" value={password} name="password" onChange={handleChange} className="text-input" id="password" required />
            <div className="error" id="password-error">{passwordError}</div>
          </div>
          <button type="submit" className="form-primary-btn" id="login">
        Sign In
          </button>
        </form>
        <div className="second-btn">
          <h4 className="form-h4">Don't have an account?</h4>
        </div>
        <p className="repeating-linear">
          <Link to="signup" className="form-secondary-btn">
        Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

Login.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  values: PropTypes.object,
  errors: PropTypes.object,
};

Login.defaultProps = {
  handleChange: () => {},
  handleSubmit: () => {},
  values: {},
  errors: {},
};

export default Login;
