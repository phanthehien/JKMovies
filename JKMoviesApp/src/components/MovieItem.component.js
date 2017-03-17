/**
 * Created by hien.phanthe on 3/16/17.
 */

import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableHightlight
} from 'react-native';


const styles = StyleSheet.create ({
    image  : {
        width: 50, height: 50
    },

    title :{
        fontWeight: 'bold',
        color:'blue'
    },
    item: {
        width: "100%",
        margin: 0,
        marginTop: -1,
        padding: 15,
        paddingTop: 30,
        paddingBottom: 30,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'green',
        borderWidth: 1
    }
});


class MovieItem extends Component {


    render() {

        var { movie } = this.props;
        var { title, type, director, length, short_description, photo_url } = movie;

        return (

            <View style={styles.item}>
                <Image style={styles.image} source={{uri: photo_url}} />
                <Text style={styles.title} >{title}</Text>
                <Text>
                    {type}
                </Text>
                <Button
                    onPress={() => this.props.onSelect(movie)}
                    title="View"
                />
            </View>
        );
    }
}

export default MovieItem;