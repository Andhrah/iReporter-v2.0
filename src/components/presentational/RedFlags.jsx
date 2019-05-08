import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Image from './Image';

const RedFlags = ({ redFlags }) => (
  <section className="section-flex">
    <div className="jumbotron">
      <div className="title-container">
        <h2>
          Red-flag Reports
        </h2>
        <Link to="/interventions">
          <em>See Intervention reports</em>
        </Link>
      </div>
    </div>
    <div className="grid-container" id="red-flag-grid-container">
      {
        redFlags.map(redFlag => (
          <div className="incident-container-all list incidents" key={redFlag.id}>
            <Image src="http://lorempixel.com/400/400" alt="red-flag incident" />
            <div id="created-by" className="author">
              <em id="created-on">{`created on ${new Date(redFlag.created_on).toDateString()}`}</em>
              {' '}
              {/* {redFlag.created_by} */}
            </div>
            <div className="location">
              <p>
                Location:
                {' '}
                <span><em>{redFlag.names_involved[0]}</em></span>
                {' '}
              </p>
            </div>
            <div className="status">
              <p className="none">
                Status:
                {' '}
                <span><em>{redFlag.status}</em></span>
              </p>
            </div>
            <div className="comment">
              <h4>
                {redFlag.corruption_methods.length <= 2 ? redFlag.corruption_methods.join(', ') : redFlag.corruption_methods.slice(0, 2).join(', ')}
              </h4>
              <p>
                {redFlag.comment.length <= 100 ? redFlag.comment : `${redFlag.comment.substring(0, 100)} ...`}
              </p>
            </div>
            <div>
              <Link to={`/redflag/${redFlag.id}`} className="read-more">
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

RedFlags.propTypes = {
  redFlags: PropTypes.array,
};


RedFlags.defaultProps = {
  redFlags: [],
};

export default RedFlags;
