import React from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


const RedFlagForm = ({
  handleChange, handleSubmit, values, handleDayClick, selectedDay,
}) => {
  const {
    homeCorruption,
    ghostWorker,
    bribery,
    embezzlement,
    theft,
    drugs,
    powerAbuse,
    otherCorruptionMethod,
    specifyOtherCorruptionMethod,
    publicHospital,
    police,
    customPolice,
    judge,
    privateHospital,
    publicBasicSchool,
    publicHighSchool,
    privateBasicSchool,
    privateHighSchool,
    federalGov,
    stateGov,
    localGov,
    otherEntity,
    specifyOtherEntity,
    comment,
    namesInvolved,
  } = values;

  return (
    <div className="report-form-container">
      <h3>
      Report
        {' '}
        <span>Red-flag</span>
        {' '}
      incident or corruption (alleged)
      </h3>

      <form onSubmit={handleSubmit} className="report-form">

        <p>Type Of Incident/Corruption (choose all that relates)</p>

        <div className="first-checkbox-container">

          {/* <div className="error" id="corruption-method-error" /> */}
          <div className="checkbox-container">
            <input value={homeCorruption} name="homeCorruption" onChange={handleChange} className="corruption-method-input" id="home-corruption" type="checkbox" />
            <label htmlFor="homeCorruption">Corruption at home</label>
          </div>

          <div className="checkbox-container">
            <input value={ghostWorker} name="ghostWorker" onChange={handleChange} className="corruption-method-input" id="ghost-worker" type="checkbox" />
            <label htmlFor="ghostWorker">Fake or Ghost worker</label>
          </div>

          <div className="checkbox-container">
            <input value={bribery} name="bribery" onChange={handleChange} className="corruption-method-input" id="bribery" type="checkbox" />
            <label htmlFor="bribery">Bribery</label>
          </div>

          <div className="checkbox-container">
            <input value={embezzlement} name="embezzlement" onChange={handleChange} className="corruption-method-input" id="embezzlement" type="checkbox" />
            <label htmlFor="embezzlement">Embezzlement, Fraud</label>
          </div>

          <div className="checkbox-container">
            <input value={theft} name="theft" onChange={handleChange} className="corruption-method-input" id="theft" type="checkbox" />
            <label htmlFor="theft">Theft</label>
          </div>

          <div className="checkbox-container">
            <input value={drugs} name="drugs" onChange={handleChange} className="corruption-method-input" id="drugs" type="checkbox" />
            <label htmlFor="drugs">Drug trafficking (cocaine etc)</label>
          </div>

          <div className="checkbox-container">
            <input value={powerAbuse} name="powerAbuse" onChange={handleChange} className="corruption-method-input" id="power-abuse" type="checkbox" />
            <label htmlFor="powerAbuse">Abuse of power</label>
          </div>

          <div className="checkbox-container">
            <input value={otherCorruptionMethod} name="otherCorruptionMethod" onChange={handleChange} id="others" type="checkbox" />
            <label htmlFor="otherCorruptionMethod">Others</label>
          </div>

        </div>

        <div id="other-method-container" className="checkbox-container other-input">
          <label htmlFor="specifyOtherCorruptionMethod">If others, please specify</label>
          <input value={specifyOtherCorruptionMethod} name="specifyOtherCorruptionMethod" onChange={handleChange} id="other-methods" type="text" />
        </div>

        {/* ------------------------------------------------------ */}
        {/* Entity or body involved */}
        {/* ------------------------------------------------------ */}
        <p>Entity or people involved (include all that are involved)</p>
        <div className="first-checkbox-container">
          {/* <div className="error" id="entity-involved-error" /> */}

          <div className="checkbox-container">
            <input value={publicHospital} name="publicHospital" onChange={handleChange} className="entity-involved-input" id="public-hospital" type="checkbox" />
            <label htmlFor="publicHospital">Public/government hospital</label>
          </div>

          <div className="checkbox-container">
            <input value={police} name="police" onChange={handleChange} className="entity-involved-input" id="police" type="checkbox" />
            <label htmlFor="police">Police</label>
          </div>
          <div className="checkbox-container">
            <input value={customPolice} name="customPolice" onChange={handleChange} className="entity-involved-input" id="custom-officer" type="checkbox" />
            <label htmlFor="customPolice">Custom Officer</label>
          </div>
          <div className="checkbox-container">
            <input value={judge} name="judge" onChange={handleChange} className="entity-involved-input" id="judge" type="checkbox" />
            <label htmlFor="judge">Magistrate or Judge</label>
          </div>

          <div className="checkbox-container">
            <input value={privateHospital} name="privateHospital" onChange={handleChange} className="entity-involved-input" id="private-hospital" type="checkbox" />
            <label htmlFor="privateHospital">Private hospital</label>
          </div>

          <div className="checkbox-container">
            <input value={publicBasicSchool} name="publicBasicSchool" onChange={handleChange} className="entity-involved-input" id="public-basic-school" type="checkbox" />
            <label htmlFor="publicBasicSchool">Public/state nusery/primary school</label>
          </div>

          <div className="checkbox-container">
            <input value={publicHighSchool} name="publicHighSchool" onChange={handleChange} className="entity-involved-input" id="public-high-school" type="checkbox" />
            <label htmlFor="publicHighSchool">Public/state secondary school</label>
          </div>

          <div className="checkbox-container">
            <input value={privateBasicSchool} name="privateBasicSchool" onChange={handleChange} className="entity-involved-input" id="private-basic-school" type="checkbox" />
            <label htmlFor="privateBasicSchool">Private nusery/primary school</label>
          </div>

          <div className="checkbox-container">
            <input value={privateHighSchool} name="privateHighSchool" onChange={handleChange} className="entity-involved-input" id="private-high-school" type="checkbox" />
            <label htmlFor="privateHighSchool">Private secondary school</label>
          </div>

          <div className="checkbox-container">
            <input value={federalGov} name="federalGov" onChange={handleChange} className="entity-involved-input" id="federal-gov" type="checkbox" />
            <label htmlFor="federalGov">Federal/national government department</label>
          </div>

          <div className="checkbox-container">
            <input value={stateGov} name="stateGov" onChange={handleChange} className="entity-involved-input" id="state-gov" type="checkbox" />
            <label htmlFor="stateGov">State government department</label>
          </div>

          <div className="checkbox-container">
            <input value={localGov} name="localGov" onChange={handleChange} className="entity-involved-input" id="local-gov" type="checkbox" />
            <label htmlFor="localGov">Local government department</label>
          </div>

          <div className="checkbox-container">
            <input value={otherEntity} name="otherEntity" onChange={handleChange} id="other-entity" type="checkbox" />
            <label htmlFor="otherEntity">Others</label>
          </div>

        </div>

        <div id="other-entity-container" className="checkbox-container other-input">
          <label htmlFor="specifyOtherEntity">If other, please specify</label>
          <input value={specifyOtherEntity} name="specifyOtherEntity" onChange={handleChange} id="other-entity-involved" type="text" />
        </div>

        {/* --------------------------------------------------------------*/}
        {/* what happened */}
        {/* -------------------------------------------------------------*/}
        <div className="checkbox-container">
          <p>Please describe what happened?</p>
          <div className="error" id="comment-error" />
          <textarea value={comment} name="comment" onChange={handleChange} id="comment" cols={50} rows={10} placeholder="Enter text here" required />
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* where it happened */}
        {/* --------------------------------------------------------------------- */}
        <p>Where did it happen?</p>
        <div className="error" id="location-error" />
        <label htmlFor="namesInvolved">Location</label>
        <input value={namesInvolved} style={{ height: 40, paddingLeft: 15, paddingRight: 15, fontSize: 17 }} name="namesInvolved" onChange={handleChange} id="names-involved" required />
        {/* <div className="map">
          <Map
            // google={this.props.google}
            center={{ lat: 9.081999, lng: 8.675277 }}
            height="300px"
            zoom={8}
          />
        </div> */}
        {/* ----------------------------------------------------- */}
        {/* when did it happen */}
        {/* ----------------------------------------------------- */}
        <div className="checkbox-container">
          <label htmlFor="corruptionDate">When did it happen?</label>
          <div className="error" id="corruption-date-error" />
          <DayPicker onDayClick={handleDayClick} selectedDays={selectedDay} required />
        </div>
        {/* ----------------------------------------------------- */}
        {/* Names of those involved */}
        {/* ----------------------------------------------------- */}
        {/* <div className="checkbox-container">
          <label htmlFor="namesInvolved">Location</label>
          <div className="error" id="names-involved-error" />
          <input value={namesInvolved} name="namesInvolved" onChange={handleChange} id="names-involved" cols={50} rows={10} required />
        </div> */}
        {/* ----------------------------------------------------- */}
        {/* Add image(s) or Video */}
        {/* ----------------------------------------------------- */}
        {/* <div className="checkbox-container">
          <p>Add image(s) related to the incident/corruption</p>
          <div className="error" id="image-error" />
          <input name="redFlagImages" ref={refFlagImage} id="images" type="file" accept="image/*" className="custom-file-input" defaultValue="" />
        </div>

        <div className="checkbox-container">
          <p>Add video(s) related to the incident/corruption</p>
          <div className="error" id="video-error" />
          <input name="redFlagVideos" onChange={handleChange} id="videos" type="file" className="custom-file-input" />
        </div> */}

        <button type="submit" className="report-button" id="report-red-flag">Report Red-flag</button>
      </form>
    </div>
  );
};

RedFlagForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  values: PropTypes.object,
  handleDayClick: PropTypes.func.isRequired,
  selectedDay: PropTypes.instanceOf(Date).isRequired,
  refFlagImage: PropTypes.instanceOf(Image).isRequired,
};

RedFlagForm.defaultProps = {
  handleChange: () => {},
  handleSubmit: () => {},
  values: {},
};

export default RedFlagForm;
