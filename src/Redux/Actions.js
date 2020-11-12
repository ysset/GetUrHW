export const SEND_THEME_INFORMATION = 'SEND_THEME_INFORMATION'
export const PLACE_WORK_TYPE = 'PLACE_WORK_TYPE'
export const PLACE_COINS = 'PLACE_COINS'

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