import actionTypeGenerator from './typesGenerator';
import request from '../utils/http';

export const getInterventionType = actionTypeGenerator('INTERVENTIONS');

/**
 * Action creator that is dispatched when user starts operation
 * @returns {object} The action to dispatch
 */

export const getAllInterventionsLoading = () => ({
  type: getInterventionType.LOADING,
});

/**
 * Action creator that is dispatched when operation is successful
 * @returns {object} The action to dispatch
 */

export const getAllInterventionsSucess = data => ({
  type: getInterventionType.SUCCESS,
  payload: data,
});

/**
 * Action creator that is dispatched when operation failed
 * @returns {object} The action to dispatch
 */

export const getAllInterventionsFailure = error => ({
  type: getInterventionType.FAILURE,
  error
});

/**
 * @description Request to the API to get latest reported icident
 * @returns {object} dispatch object
 */

export const getAllInterventions = () => async (dispatch) => {
  dispatch(getAllInterventionsLoading());
  try {
    const response = await request({
      route: 'red-flags',
      method: 'get',
    });
    const { data: { data } } = response;
    dispatch(getAllInterventionsSucess(data));
  } catch (err) {
    dispatch(getAllInterventionsFailure(err));
  }
};
