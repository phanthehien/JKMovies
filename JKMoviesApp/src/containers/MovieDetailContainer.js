/**
 * Created by hien.phanthe on 3/17/17.
 */
import React, {Component} from 'react';

import MoviesList from '../components/MoviesList.component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
    StyleSheet,
    Text,
    View,
    Image,
    Button
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

class MovieDetailContainer extends Component {

    convertToMinute(minutes)
    {
        return parseInt((minutes / 60), 10) + "h:" +  minutes % 60 + "m"
    }

    render() {


        var movie  = this.props.navigation.state.params;
        var { title, type, director, length, short_description, photo_url } = movie;


        return (
            <View style={styles.item}>
                <Text style={styles.title} >{title} ({this.convertToMinute(length)})</Text>
                <Image style={styles.image} source={{uri: photo_url}} />
                <Text>{director}</Text>
                <Text>
                    {type}
                </Text>
                <Text>{short_description}</Text>

            </View>
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


export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailContainer);