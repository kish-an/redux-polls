import { getInitialData } from '../utils/api';
import { setAuthedUser, AUTHED_ID } from './authedUser';

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
        return getInitialData()
            .then(({ users, polls }) => {
                dispatch(receiveInitialData(users, polls));
                dispatch(setAuthedUser(AUTHED_ID));
            })
    }
}
