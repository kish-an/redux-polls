import { RECEIVE_DATA } from '../actions/shared';

function polls(state = {}, action) {
    switch(action.type) {
        case RECEIVE_DATA:
            return {
                ...state,
                ...action.polls,
            };
        default:
            return state;
    }
}

export default polls;
