
import jwt from 'jsonwebtoken';

const checkAuthentication = () => {
  if (!localStorage.getItem('access_token')) {
    window.location.href = ('/login');
  }
  try {
    localStorage.getItem('access_token') && jwt.verify(localStorage.getItem('access_token'), process.env.SECRET_KEY);
  } catch (error) {
    window.location.href = ('/login');
  }
};

export default checkAuthentication;
