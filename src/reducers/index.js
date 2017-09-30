import { combineReducers } from 'redux';
import UserReducer from './reducer_user';
import RepositoriesReducer from './reducer_repositories';
import RepositoryDetailReducer from './reducer_repository_details';

const rootReducer = combineReducers({
    user: UserReducer,
    repositories: RepositoriesReducer,
    repository: RepositoryDetailReducer
});

export default rootReducer;