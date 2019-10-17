import { SELECT_CURRENT_NEWS } from '../actionsConsts'

const initialState = {
    id: null,
}

export const currentNewsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_CURRENT_NEWS: 
            return {
                ...state, 
                id: action.payload
            };
        default:
            return state;
    }
}