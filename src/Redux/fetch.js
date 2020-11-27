import {
    fetchDataError,
    fetchUserDataSuccess,
    fetchHwDataSuccess,
    placeAdminToolsInfo,
} from './Actions';

function fetchData(whatFetch, options) {
    return dispatch => {
        fetch(`http://hw.hitmarker.pro/api/${whatFetch}`, options)
            .then(res => res.json())
            .then(res => {
                if (res.user !== undefined) {
                    console.log("User data: ", res.user)
                    dispatch(fetchUserDataSuccess(res.user,true))
                }
                if (res.users !== undefined) {
                    console.log("Users data: ", res.users)
                    dispatch(placeAdminToolsInfo({users: res.users}))
                }
                if (res.themes !== undefined) {
                    console.log("Hw data: ", res.themes)
                    dispatch(fetchHwDataSuccess(res.themes))
                }
                return res;
            })
            .catch(error => {
                dispatch(fetchDataError(error));
            })
    }
}
export default fetchData;