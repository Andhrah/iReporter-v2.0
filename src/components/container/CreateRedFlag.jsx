import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import RedFlagForm from '../presentational/RedFlagForm';
import { createRedFlag } from '../../actions';
import Navbar from '../presentational/Navbar';

let splittedNames;
let usersComment;
// eslint-disable-next-line react/prefer-stateless-function
export class CreateRedFlag extends Component {
  refFlagImage = React.createRef();

  state = {
    redFlagCreated: false,
    selectedDay: new Date(),
    // eslint-disable-next-line react/no-unused-state
    values: {
      homeCorruption: 'Corruption at home',
      ghostWorker: 'Fake or Ghost worker',
      bribery: 'Bribery',
      embezzlement: 'Embezzlement, Fraud',
      theft: 'Theft',
      drugs: 'Drug trafficking (cocaine etc)',
      powerAbuse: 'Abuse of power',
      otherCorruptionMethod: 'Others',
      specifyOtherCorruptionMethod: false,
      publicHospital: 'Public/government hospital',
      police: 'Police',
      customPolice: 'Custom Officer',
      judge: 'Magistrate or Judge',
      privateHospital: 'Private hospital',
      publicBasicSchool: 'Public/state nusery/primary school',
      publicHighSchool: 'Public/state secondary school',
      privateBasicSchool: 'Private nusery/primary school',
      privateHighSchool: 'Federal/national government department',
      federalGov: 'Federal/national government department',
      stateGov: 'State government department',
      localGov: 'Local government department',
      otherEntity: 'Others',
      specifyOtherEntity: '',
      corruptionDate: new Date().toDateString,
      redFlagImages: false,
      redFlagVideos: false,
    },
    newValues: {
      homeCorruption: '',
      ghostWorker: '',
      bribery: '',
      embezzlement: '',
      theft: '',
      drugs: '',
      powerAbuse: '',
      otherCorruptionMethod: '',
      specifyOtherCorruptionMethod: '',
      publicHospital: '',
      police: '',
      customPolice: '',
      judge: '',
      privateHospital: '',
      publicBasicSchool: '',
      publicHighSchool: '',
      privateBasicSchool: '',
      privateHighSchool: '',
      federalGov: '',
      stateGov: '',
      localGov: '',
      otherEntity: '',
      specifyOtherEntity: '',
      corruptionDate: new Date().toDateString,
      redFlagImages: false,
      redFlagVideos: false,
    }
  }

  /**
   * @description - This function handles the set the new state
   * when an element state changes in a form field managed by a component,
   * we track it using the onChange attribute
   * @param {object} event - This is the event object
   */

  handleChange = async (event) => {
    const { name, value, checked } = event.target;
    if (checked && name !== 'namesInvolved' && name !== 'corruptionDate' && name !== 'comment') {
      const { newValues } = this.state;
      await this.setState({
        newValues: Object.assign(newValues, {
          [name]: value
        }),
      });
    } else {
      if (name === 'namesInvolved') {
        splittedNames = value.split(',');
        return splittedNames;
      }
      if (name === 'comment') {
        usersComment = value.split(',');
        return usersComment;
      }
    }
  }

  handleDayClick = (day) => {
    this.setState({ selectedDay: day });
  }

  /**
   * This function handles the onsubmit event. It triggers validation and sends data to the API
   * @param {object} event - This is the event object
   */

  handleSubmit = async (event) => {
    event.preventDefault();

    const { createRedFlag: createUserRedFlag } = this.props;
    
    const {
      newValues: {
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
        redFlagImages,
        redFlagVideos
      }
    } = this.state;

    const { selectedDay } = this.state;
    const corruptionMethods = [homeCorruption,
      ghostWorker,
      bribery,
      embezzlement,
      theft,
      drugs,
      powerAbuse,
      otherCorruptionMethod,
      specifyOtherCorruptionMethod].filter(Boolean); // remove empty strings
    const entityInvolved = [publicHospital,
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
      specifyOtherEntity].filter(Boolean); // remove empty strings
    const groupedUserData = {
      corruptionMethods,
      entityInvolved,
      location: '5.605874, 8.349147',
      namesInvolved: splittedNames,
      images: redFlagImages,
      videos: redFlagVideos,
      comment: usersComment.toString(),
      corruptionDate: selectedDay,
    };
    createUserRedFlag(groupedUserData);
    ToastsStore.success('Thank you for sending this red flag, we will follow it up');

    await this.setState({
      redFlagCreated: true,
    });
    const { redFlagCreated } = this.state;
    if (redFlagCreated) {
      const { history } = this.props;
      history.push('/redflags');
    }
  }


  render() {
    const { values, selectedDay } = this.state;
    return (
      <Fragment>
        <Navbar
        firstname={localStorage.getItem('firstname')}
        lastname={localStorage.getItem('lastname')}
        email={localStorage.getItem('email')}
        username={localStorage.getItem('username')}
         />
        <RedFlagForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          values={values}
          handleDayClick={this.handleDayClick.bind(this)}
          selectedDay={selectedDay}
          refFlagImage={this.refFlagImage}
        />
        <ToastsContainer store={ToastsStore} />
      </Fragment>
    );
  }
}

CreateRedFlag.propTypes = {
  createRedFlag: PropTypes.func,
  history: PropTypes.array,
};

CreateRedFlag.defaultProps = {
  createRedFlag: () => {},
  history: [],
};

export default connect(null, { createRedFlag })(CreateRedFlag);
