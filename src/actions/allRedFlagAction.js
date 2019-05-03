import axios from 'axios';
import actionTypeGenerator from './typesGenerator';

export const getRedFlagType = actionTypeGenerator('RED_FLAG');

/**
 * Action creator that is dispatched when user starts operation
 * @returns {object} The action to dispatch
 */

export const getAllRedflagsLoading = () => ({
  type: getRedFlagType.LOADING,
});

/**
 * Action creator that is dispatched when operation is successful
 * @returns {object} The action to dispatch
 */

export const getAllRedflagsSucess = data => ({
  type: getRedFlagType.SUCCESS,
  payload: data,
});

/**
 * Action creator that is dispatched when operation failed
 * @returns {object} The action to dispatch
 */

export const getAllRedflagsFailure = error => ({
  type: getRedFlagType.FAILURE,
  error
});

/**
 * @description Request to the API to get latest reported icident
 * @returns {object} dispatch object
 */

export const getAllRedflags = () => async (dispatch) => {
  dispatch(getAllRedflagsLoading());
  try {
    const response = await axios.get('https://ireporter-1.herokuapp.com/api/v1/red-flags');
    const { data: { data } } = response;
    dispatch(getAllRedflagsSucess(data));
  } catch (err) {
    dispatch(getAllRedflagsFailure(err));
  }
};
