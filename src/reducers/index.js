import { combineReducers } from 'redux';
import polls from './polls';
import users from './users';
import authedUser from './authedUser';

const rootReducer = combineReducers({
    polls,
    users,
    authedUser,
});

export default rootReducer;
