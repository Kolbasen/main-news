import { SELECT_CURRENT_NEWS } from '../actionsConsts';

const initialState = {
  currentNews: null,
};

export const currentNewsReducer = (state = initialState, action) => {
  switch(action.type) {
  case SELECT_CURRENT_NEWS: 
    return {
      ...state, 
      currentNews: action.payload[0]
    };
  default:
    return state;
  }
};