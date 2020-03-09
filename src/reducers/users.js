import { RECEIVE_DATA } from '../actions/shared';
import { ADD_POLL } from '../actions/polls';

function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return {
                ...state,
                ...action.users,
            }
        case ADD_POLL:
            const poll = action.poll;
            const { author, id } = poll;

            return {
                ...state,
                [author]: {
                    ...state[author],
                    polls: state[author].polls.concat([id]),
                },
            };
        default:
            return state;
    }
}

export default users;
