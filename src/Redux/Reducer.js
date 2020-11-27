import {FETCH_HW_DATA, FETCH_USER_DATA, PLACE_COINS, PLACE_WORK_TYPE, SEND_THEME_INFORMATION, PLACE_ADMIN_TOOLS_INFO} from './Actions'

const initialState = {
    toDisplayAdminTools: {},
    themes: [],
    chooseLesson: {},
    work: '',
    coins: 0,
    isAuth: true,
    isUpload: Number,
    userData: {
        name: { familyName: 'Lutsky', givenName: 'Daniil' },
        _id: '5fad71f0a73bd7e8d13c2d9e',
        displayName: 'Daniil Lutsky',
        vkontakteId: '464059729',
        username: 'ebalbabul',
        gender: 'male',
        registrationDate: '4:10:2020,20:33',
        __v: 0,
        adminId: '000000'
    }, //From fetch
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