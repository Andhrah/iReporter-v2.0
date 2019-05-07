/* eslint-disable react/jsx-no-bind */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../../public/images/logo.png';
import toggle from '../../utils/navbarToggle';

const Navbar = ({
  firstname, lastname, username, email
}) => (
  <div className="wrapper">
    <header>
      <div className="branding">
        <Link to="/">
          <img src={logo} alt="iReporter logo" />
        </Link>
      </div>
      <nav className="navbar" id="topnav">
        <ul>
          <li><Link to="/redflags">Red-flags</Link></li>
          <li><Link to="/interventions">Interventions</Link></li>
          <li><Link to="/create-redflag">Report Corruption</Link></li>
          <li><Link to="/create-intervention">Call for Intervention</Link></li>
          {firstname && lastname && username && email ? (
            <Fragment>
              {/* <span>
                Welcome
                {' '}
              </span> */}
              <span>
                {firstname}
                {' '}
              </span>
              <span>
                <button
                  type="button"
                  className="logout"
                  onClick={() => {
                    localStorage.clear();
                    window.location.href = '/';
                  }}>
                    LOG OUT
                </button>

              </span>
            </Fragment>
          ) : (
            <Fragment>
              <li>
                <Link to="/signup">
                    Sign Up
                  <i className="fa fa-user-plus" />
                </Link>
              </li>
              <li>
                <Link to="/login">
                    Sign In
                  {' '}
                  <i className="fa fa-user" />
                </Link>
              </li>
            </Fragment>
          )
          }
          <li>
            <button
              type="button"
              // eslint-disable-next-line no-script-url
              to="javascript:void(0);"
              className="icon"
              onClick={toggle}>
              <i className="fa fa-bars" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  </div>

);


Navbar.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
};

Navbar.defaultProps = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
};

export default Navbar;
