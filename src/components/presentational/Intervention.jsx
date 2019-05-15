import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

const Intervention = ({ intervention }) => (
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
        <em>created on nov 22 2018 by</em>
        {' '}
        Andra
      </div>
      <div className="location">
        <p>
          Location:
          {' '}
          <span><em>Kano, Nigeria</em></span>
          {' '}
        </p>
      </div>
      <iframe allowFullScreen src={`https://maps.google.com/maps?q=${redFlag.names_involved[0]}&output=embed&hl=en;z=20`} frameBorder="0" title={redFlag.names_involved[0]} className="map" />
      <div className="status">
        <p>
          Status:
          {' '}
          <span>Resolved</span>
        </p>
      </div>
      <div className="comment">
        <h4>Bad Road</h4>
        <p>
          Residents of five communities in Kumbotso local
          government area of Kano state have threatened to
          boycott the routine polio immunization and 2019
          eneral elections if the authorities concerned
          fail to rehabilitate their damaged road that makes
          the areas inaccessible especially during rainy season.
          The affected communities are Yanlemo ‘Yan-Tasi,
          Mai Kalwa, Wailari, Kwarin Goje and Umarawa.
          Kano Chronicle observed that the residents have
          been battling with flooding, erosion and other
          related challenges courtesy of lack of good drainages.
          The Chairman, Amalgamation of Wailari and Mai Kalwa
          Communities’ Associations, Alhaji Nura Danjuma,
          said the affected communities had channeled their
          complaints to relevant authorities with a view to
          addressing the problem but their appeals were
          unsuccessful.
        </p>
      </div>
      <div className="btn-container">
        <div className="btn"><button type="button" className="edit">Edit</button></div>
        <div className="btn"><button type="button" className="delete">Delete</button></div>
      </div>
    </div>
  </div>
);

Intervention.propTypes = {
  intervention: PropTypes.object.isRequired
};

export default Intervention;
