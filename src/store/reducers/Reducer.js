import * as ACTION_TYPES from '../actions/action_types'

const Reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_GLOBA_SAMPLE:
      const now = new Date();
      return {
        ...state,
        sample: action.payload
      };
    default:
      return state;
  }
};

export default Reducer;
