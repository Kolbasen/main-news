import { ADD_ONE_CARD } from '../actionsConsts';

const initialState = {
  oneCard: null
};

export const oneCardReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_ONE_CARD:
    return {
      ...state,
      oneCard: action.payload
    };
  default:
    return state;
  }
};