// import keymirror from 'keymirror';

// const Action = keymirror({
//   ALL_REDFLAG: null,
//   ALL_INTERVENTION: null,
//   LOADING: true,
//   REDFLAG_SUCCESS: null,
//   REDFLAG_FAILURE: null,
//   INTERVENTION_SUCCESS: null,
//   INTERVENTION_FAILURE: null,
// });

// export default Action;

/**
 * Generates action types
 * @param {string} name A unique identifier for the action type
 * @return {object} The generated action type
 */
const typeGenerator = name => ({
  LOADING: `${name}_LOADING`,
  SUCCESS: `${name}_SUCCESS`,
  FAILURE: `${name}_FAILURE`,
});

export default typeGenerator;
