import { RECEIVE_DATA } from '../actions/shared';
import { ADD_POLL } from '../actions/polls';
import { ADD_ANSWER } from '../actions/answers';

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
        case ADD_ANSWER:
            const { answer, id, authedUser } = action;
            const poll = state[id];
            const votesKey = `${answer}Votes`;

            return {
                ...state,
                [action.id]: {
                    ...poll,
                    [votesKey]: poll[votesKey].concat([authedUser]),
                },
            }
        default:
            return state;
    }
}

export default polls;
