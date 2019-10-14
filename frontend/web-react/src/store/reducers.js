import { combineReducers } from 'redux'
import { currentNewsReducer } from './currentNews/reducer'
import { setCardsReducer } from './cards/reducer' 

export default combineReducers({
    id: currentNewsReducer,
    cards: setCardsReducer
});