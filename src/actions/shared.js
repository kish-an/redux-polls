import { getInitialData } from '../utils/api';
import { setAuthedUser, AUTHED_ID } from './authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_DATA = 'RECEIVE_DATA';

function receiveInitialData(users, polls) {
    return {
        type: 'RECEIVE_DATA',
        users,
        polls,
    }
}

// Thunk action creator
export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({ users, polls }) => {
                dispatch(receiveInitialData(users, polls));
                dispatch(setAuthedUser(AUTHED_ID));
                dispatch(hideLoading());
            })
    }
}
