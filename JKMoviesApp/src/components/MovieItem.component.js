/**
 * Created by hien.phanthe on 3/16/17.
 */

import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';


class MovieItem extends Component {

    render() {

        var { movie } = this.props;
        var { title, type, director, length, short_description, photo_url } = movie;

        return (
            <View>
                <Text>
                    {title}
                    {type}
                    {director}
                    {length}
                    {short_description}
                    {photo_url}
                </Text>
            </View>
        );
    }
}

export default MovieItem;