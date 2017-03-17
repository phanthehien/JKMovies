const moviesService = require('../services/moviesService');
const moviesRepository = require('../repositories/moviesRepository');
const Boom = require('boom');

module.exports.getMovies = (req, reply) => {
	return moviesService.getMovies(moviesRepository.loadMovies)
		.then((movies) => {
			const response = {
				success: true,
				data: movies
			};
			return reply(response);
		})
		.catch((error) => {
			console.log('flsjlfsldf');
			console.error(error);
			return reply(Boom.badImplementation());
		});
}

module.exports.getMovieDetail = (req, reply) => {
					const response = 
				{
					success : true,
					data: 
						{ 
							title:"Flight of Fury",
							type: "Horror",
							director: "Xuan Nguyen",
							length: 123,
							short_description:"This is a cool film",
							photo_url: "http://movie.com/photo/fligh.png",
							video_url: "http://movie.com/photo/fligh.png",
							stars: "Hien Phan, Xuan Trinh, Xuan Hinh, Tran Thanh"
						}
				}
				return moviesService.getMovie(req.params.id, moviesRepository.getMovie)
				.then((movie) => {
					if(!movie) {
						return reply(Boom.notFound());
					}else{
						return reply({
									success : true,
									data: movie
								});
					}
				})
				.catch((error) => {
					console.error(error);
					return reply(Boom.badImplementation);
				});
}