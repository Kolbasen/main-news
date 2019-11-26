import { ADD_CARDS } from '../actionsConsts';

export const setCards = cards => {
  return {
    type: ADD_CARDS,
    payload: cards,
  };
};