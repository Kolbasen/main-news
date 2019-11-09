import { ADD_ONE_CARD } from '../actionsConsts';

export const setOneCard = oneCard => ({
  type: ADD_ONE_CARD,
  payload: oneCard
});