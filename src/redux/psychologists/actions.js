export const loadPsychologists = psychologists => ({
  type: 'LOAD_PSYCHOLOGISTS',
  payload: psychologists,
});

export const loadMorePsychologists = () => ({
  type: 'LOAD_MORE_PSYCHOLOGISTS',
});

export const setCurrentPage = page => ({
  type: 'SET_CURRENT_PAGE',
  payload: page,
});
