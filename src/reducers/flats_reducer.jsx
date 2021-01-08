import { SET_FLATS } from '../actions/index';

const flatsReducer = (state, action) => {
  if (state === undefined) {
  // Reducer initialisation
    return [];
  }
  // TODO: handle some actions
  if (action.type === SET_FLATS) {
    return action.payload;
  }
  return state;
};
export default flatsReducer;
