/**
 * Created by hien.phanthe on 3/17/17.
 */

import MoviesContainer from './containers/MoviesContainer'

import { addNavigationHelpers, StackNavigator } from 'react-navigation';
const AppNavigator = StackNavigator({
    Movies: { screen: MoviesContainer}
});


export default AppNavigator