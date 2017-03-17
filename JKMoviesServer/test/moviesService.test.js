const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const moviesService = require('../src/services/moviesService');
const chaiAsPromised = require('chai-as-promised');

chai.should();
chai.use(chaiAsPromised);

describe('When getting movies', () => {
	it('should return empty array if there is no contact', () => {
		const loadMovies = () => new Promise((resolve, reject) => resolve([]));
		moviesService.getMovies(loadMovies)
		.should.eventually.be.empty
	})

	it('should return movies loaded', () => {
		const loadMovies = () => new Promise((resolve, reject) => resolve([
			{
        title:"Flight of Fury",
        type: "Horror",
        director: "Xuan Nguyen",
        length: 123,
        short_description:"This is a cool film",
        photo_url: "http://movie.com/photo/fligh.png"
        },
        {
          title:"Flight of Fury 22",
          type: "Horror 22",
          director: "Xuan Nguyen 22",
          length: 123,
          short_description:"This is a cool film  222",
          photo_url: "http://movie.com/photo/fligh2.png"
        }				
		]));

		moviesService.getMovies(loadMovies)
		.should.eventually.deep.equal([
			{
        title:"Flight of Fury",
        type: "Horror",
        director: "Xuan Nguyen",
        length: 123,
        short_description:"This is a cool film",
        photo_url: "http://movie.com/photo/fligh.png"
        },
        {
          title:"Flight of Fury 22",
          type: "Horror 22",
          director: "Xuan Nguyen 22",
          length: 123,
          short_description:"This is a cool film  222",
          photo_url: "http://movie.com/photo/fligh2.png"
        }				
		])
	})
});
