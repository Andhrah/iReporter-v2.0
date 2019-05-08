import request from '../utils/http';
import actionTypeGenerator from './typesGenerator';

const createInterventionType = actionTypeGenerator('CREATE_INTERVENTION');

/**
 * Action creator that is dispatched when user starts operation
 * @returns {object} The action to dispatch
 */

export const createInterventionLoading = () => ({
  type: createInterventionType.LOADING,
});

/**
 * Action creator that is dispatched when operation is successful
 * @returns {object} The action to dispatch
 */

export const createInterventionSuccess = data => ({
  type: createInterventionType.SUCCESS,
  payload: data,
});

/**
 * Action creator that is dispatched when operation failed
 * @returns {object} The action to dispatch
 */

export const createInterventionFailure = error => ({
  type: createInterventionType.FAILURE,
  error
});

/**
 * @description Request to the API to get latest reported icident
 * @returns {object} dispatch object
 */

export const createIntervention = userData => async (dispatch) => {
  dispatch(createInterventionLoading());
  try {
    const response = await request({
      route: 'interventions',
      method: 'post',
      payload: userData,
    });
    const { data: { data } } = response;
    dispatch(createInterventionSuccess(data));
  } catch (err) {
    dispatch(createInterventionFailure(err));
  }
};
