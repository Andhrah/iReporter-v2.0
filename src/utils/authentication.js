
// import jwt from 'jsonwebtoken';

// const checkAuthentication = () => {
//   const decoded = jwt.verify(localStorage.getItem('access_token'), process.env.SECRET_KEY);
//   const tokenexpiry = decoded.exp;
//   const today = new Date().getTime() / 1000;
//   if (today > tokenexpiry || !localStorage.getItem('access_token')) {
//     window.location.href('/login');
//   }
// };

// export default checkAuthentication;
