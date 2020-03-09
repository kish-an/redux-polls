import { RECEIVE_DATA } from '../actions/shared';
import { ADD_POLL } from '../actions/polls';

function polls(state = {}, action) {
    switch(action.type) {
        case RECEIVE_DATA:
            return {
                ...state,
                ...action.polls,
            };
        case ADD_POLL:
            return {
                ...state,
                [action.poll.id]: action.poll,
            }
        default:
            return state;
    }
}

export default polls;
