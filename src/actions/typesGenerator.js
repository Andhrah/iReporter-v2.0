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
