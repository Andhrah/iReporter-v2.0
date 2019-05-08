import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import InterventionForm from '../presentational/InterventionForm';
import { createIntervention } from '../../actions';
import Navbar from '../presentational/Navbar';


let describe;

export class CreateIntervention extends Component {
  state = {
    interventionCreated: false,
    // eslint-disable-next-line react/no-unused-state
    values: {
      badroad: 'Economy',
      economy: 'Bad road',
      badHousing: 'No electricity',
      noElectricity: 'No electricity',
      poorElectricity: 'Poor electricity',
      refuseDamping: 'No provision refuse damping',
      collapsedBridge: 'Collapse',
      otherReasons: false,
      otherReasonsSpecify: false,

      interventionDate: new Date().toDateString,
      interventionImages: false,
      interventionVideos: false,

    },
    newValues: {
      badroad: '',
      economy: '',
      badHousing: '',
      noElectricity: '',
      poorElectricity: '',
      refuseDamping: '',
      collapsedBridge: '',
      otherReasons: false,
      otherReasonsSpecify: false,
      interventionDate: new Date().toDateString,
      interventionImages: false,
      interventionVideos: false,
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
    if (checked && name !== 'describe') {
      const { newValues } = this.state;
      await this.setState({
        newValues: Object.assign(newValues, {
          [name]: value
        }),
      });
    } else if (name === 'describe') {
      describe = value.split(',');
      return describe;
    }
  }

  /**
   * This function handles the onsubmit event. It triggers validation and sends data to the API
   * @param {object} event - This is the event object
   */

  handleSubmit = async (event) => {
    event.preventDefault();
    const { createIntervention: createUserIntervention } = this.props;
    const {
      newValues: {
        economy,
        badroad,
        badHousing,
        noElectricity,
        poorElectricity,
        refuseDamping,
        collapsedBridge,
        otherReasons,
        otherReasonsSpecify,
        interventionImages,
        interventionVideos,
      }
    } = this.state;


    const groupedUserData = {
      interventionReasons: [economy,
        badroad,
        badHousing,
        noElectricity,
        poorElectricity,
        refuseDamping,
        collapsedBridge,
        otherReasons,
        otherReasonsSpecify].filter(Boolean),
      location: '5.605874, 8.349147',
      images: interventionImages,
      videos: interventionVideos,
      comment: describe,
    };
    createUserIntervention(groupedUserData);

    ToastsStore.success('Thank you for sending this intervention, we will follow it up');

    await this.setState({
      interventionCreated: true,
    });
    const { interventionCreated } = this.state;
    if (interventionCreated) {
      const { history } = this.props;
      history.push('/interventions');
    }
  }

  render() {
    const { values } = this.state;
    return (
      <>
        <Navbar
          firstname={localStorage.getItem('firstname')}
          lastname={localStorage.getItem('lastname')}
          email={localStorage.getItem('email')}
          username={localStorage.getItem('username')}
          />
        <InterventionForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          values={values}
        />
        <ToastsContainer store={ToastsStore} />
      </>
    );
  }
}

CreateIntervention.propTypes = {
  createIntervention: PropTypes.func,
  history: PropTypes.array,
};

CreateIntervention.defaultProps = {
  createIntervention: () => {},
  history: [],
};

export default connect(null, { createIntervention })(CreateIntervention);
