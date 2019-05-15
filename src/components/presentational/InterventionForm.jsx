import React from 'react';
import PropTypes from 'prop-types';

const InterventionForm = ({
  handleChange, handleSubmit, values,
}) => {
  const {
    economy,
    badroad,
    badHousing,
    noElectricity,
    poorElectricity,
    refuseDamping,
    collapsedBridge,
    otherReasons,
    otherReasonsSpecify,
    interventionDate,
    describe,
    interventionImages,
  } = values;

  return (
    <div className="report-form-container">
      <h3>
      Call for Government
        {' '}
        <span>Intervention</span>
      </h3>
      <form onSubmit={handleSubmit} className="report-form">
        <p>Reasons for intervention</p>
        <div className="first-checkbox-container">
          <div className="checkbox-container">
            <input type="checkbox" value={economy} name="economy" onChange={handleChange} />
            <label htmlFor="economy">Economy</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" value={badroad} name="badroad" onChange={handleChange} />
            <label htmlFor="badroad">Bad road</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" value={noElectricity} name="noElectricity" onChange={handleChange} />
            <label htmlFor="noElectricity">No electricity</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" value={poorElectricity} name="poorElectricity" onChange={handleChange} />
            <label htmlFor="poorElectricity">Poor electricity</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" value={refuseDamping} name="refuseDamping" onChange={handleChange} />
            <label htmlFor="refuseDamping">No provision refuse damping</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" value={badHousing} name="badHousing" onChange={handleChange} />
            <label htmlFor="badHousing">Housing under power tension</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" value={collapsedBridge} name="collapsedBridge" onChange={handleChange} />
            <label htmlFor="collapsedBridge">Collapse</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" value={otherReasons} name="otherReasons" onChange={handleChange} />
            <label htmlFor="otherReasons">Others</label>
          </div>
        </div>
        <div className="checkbox-container">
          <label htmlFor="otherReasonsSpecify">If others, please specify</label>
          <input type="text" value={otherReasonsSpecify} name="otherReasonsSpecify" onChange={handleChange} />
        </div>
        {/* ----------------------------------------------------------------------- */}
        {/* where it happened */}
        {/* --------------------------------------------------------------------- */}
        <p>Where did it happen?</p>
        <label htmlFor="namesInvolved">Location</label>
        <input style={{ height: 40, paddingLeft: 15, paddingRight: 15, fontSize: 17 }} name="displayLocation" onChange={handleChange} id="displayLocation" required />

        {/* <div className="map">Google Map</div> */}
        {/* ----------------------------------------------------- */}
        {/* when did it happen */}
        {/* ----------------------------------------------------- */}
        {/* <div className="checkbox-container">
          <label htmlFor="interventionDate">When did it happen?</label>
          <input type="text" value={interventionDate} name="interventionDate" onChange={handleChange} />
        </div> */}
        {/* --------------------------------------------------------------*/}
        {/* what happened */}
        {/* -------------------------------------------------------------*/}
        <div className="checkbox-container">
          <p>Please describe what happened?</p>
          <textarea name="describe" value={describe} onChange={handleChange} cols={50} rows={10} placeholder="Enter text here" />
        </div>
        {/* ----------------------------------------------------- */}
        {/* Add image(s) or Video */}
        {/* ----------------------------------------------------- */}
        {/* <div className="checkbox-container"> */}
        {/* <p>Add image or video related to reason for intervention</p> */}
        {/* <input value={interventionImages} name="interventionImages" onChange={handleChange} type="file" className="custom-file-input" /> */}
        {/* </div> */}
        <button type="submit" className="report-button">Call For Intervention</button>
      </form>
    </div>
  );
};

InterventionForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  values: PropTypes.object,
  // errors: PropTypes.object,
};

InterventionForm.defaultProps = {
  handleChange: () => {},
  handleSubmit: () => {},
  values: {},
  // errors: {},
};

export default InterventionForm;
