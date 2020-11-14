export const SEND_THEME_INFORMATION = 'SEND_THEME_INFORMATION';
export const PLACE_WORK_TYPE = 'PLACE_WORK_TYPE';
export const PLACE_COINS = 'PLACE_COINS';
export const PLACE_STATUS_CODE = 'PLACE_STATUS_CODE';
export const FETCH_USER_DATA = 'FETCH_DATA_SUCCES';
export const FETCH_HW_DATA = 'FETCH_HW_SUCCES';
export const FETCH_DATA_ERROR = 'FETCH_PRODUCTS_ERROR';

export function sendThemeInformation(data) {
    return {
        type: SEND_THEME_INFORMATION,
        data: data
    }
}

export function placeWorkType(data) {
    return {
        type: PLACE_WORK_TYPE,
        data: data
    }
}

export function placeCoins(data) {
    return {
        type: PLACE_COINS,
        data: data
    }
}

export function placeStatusCode(code) {
    return {
        type: PLACE_STATUS_CODE,
        data: code
    }
}

export function fetchUserDataSuccess(userData, isAuth) {
    console.log("User data in action", userData)
    return {
        type: FETCH_USER_DATA,
        userData: userData,
        isAuth: isAuth
    }
}
export function fetchHwDataSuccess(hwThemeData) {
    console.log("HW theme data in action", hwThemeData)
    return {
        type: FETCH_HW_DATA,
        themeData: hwThemeData
    }
}

export function fetchDataError(error) {
    return {
        type: FETCH_DATA_ERROR,
        error: error
    }
}