import { SELECT_CURRENT_NEWS } from '../actionsConsts';

export const setCurrentNews = id => ({
  type: SELECT_CURRENT_NEWS,
  payload: id,
});