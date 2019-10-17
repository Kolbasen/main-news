import { combineReducers } from 'redux'
import { currentNewsReducer } from './currentNews/reducer'
import { setCardsReducer } from './cards/reducer' 
import { hotNewsReducer } from './hotNews/reducer'

export default combineReducers({
    id: currentNewsReducer,
    cards: setCardsReducer,
    hotNews: hotNewsReducer
});