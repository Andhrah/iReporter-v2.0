import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Signup = ({
  handleChange, handleSubmit, values, errors
}) => {
  const {
    firstname,
    lastname,
    othername,
    email,
    username,
    phoneNumber,
    password,
    confirmPassword,
  } = values;
  const {
    // Signup: signupError,
    firstname: firstnameError,
    lastname: lastnameError,
    othername: othernameError,
    email: emailError,
    username: usernameError,
    phoneNumber: phoneNumberError,
    password: passwordError,
    confirmPassword: confirmPasswordError,
  } = errors;
  return (
    <div className="wrapper">
      <div className="form-container" id="signup-wrapper">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container-grid">
            {/* <div className="error" id="signup-error">{signupError}</div> */}
            <div className="input-container">
              <label htmlFor="firstname">
                <span>*</span>
              First Name
              </label>
              <input type="text" value={firstname} name="firstname" onChange={handleChange} className="text-input" id="firstname" />
              <div className="error" id="firstname-error">{firstnameError}</div>
            </div>
            <div className="input-container">
              <label htmlFor="lastname">
                <span>*</span>
              Last Name
              </label>
              <input type="text" value={lastname} name="lastname" onChange={handleChange} className="text-input" id="lastname" />
              <div className="error" id="lastname-error">{lastnameError}</div>
            </div>
            <div className="input-container">
              <label htmlFor="othername">Other Name</label>
              <input type="text" value={othername} name="othername" onChange={handleChange} className="text-input" id="othername" />
              <div className="error" id="othername-error">{othernameError}</div>
            </div>
            <div className="input-container">
              <label htmlFor="email">
                <span>*</span>
              Email
              </label>
              <input type="email" value={email} name="email" onChange={handleChange} className="text-input" id="email" />
              <div className="error" id="email-error">{emailError}</div>
            </div>
            <div className="input-container">
              <label htmlFor="phoneNumber">
                <span>*</span>
              Phone Number
              </label>
              <input type="tel" title="Invalid phone number, please follow this pattern *********** e.g  08066677756" pattern="[0-9]{11}" value={phoneNumber} name="phoneNumber" onChange={handleChange} className="text-input" id="phone-number" />
              <div className="error" id="phone-number-error">{phoneNumberError}</div>
            </div>
            <div className="input-container">
              <label htmlFor="username">
                <span>*</span>
              Username
              </label>
              <input type="text" value={username} name="username" onChange={handleChange} className="text-input" id="username" />
              <div className="error" id="username-error">{usernameError}</div>
            </div>
            <div className="input-container">
              <label htmlFor="password">
                <span>*</span>
              Password
              </label>
              <input type="password" value={password} name="password" onChange={handleChange} className="text-input" id="password" />
              <div className="error" id="password-error">{passwordError}</div>
            </div>
            <div className="input-container">
              <label htmlFor="confirmPassword">
                <span>*</span>
              Confirm Password
              </label>
              <input type="password" value={confirmPassword} name="confirmPassword" onChange={handleChange} className="text-input" id="confirm-password" />
              <div className="error" id="confirm-password-error">{confirmPasswordError}</div>
            </div>
          </div>
          <button type="submit" className="form-primary-btn" id="signup">
          Sign Up
          </button>
        </form>
        <div className="second-btn">
          <h4 className="form-h4">Already have an account?</h4>
        </div>
        <p className="repeating-linear">
          <Link to="/login" className="form-secondary-btn">
          Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

Signup.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  values: PropTypes.object,
  errors: PropTypes.object,
};

Signup.defaultProps = {
  handleChange: () => {},
  handleSubmit: () => {},
  values: {},
  errors: {},
};

export default Signup;
