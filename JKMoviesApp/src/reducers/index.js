/**
 * Created by hien.phanthe on 3/16/17.
 */

import { combineReducers } from 'redux';
import moviesReducer from './MoviesReducer'

var rootReducer = combineReducers({
    movies : moviesReducer,
});

export default rootReducer;