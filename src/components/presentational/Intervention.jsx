/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

const InterventionView = ({ intervention }) => (
  <div className="first-incident-container">
    <div className="jumbotron">
      <div className="title-container">
        <h2>
          Intervention Report
        </h2>
      </div>
    </div>
    <div className="incident-container">
      <div className="incident-image-lg">
        <Image src="http://lorempixel.com/400/400" alt="red-flag incident" />
      </div>
      <div className="author">
        <em>{new Date(intervention && intervention.created_on).toDateString()}</em>
        {' '}
        Andra
      </div>
      <div className="location">
        <p>
          Location:
          {' '}
          <span><em>{intervention && intervention.display_location}</em></span>
          {' '}
        </p>
      </div>
      <iframe allowFullScreen src={`https://maps.google.com/maps?q=${intervention.display_location}&output=embed&hl=en;z=20`} frameBorder="0" title={intervention.display_location} className="map" />
      <div className="status">
        <p>
          Status:
          {' '}
          <span>Resolved</span>
        </p>
      </div>
      <div className="comment">
        <h4>
          {intervention.intervention_reasons.length > 0 && intervention.intervention_reasons.map((eachIntervention, index) => {
            if (index < 2) {
              return (
                <span key={index}>
                  <span key={index}>{eachIntervention}</span>
                  <br />
                </span>
              );
            }
            return false;
          })}
        </h4>
        <p>
          {intervention.comment}
        </p>
      </div>
      <div className="btn-container">
        <div className="btn"><button type="button" className="edit">Edit</button></div>
        <div className="btn"><button type="button" className="delete">Delete</button></div>
      </div>
    </div>
  </div>
);

InterventionView.propTypes = {
  intervention: PropTypes.object.isRequired
};

export default InterventionView;
