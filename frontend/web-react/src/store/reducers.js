import { combineReducers } from 'redux';
import { currentNewsReducer } from './currentNews/reducer';
import { setCardsReducer } from './cards/reducer'; 
import { hotNewsReducer } from './hotNews/reducer';
import { oneCardReducer } from './oneCard/reducer';

export default combineReducers({
  currentNews: currentNewsReducer,
  cards: setCardsReducer,
  hotNews: hotNewsReducer,
  oneCard: oneCardReducer,
});