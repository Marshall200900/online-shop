const updateSort = (state, action) => {

  if(state === undefined) {
    return true;
  }

  switch(action.type) {
    case 'CHANGE_SORTING': {
      return action.payload;
    }
    default: return state.sortAscending;
  }
}

export default updateSort;