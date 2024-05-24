const initialState = {
  psychologists: [],
  loadedPsychologists: [],
  currentPage: 1,
  itemsPerPage: 3,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_PSYCHOLOGISTS':
      return {
        ...state,
        loadedPsychologists: action.payload,
        psychologists: action.payload.slice(0, state.itemsPerPage),
      };
    case 'LOAD_MORE_PSYCHOLOGISTS':
      const startIndex = state.currentPage * state.itemsPerPage;
      const endIndex = startIndex + state.itemsPerPage;
      const nextPsychologists = state.loadedPsychologists.slice(
        startIndex,
        endIndex
      );
      return {
        ...state,
        psychologists: [...state.psychologists, ...nextPsychologists],
        currentPage: state.currentPage + 1,
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
