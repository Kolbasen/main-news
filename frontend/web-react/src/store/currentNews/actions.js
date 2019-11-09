import { SELECT_CURRENT_NEWS } from '../actionsConsts';

export const setCurrentNews = currentNews => ({
  type: SELECT_CURRENT_NEWS,
  payload: currentNews,
});