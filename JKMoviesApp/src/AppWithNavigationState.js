/**
 * Created by hien.phanthe on 3/17/17.
 */

import React, {Component} from 'react';

import AppNavigator from './AppNavigator'
import { addNavigationHelpers } from 'react-navigation';


//
// @connect(state => ({
//     nav: state.nav,
// }))

class AppWithNavigationState extends Component {
    render() {
        return (
            <AppNavigator navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav,
            })} />
        );
    }
}


export default AppWithNavigationState;

