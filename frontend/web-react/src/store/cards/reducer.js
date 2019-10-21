import { ADD_CARDS } from '../actionsConsts';

const initialState = {
  cards: [{ id: 1,
    name: 'asdsa',
    text: 'asdasd',
    createdAt: '2019-10-12T21:11:07.500Z',
    updatedAt: '2019-10-12T21:11:07.500Z' }]
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