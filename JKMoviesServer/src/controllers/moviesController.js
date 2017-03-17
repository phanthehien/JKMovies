const moviesService = require('../services/moviesService');
const moviesRepository = require('../repositories/moviesRepository');
module.exports.getMovies = (req, reply) => {
	return moviesService.getMovies(moviesRepository.loadMovies)
		.then((movies) => {
			const response = {
				success: true,
				data: movies
			};
			reply(response);
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
				reply(response);
}