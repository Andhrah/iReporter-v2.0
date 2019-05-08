import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

const RedFlag = ({ redFlag }) => (
  <div className="wrapper">
    <div className="first-incident-container">

      <div className="jumbotron">
        <div className="title-container">
          <h2>
            Red-flag Report
          </h2>
        </div>
      </div>

      <div className="incident-container" id="single-red-flag">
        <div className="incident-image-lg" id="image-container">
          <Image src="http://lorempixel.com/400/400" alt="red-flag incident" />
        </div>

        <div className="author" id="created-by">
          <em id="created-on">
            {new Date(redFlag && redFlag.created_on).toDateString()}
          </em>
        </div>

        <div className="location">
          <p id="location-paragraph">
            Location:
            <span>
              <em id="lacation-span-em">{redFlag && redFlag.names_involved[0]}</em>
            </span>
          </p>
        </div>
        <iframe allowFullScreen src={`https://maps.google.com/maps?q=${redFlag.names_involved[0]}&output=embed&hl=en;z=20`} frameBorder="0" title={redFlag.names_involved[0]} className="map" />

        <div className="status">
          <p>
            Status:
            {' '}
            <span>
              <em id="statusEm">{redFlag && redFlag.status}</em>
            </span>
          </p>
        </div>

        <div className="comment">
          <h4 id="corruption-methods">{redFlag && redFlag.corruption_methods.join(', ')}</h4>
          <p id="corruption-date">{`corruption Date/Period: ${new Date(redFlag.created_on).toDateString()}`}</p>
          <p id="main-comment">
            {redFlag && redFlag.comment}
          </p>
        </div>

        {/* ------------------------------------------ */}
        {/* The Modal */}
        {/* ------------------------------------------ */}
        {/* <div id="myModal" className="modal"> */}
        {/* Modal content */}
        {/* <div className="modal-content">
      <span className="close">×</span>
      <p>
        Please Note: You can only edit the
        <strong>Location and Comment</strong>
        {' '}
        of a record.
      </p> */}
        {/* <div className="btn">
        What do you wish to edit?
        <button type="button" className="edit" id="edit-btn-comment">Edit Comment</button>
        <button type="button" className="edit" id="edit-btn-location">Edit Location</button>
      </div>
    </div>
  </div> */}

        {/* ---------------------- */}
        {/* Comment modal */}
        {/* ---------------------- */}
        {/* <div id="commentModal" className="modal"> */}
        {/* Modal content */}
        {/* <div className="modal-content">
      <span id="close" className="close">×</span>
      <textarea name id="comment" cols={50} rows={10} placeholder="Enter text here" defaultValue="" />
      <div className="btn">
        <button type="button" className="edit" id="save-btn-comment">Save Comment</button>
      </div>
    </div>
  </div> */}

        {/* ------------------------- */}
        {/* Location modal */}
        {/* ------------------------- */}
        {/* <div id="locationModal" className="modal"> */}
        {/* Modal content */}
        {/* <div className="modal-content">
      <span id="close-location-modal" className="close">×</span>
      <p>
        Location should follow this format
        {' '}
        <strong>eg. 6.605874, 3.349149</strong>
      </p>
      <div>
        <p className="error" id="location-error" />
        <label htmlFor="location">Location</label>
        <input name="location" id="location" type="text" />
      </div>
      <div className="btn">
        <button type="button" className="edit" id="save-btn-location">Save Location</button>
      </div>
    </div>
  </div> */}

        {/* ------------------------- */}
        {/* Red-Flag Deletion modal */}
        {/* ------------------------- */}

        {/* <div id="deleteModal" className="modal"> */}
        {/* Modal content */}
        {/* <div className="modal-content">
      <span id="close-delete-modal" className="close">×</span>
      <p>
        <strong>
        Are you sure you want to
          {' '}
          <em>delete</em>
          {' '}
        this record?
        </strong>
      </p>
      <div className="btn">
        <button type="button" id="cancel">Cancel</button>
        <button type="button" id="delete-red-flag" className="delete">Delete</button>
      </div>
    </div>
  </div> */}

        {/* <div className="btn-container">
          <div className="btn"><button type="button" className="edit" id="edit-btn">Edit</button></div>
          <div className="btn"><button type="button" id="delete" className="delete">Delete</button></div>
        </div> */}

      </div>
    </div>
  </div>
);

RedFlag.propTypes = {
  redFlag: PropTypes.object.isRequired
};

export default RedFlag;
