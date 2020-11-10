import {SEND_THEME_INFORMATION, PLACE_WORK_TYPE, PLACE_COINS} from  './Actions'

const initialState = {
    data: {
        name: 'sui'
    },
    work: '',
    coins: Number
}

 export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SEND_THEME_INFORMATION:
            return {
                ...state,
                ...state.data,
                data: action.data
            }

        case PLACE_WORK_TYPE:
            return {
                ...state,
                work: action.data
            }

        case PLACE_COINS:
            return {
                ...state,
                coins: action.data
            }

        default:
            return state;
    }
 }

export const getState = state => state