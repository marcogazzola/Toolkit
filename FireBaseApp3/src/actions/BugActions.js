export const ADD_BUG = 'ADD_BUG';
export const CLOSE_BUG = 'CLOSE_BUG';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_CLOSED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export function addNewBug(newBug) {
  return { type: ADD_BUG, newBug };
}

export function closeBug(id) {
  return { type: CLOSE_BUG, id };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
