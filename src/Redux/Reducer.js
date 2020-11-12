import {PLACE_COINS, PLACE_WORK_TYPE, SEND_THEME_INFORMATION} from './Actions'

const initialState = {
    data: {},
    work: '',
    coins: 0
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