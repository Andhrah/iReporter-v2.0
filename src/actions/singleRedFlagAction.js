import request from '../utils/http';
import actionTypeGenerator from './typesGenerator';

export const getSingleRedFlagType = actionTypeGenerator('RED_FLAG');

/**
 * Action creator that is dispatched when user starts operation
 * @returns {object} The action to dispatch
 */

export const getSingleRedflagsLoading = () => ({
  type: getSingleRedFlagType.LOADING,
});

/**
 * Action creator that is dispatched when operation is successful
 * @returns {object} The action to dispatch
 */

export const getSingleRedflagsSuccess = data => ({
  type: getSingleRedFlagType.SUCCESS,
  payload: data,
});

/**
 * Action creator that is dispatched when operation failed
 * @returns {object} The action to dispatch
 */

export const getSingleRedflagsFailure = error => ({
  type: getSingleRedFlagType.FAILURE,
  error
});

/**
 * @description Request to the API to get latest reported icident
 * @returns {object} dispatch object
 */

export const getSingleRedflag = id => async (dispatch) => {
  dispatch(getSingleRedflagsLoading());
  try {
    const response = await request({
      route: `red-flags/${id}`,
      method: 'get',
    });
    const { data: { data } } = response;
    dispatch(getSingleRedflagsSuccess(data));
  } catch (err) {
    dispatch(getSingleRedflagsFailure(err));
  }
};
