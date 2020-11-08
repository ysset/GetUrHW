export const SEND_THEME_INFORMATION = 'SEND_THEME_INFORMATION'

export function sendThemeInformation(data) {
    return {
        type: SEND_THEME_INFORMATION,
        data: data
    }
}