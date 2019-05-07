import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Image from './Image';

const HomepageIncidentCard = ({ incident, type }) => {
  let title = '';
  if (type === 'redFlag') {
    title = incident.corruption_methods.join(', ');
  } else if (type === 'intervention') {
    title = incident && incident.intervention_reasons && incident.intervention_reasons.join(', ');
  }
  return (
    <div className="incident-container-all list homepage">
      <Image
      src="http://lorempixel.com/400/400"
      alt="red-flag incident"
    />
      <div className="home-comment">
        <h4>{title}</h4>
        <p>
          {incident.comment.length <= 100 ? incident.comment : `${incident.comment.substring(0, 100)} ...`}
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
  );
};

HomepageIncidentCard.propTypes = {
  incident: PropTypes.object,
  type: PropTypes.string,
};

HomepageIncidentCard.defaultProps = {
  incident: {},
  type: '',
};

export default HomepageIncidentCard;
