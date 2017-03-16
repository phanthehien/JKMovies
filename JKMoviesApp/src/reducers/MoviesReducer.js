/**
 * Created by hien.phanthe on 3/16/17.
 */


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
        case "GET_MOVIES_SUCCEEDED":
            return {
                ...state,
                data : action.payload
            };

            break;

        default:
            return state
    }

};

export default MoviesReducer;
