import actionTypeGenerator from './typesGenerator';
import request from '../utils/http';

const loginType = actionTypeGenerator('LOGIN_IN');

/**
 * Action creator that is dispatched when user starts operation
 * @returns {object} The action to dispatch
 */

export const loginLoading = () => ({
  type: loginType.LOADING,
});

/**
 * Action creator that is dispatched when operation is successful
 * @returns {object} The action to dispatch
 */

export const loginSucess = data => ({
  type: loginType.SUCCESS,
  payload: data,
});

/**
 * Action creator that is dispatched when operation failed
 * @returns {object} The action to dispatch
 */

export const loginFailure = error => ({
  type: loginType.FAILURE,
  error
});

/**
 * @description Request to the API to get latest reported icident
 * @returns {object} dispatch object
 */

export const login = userData => async (dispatch) => {
  dispatch(loginLoading());
  try {
    const response = await request({
      route: 'auth/login',
      method: 'post',
      payload: userData,
    });
    const { data: { data } } = response;
    localStorage.setItem('access_token', data[0].token);
    localStorage.setItem('firstname', data[0].user[0].firstname);
    localStorage.setItem('lastname', data[0].user[0].flastname);
    localStorage.setItem('username', data[0].user[0].username);
    localStorage.setItem('email', data[0].user[0].email);
    dispatch(loginSucess(data));
  } catch (err) {
    dispatch(loginFailure(err));
  }
};
