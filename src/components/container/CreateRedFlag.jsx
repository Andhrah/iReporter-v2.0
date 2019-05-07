import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import RedFlagForm from '../presentational/RedFlagForm';
import { createRedFlag } from '../../actions';
import { mediaUpload } from '../../actions/mediaUpload';
import Navbar from '../presentational/Navbar';

let splittedNames;
let usersComment;
// eslint-disable-next-line react/prefer-stateless-function
class CreateRedFlag extends Component {
  refFlagImage = React.createRef();

  state = {
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
      }
      if (name === 'comment') {
        usersComment = value.split(',');
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
    //     var formData = new FormData();
    // formData.append.upload_preset = 'thrikypy';
    //     formData.append('file', this.refFlagImage.current.files[0]);

    // isplay the values
    // for (var value of formData.values()) {
    //    console.log(value);
    // }
    // const formData = new FormData();
    // console.log(this.refFlagImage.current.files[0]);
    // if (this.refFlagImage.current.files[0].name.length > 0) {
    //   formData.append('userpic', this.refFlagImage.current.files[0], 'chris.jpg');
    //   console.log(formData);
    // }
    // formData.append.upload_preset = 'thrikypy';
    // formData.append('file', this.refFlagImage.current.files[0]);

    // await uploadImage(formData);
    // const { newValues } = this.state;
    // secureUrl && this.setState({
    //   newValues: Object.assign(newValues, {
    //     redFlagImages: secureUrl,
    //   }),
    // });
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

    const { history } = this.props;
    history.push('/redflags');
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

const mapStateToProps = state => ({
  secureUrl: state.mediaUpload
});

CreateRedFlag.propTypes = {
  createRedFlag: PropTypes.func,
  mediaUpload: PropTypes.func,
  secureUrl: PropTypes.string,
};

CreateRedFlag.defaultProps = {
  createRedFlag: () => {},
  mediaUpload: () => {},
  secureUrl: '',
};

export default connect(mapStateToProps, { createRedFlag, mediaUpload })(CreateRedFlag);
