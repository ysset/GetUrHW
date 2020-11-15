import {
    fetchDataError,
    fetchUserDataSuccess,
    fetchHwDataSuccess,
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