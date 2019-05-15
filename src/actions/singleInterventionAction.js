import request from '../utils/http';
import actionTypeGenerator from './typesGenerator';

export const getSingleInterventionType = actionTypeGenerator('INTERVENTION');

/**
 * Action creator that is dispatched when user starts operation
 * @returns {object} The action to dispatch
 */

export const getSingleInterventionLoading = () => ({
  type: getSingleInterventionType.LOADING,
});

/**
 * Action creator that is dispatched when operation is successful
 * @returns {object} The action to dispatch
 */

export const getSingleInterventionSuccess = data => ({
  type: getSingleInterventionType.SUCCESS,
  payload: data,
});

/**
 * Action creator that is dispatched when operation failed
 * @returns {object} The action to dispatch
 */

export const getSingleInterventionFailure = error => ({
  type: getSingleInterventionType.FAILURE,
  error
});

/**
 * @description Request to the API to get latest reported icident
 * @returns {object} dispatch object
 */

export const getSingleIntervention = id => async (dispatch) => {
  dispatch(getSingleInterventionLoading());
  try {
    const response = await request({
      route: `interventions/${id}`,
      method: 'get',
    });
    const { data: { data } } = response;
    dispatch(getSingleInterventionSuccess(data));
  } catch (err) {
    dispatch(getSingleInterventionFailure(err));
  }
};
