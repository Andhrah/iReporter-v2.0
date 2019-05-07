import actionTypeGenerator from './typesGenerator';
import request from '../utils/http';

export const signupType = actionTypeGenerator('SIGN_UP');

/**
 * Action creator that is dispatched when user starts operation
 * @returns {object} The action to dispatch
 */

export const signupLoading = () => ({
  type: signupType.LOADING,
});

/**
 * Action creator that is dispatched when operation is successful
 * @returns {object} The action to dispatch
 */

export const signupSuccess = data => ({
  type: signupType.SUCCESS,
  payload: data,
});

/**
 * Action creator that is dispatched when operation failed
 * @returns {object} The action to dispatch
 */

export const signupFailure = error => ({
  type: signupType.FAILURE,
  error
});

/**
 * @description Request to the API to register user
 * @returns {object} dispatch object
 */

export const signup = userData => async (dispatch) => {
  dispatch(signupLoading());
  try {
    const response = await request({
      route: 'auth/signup',
      method: 'post',
      payload: userData,
    });
    const { data: { data } } = response;
    localStorage.setItem('access_token', data[0].token);
    localStorage.setItem('firstname', data[0].user[0].firstname);
    localStorage.setItem('lastname', data[0].user[0].lastname);
    localStorage.setItem('username', data[0].user[0].username);
    localStorage.setItem('email', data[0].user[0].email);
    dispatch(signupSuccess(data));
  } catch (err) {
    dispatch(signupFailure(err));
  }
};
