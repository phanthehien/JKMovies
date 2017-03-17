const Movie = require('./movie');

module.exports.loadMovies = () => {
	return Movie.find({}).exec();
}

module.exports.getMovie = (id) => {
	return Movie.findById(id);
}