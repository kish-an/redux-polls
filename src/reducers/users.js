import { RECEIVE_DATA } from '../actions/shared';
import { ADD_POLL } from '../actions/polls';
import { ADD_ANSWER } from '../actions/answers';

function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return {
                ...state,
                ...action.users,
            };
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
        case ADD_ANSWER:
            const user = state[action.authedUser];

            return {
                ...state,
                [action.authedUser]: {
                    ...user,
                    answers: user.answers.concat([action.id]),
                },
            };
        default:
            return state;
    }
}

export default users;
