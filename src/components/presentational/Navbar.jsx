import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../public/images/logo.png';
import toggle from '../../utils/navbarToggle';

const Navbar = () => (
  <div className="wrapper">
    <header>
      <div className="branding">
        <Link to="/">
          <img src={Logo} alt="iReporter logo" />
        </Link>
      </div>
      <nav className="navbar" id="topnav">
        <ul>
          <li><Link to="/redflags">Red-flags records</Link></li>
          <li><Link to="/interventions">Intervention records</Link></li>
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
          <li></li>
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

export default Navbar;
