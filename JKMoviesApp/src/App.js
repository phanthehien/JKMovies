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

import { createStore, applyMiddleware } from 'redux'
import { Provider} from 'react-redux'
import devToolsEnhancer from 'remote-redux-devtools';
import thunk from 'redux-thunk'

import rootReducer  from './reducers'

const initialState = {};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk), devToolsEnhancer());

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


class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <MoviesContainer />
            </Provider>
        );
    }
}

export default App;

