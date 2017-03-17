/**
 * Created by hien.phanthe on 3/17/17.
 */


import React, {Component} from 'react';

import MovieItem from './MovieItem.component'

import {
    Text,
    View,
    ScrollView,
    StyleSheet
} from 'react-native';


var createMovieItem = (movie) => <MovieItem key={movie._id} movie={movie} />;

var styles = StyleSheet.create({
    scrollView: {
        marginTop:20,
    },
    horizontalScrollView: {
        height: 120,
    },
    containerPage: {
        height: 50,
        width: 50,
        backgroundColor: '#527FE4',
        padding: 5,
    },
    text: {
        fontSize: 20,
        color: '#888888',
        left: 80,
        top: 20,
        height: 40,
    },
    button: {
        margin: 7,
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#eaeaea',
        borderRadius: 3,
    },
    buttonContents: {
        flexDirection: 'row',
        width: 64,
        height: 64,
    },
    img: {
        width: 64,
        height: 64,
    },
    container: {
        flex:1,
        flexDirection: 'column'
    },
});


class MoviesList extends Component {

    render() {

        var _scrollView: ScrollView;
        var { movies } = this.props;

        return (

            <ScrollView
                ref={(scrollView) => { _scrollView = scrollView; }}
                automaticallyAdjustContentInsets={false}
                onScroll={() => { console.log('onScroll!'); }}
                scrollEventThrottle={200}
                style={styles.scrollView}>
                <View style={styles.container}>
                 {movies.map(createMovieItem)}
                </View>
            </ScrollView>
        );
    }
}

export default MoviesList;
