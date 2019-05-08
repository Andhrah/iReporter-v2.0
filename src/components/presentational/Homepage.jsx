import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomepageIncidentCard from './homepageIncidentCard';
import Navbar from './Navbar';

const Homepage = ({ redFlags, interventions }) => (
  <>
    <Navbar
        firstname={localStorage.getItem('firstname')}
        lastname={localStorage.getItem('lastname')}
        email={localStorage.getItem('email')}
        username={localStorage.getItem('username')}
         />
    <section className="showcase">
      <div className="content">

        <div className="title">
          Welcome to iReporter
        </div>

        <div className="text">
          You can report
          {' '}
          <em id="corrupt">corruption</em>
          {' '}
          or call for government
          {' '}
          <em>intervention.</em>
          {' '}
          All reports are carefully assessed.
        </div>

        <hr />
        <Link to="/signup" className="btn-get-start">
          Get Started!
          {' '}
          <i className="fas fa-angle-double-right" />
        </Link>
      </div>
      <div className="overlay" />
    </section>


    <section className="home-section">
      <h2 className="home-h2">
      Latest Red-flag Incident Records
      </h2>
      <div className="grid-container">
        {
        redFlags.length > 0 && redFlags.splice(0, 4).map(redFlag => (
          <HomepageIncidentCard key={redFlag.id} incident={redFlag} type="redFlag" />
        ))
      }
      </div>
    </section>

    <section className="home-section">
      <h2 className="home-h2">
        Latest Intervention Incident Records
      </h2>
      <div className="grid-container">
        {
          interventions.length > 0 && interventions.splice(0, 4).map(intervention => (
            <HomepageIncidentCard key={intervention.id} incident={intervention} type="intervention" />
          ))
        }
      </div>
    </section>

  </>
);

Homepage.propTypes = {
  redFlags: PropTypes.array,
  interventions: PropTypes.array,
};


Homepage.defaultProps = {
  redFlags: [],
  interventions: [],
};

export default Homepage;
