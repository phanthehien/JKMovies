/**
 * Created by hien.phanthe on 3/16/17.
 */

import { combineReducers } from 'redux';
import moviesReducer from './MoviesReducer'
import AppNavigator from '../AppNavigator'

const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};


var rootReducer = combineReducers({
    nav: navReducer,
    movies : moviesReducer,
});

export default rootReducer;
