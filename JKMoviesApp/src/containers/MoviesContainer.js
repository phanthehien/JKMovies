/**
 * Created by hien.phanthe on 3/16/17.
 */
import React, {Component} from 'react';

import {
    Text,
    ActivityIndicator
} from 'react-native'

import MoviesList from '../components/MoviesList.component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



class MoviesContainer extends Component {


    render() {
        const { navigate } = this.props.navigation;

        var { data , error, isLoading } = this.props.movies;


        return (isLoading ?  <ActivityIndicator color="#0000ff" /> :
                ((!error && data && data.length > 0) ? <MoviesList movies={data} onSelect={(movie) => navigate('MovieDetail', movie)} />
                : <Text>{error}</Text>)
        )
    }
}


const mapStateToProps = (store) => {
    return {
        movies  : store.movies
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
