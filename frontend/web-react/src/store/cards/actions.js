import { ADD_CARDS } from '../actionsConsts'

export const setCards = cards => {
    console.log(cards)
    return {
        type: ADD_CARDS,
        payload: cards,
    }
}