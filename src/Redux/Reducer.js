import {SEND_THEME_INFORMATION} from  './Actions'

const initialState = {
    data: {
        name: 'sui'
    }
}

 export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SEND_THEME_INFORMATION:
            return {
                ...state,
                ...state.data,
                data: action.data
            }

        default:
            return state;
    }
 }

export const getState = state => state