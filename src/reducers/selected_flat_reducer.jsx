const selectedFlatReducer = (state, action) => {
  if (state === undefined) {
    return null;
  }
  // todo: handle actions
  if (action.type === "SELECT_FLAT") {
    return action.payload;
  }
  return state;
};

export default selectedFlatReducer;
