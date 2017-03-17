const Movie = require('./movie');

module.exports.loadMovies = () => {
	return Movie.find({}).exec();
}