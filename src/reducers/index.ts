import {combineReducers} from 'redux';

import users, {IUserReducers} from './apiReducers';

export default combineReducers({
    users
})

export interface IState {
    users: IUserReducers;
}