/**
 * Created by hien.phanthe on 3/16/17.
 */
import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import MoviesContainer from './containers/MoviesContainer'
import MovieDetailContainer from './containers/MovieDetailContainer'

import { createStore, applyMiddleware } from 'redux'
import { Provider} from 'react-redux'
import devToolsEnhancer from 'remote-redux-devtools';
import thunk from 'redux-thunk'

import * as moviesAction from './actions/movies'
import { StackNavigator } from 'react-navigation';




import rootReducer  from './reducers'


const initialState = {};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk), devToolsEnhancer());

const SimpleApp = StackNavigator({
    Movies: { screen: MoviesContainer },
    MovieDetail: { screen: MovieDetailContainer },
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

store.dispatch(moviesAction.loadMovies());
class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <SimpleApp />
            </Provider>
        );
    }
}

export default App;

