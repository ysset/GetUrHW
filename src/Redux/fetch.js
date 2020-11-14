import {
    fetchDataError,
    fetchUserDataSuccess,
} from './Actions';

function fetchData(whatFetch, options) {
    return dispatch => {
        fetch(`http://localhost:8000/${whatFetch}`, options)
            .then(res => res.json())
            .then(res => {
                if (res.user !== undefined) {
                    console.log("User data: ", res.user)
                    dispatch(fetchUserDataSuccess(res.user,true))
                }
                return res;
            })
            .catch(error => {
                dispatch(fetchDataError(error));
            })
    }
}
export default fetchData;