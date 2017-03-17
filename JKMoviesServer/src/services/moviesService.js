module.exports.getMovies = (loadMovies) => {
	return loadMovies();
}

module.exports.getMovie = (id, loadMovie) => {
	return loadMovie(id);
}