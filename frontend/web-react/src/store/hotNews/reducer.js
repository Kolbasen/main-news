import { ADD_HOT_NEWS } from '../actionsConsts'

const initialState = {
    hotNews: null
}

export const hotNewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_HOT_NEWS:
            return {
                ...state,
                hotNews: action.payload
            }
        default:
            return state;
    }
}