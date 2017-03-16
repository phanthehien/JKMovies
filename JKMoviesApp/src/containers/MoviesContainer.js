/**
 * Created by hien.phanthe on 3/16/17.
 */
import React, {Component} from 'react';

import MovieItem from '../components/MovieItem.component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



class MoviesContainer extends Component {


    render() {

        var { movies } = this.props;

        return (
            <MovieItem movie={movies[0]} />
        )
    }
}


const mapStateToProps = (store) => {
    return {
        movies  : store.movies.data
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
