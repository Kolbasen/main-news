import { ADD_CARDS } from '../actionsConsts';

const initialState = {
  cards: null
};

export const setCardsReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_CARDS:
    return {
      ...state,
      cards: action.payload
    };
  default:
    return state;
  }
};