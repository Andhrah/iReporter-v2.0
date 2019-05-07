// import axios from 'axios';
import actionTypeGenerator from './typesGenerator';
import request from '../utils/http';

const createRedFlagType = actionTypeGenerator('CREATE_REDFLAG');

/**
 * Action creator that is dispatched when user starts operation
 * @returns {object} The action to dispatch
 */

export const createRedFlagLoading = () => ({
  type: createRedFlagType.LOADING,
});

/**
 * Action creator that is dispatched when operation is successful
 * @returns {object} The action to dispatch
 */

export const createRedFlagSuccess = data => ({
  type: createRedFlagType.SUCCESS,
  payload: data,
});

/**
 * Action creator that is dispatched when operation failed
 * @returns {object} The action to dispatch
 */

export const createRedFlagFailure = error => ({
  type: createRedFlagType.FAILURE,
  error
});

/**
 * @description Request to the API to get latest reported icident
 * @returns {object} dispatch object
 */

export const createRedFlag = userData => async (dispatch) => {
  dispatch(createRedFlagLoading());
  try {
    const response = await request({
      route: 'red-flags',
      method: 'post',
      payload: userData,
    });
    const { data: { data } } = response;

    dispatch(createRedFlagSuccess(data));
  } catch (err) {
    dispatch(createRedFlagFailure(err));
  }
};
