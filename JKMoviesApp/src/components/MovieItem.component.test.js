/**
 * Created by hien.phanthe on 3/16/17.
 */

import React from 'react';
import MovieItem from './MovieItem.component'

import renderer from 'react-test-renderer';

test('render Contact Form correctly', () => {

    var movie = {
        title:"Flight of Fury",
        type: "Horror",
        director: "Xuan Nguyen",
        length: 123,
        short_description:"This is a cool film",
        photo_url: "http://movie.com/photo/fligh.png"
    };

    const component = renderer.create(
        <MovieItem movie = {movie} />
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot()
});
