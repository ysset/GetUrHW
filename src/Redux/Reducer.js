import {FETCH_HW_DATA, FETCH_USER_DATA, PLACE_COINS, PLACE_WORK_TYPE, SEND_THEME_INFORMATION, PLACE_ADMIN_TOOLS_INFO} from './Actions'

const initialState = {
    toDisplayAdminTools: {},
    themes: [],
    chooseLesson: {},
    work: '',
    coins: 0,
    isAuth: false,
    isUpload: Number,
    userData: {}, //From fetch
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_HW_DATA:
            console.log(action)
            return {
                ...state,
                ...state.themes,
                themes: action.themeData
            }
        case PLACE_ADMIN_TOOLS_INFO:
            console.log(action)
            return {
                ...state,
                toDisplayAdminTools: action.data
            }

        case FETCH_USER_DATA:
            console.log(action)
            return {
                ...state,
                isAuth: action.isAuth,
                ...state.userData,
                userData: action.userData
            }

        case SEND_THEME_INFORMATION:
            return {
                ...state,
                ...state.data,
                chooseLesson: action.data
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