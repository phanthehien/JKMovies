/**
 * Created by hien.phanthe on 3/17/17.
 */

import * as constants from '../common/constants'
import axios from 'axios'

export const loadMovies = (contacts = []) => {

    return (dispatch) => {

        dispatch({
            type: constants.MOVIES_LOAD_REQUEST,
        });

        fetch('http://localhost:3001/api/movies')
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: constants.MOVIES_LOAD_SUCCESS,
                    payload: json.data
                });
            })
            .catch(err => {
                dispatch({
                    type: constants.MOVIES_LOAD_ERROR,
                    payload: err
                })
            })

    };
    // return {
    //     type: constants.CONTACT_LOAD_SUCCEEDED,
    //     payload: defaultContacts
    // }
};