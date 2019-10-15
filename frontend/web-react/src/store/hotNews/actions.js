import { ADD_HOT_NEWS } from '../actionsConsts'

export const setHotNews = hotNews => ({
    type: ADD_HOT_NEWS,
    payload: hotNews
})