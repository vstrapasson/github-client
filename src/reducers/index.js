import { combineReducers } from 'redux';
import UserReducer from './reducer_user';
import RepositoriesReducer from './reducer_repositories';

const rootReducer = combineReducers({
    user: UserReducer,
    repositories: RepositoriesReducer
});

export default rootReducer;