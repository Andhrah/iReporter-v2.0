import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Image from './Image';

const Interventions = ({ interventions }) => (
  <section className="section-flex">
    <div className="jumbotron">
      <div className="title-container">
        <h2>
          Interventions Reports
        </h2>
        <Link to="/redflags">
          <em>See Red-Flag reports</em>
        </Link>
      </div>
    </div>
    <div className="grid-container" id="red-flag-grid-container">
      {
        interventions.map(intervention => (
          <div className="incident-container-all list incidents" key={intervention.id}>
            <Image src="http://lorempixel.com/400/400" alt="red-flag incident" />
            <div id="created-by" className="author">
              <em id="created-on">{`created on ${new Date(intervention.created_on).toDateString()} by`}</em>
              {' '}
              {intervention.created_by}
            </div>
            <div className="location">
              <p>
                Location:
                {' '}
                <span><em>{intervention.location}</em></span>
                {' '}
              </p>
            </div>
            <div className="status">
              <p className="none">
                Status:
                {' '}
                <span><em>{intervention.status}</em></span>
              </p>
            </div>
            <div className="comment">
              <h4>
                Dispalay me
                {/* {intervention.intervention_reasons} */}
              </h4>
              <p>
                {intervention.comment.length <= 100 ? intervention.comment : `${intervention.comment.substring(0, 100)} ...`}
              </p>
            </div>
            <div>
              <Link to="redflag" className="read-more">
                Read more
                {' '}
                <i className="fas fa-angle-right" />
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  </section>
);

Interventions.propTypes = {
  interventions: PropTypes.array,
};


Interventions.defaultProps = {
  interventions: [],
};

export default Interventions;
