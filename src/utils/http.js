import axios from 'axios';

/**
 * Helper function that configures axios requests
 * @param {object} config The configuration data.
 * route - The route to make request to. e.g profiles, search?q=term&size=5
 * method - The HTTP method to use. e.g post, get, patch,
 * payload - The request body payload
 * token - The authorization token to use if any
 * @returns {Promise} The axios promise
 */

const token = localStorage.getItem('access_token');
axios.defaults.headers.common.Authorization = token;

const request = async (
  {
    route,
    method,
    payload,
  }
) => {
  // const { token } = JSON.parse(persisted.user);

  method = method || 'get';
  // const headers = {
  //   Authorization: `Bearer ${token}`,
  // };
  // if (!token) {
  //   delete headers.Authorization;
  // }
  return axios({
    data: payload,
    url: `${process.env.API_BASE_URL}/${route}`,
    method,
    // headers
  });
};

// const request = async () => {
//   const url = 'https://ireporter-1.herokuapp.com/api/v1/auth/signup';
//   const options = {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       firstname,
//       lastname,
//       othername,
//       email,
//       phoneNumber,
//       username,
//       password,
//     }),
//   };

export default request;
