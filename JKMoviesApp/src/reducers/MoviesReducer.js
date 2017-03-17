/**
 * Created by hien.phanthe on 3/16/17.
 */

import * as constants from '../common/constants'


const initialState = {
    data :[{
        title:"Flight of Fury",
        type: "Horror",
        director: "Xuan Nguyen",
        length: 123,
        short_description:"This is a cool film",
        photo_url: "http://movie.com/photo/fligh.png"
        }]
    };

const MoviesReducer = (state = initialState, action) => {

    switch(action.type) {
        case constants.MOVIES_LOAD_SUCCESS:
            return {
                ...state,
                data : action.payload
            };

            break;

        case constants.MOVIES_LOAD_REQUEST:
            return {
                ...state,
            };

        case constants.MOVIES_LOAD_ERROR:
            return {
                ...state,
                error: action.payload
            };

            break;

        default:
            return state
    }

};

export default MoviesReducer;
