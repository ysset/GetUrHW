import {
    PLACE_COINS,
    PLACE_WORK_TYPE,
    SEND_THEME_INFORMATION,
    FETCH_USER_DATA, FETCH_HW_DATA
} from './Actions'

const initialState = {
    themes: {},
    chooseLesson: {},
    work: '',
    coins: 0,
    isAuth: false,
    isUpload: Number,
    userData: {"name":{"familyName":"Lutsky","givenName":"Daniil"},"_id":"5fad71f0a73bd7e8d13c2d9e","displayName":"Daniil Lutsky","vkontakteId":"464059729","username":"ebalbabul","gender":"male","registrationDate":"4:10:2020,20:33"}, //From fetch
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

        case FETCH_USER_DATA:
            console.log(action)
            return {
                ...state,
                ...state.userData,
                userData: action.userData,
                isAuth: action.isAuth
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