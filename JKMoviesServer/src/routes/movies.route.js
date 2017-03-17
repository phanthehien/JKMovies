const moviesControllers = require('../controllers/moviesController');
const Joi = require('joi');
module.exports = () => {
	return [
		{
				method: 'GET',
				path: '/api/movies',
				config: {
						handler: moviesControllers.getMovies,
						description: 'Get all movies',
						notes: 'Get all movies existing on server',
						tags: ['api', 'movie']
			}
		},
		{
			method: 'GET',
			path: '/api/movies/{id}',
			config: {
				handler: moviesControllers.getMovieDetail,
				description: 'Get movie details',
				notes: 'Get movie details',
				tags: ['api', 'movie'],
				validate: {
            params: {
                id : Joi.string()
                        .required()
                        .description('the id for the movie item'),
            }
        }
			}
		}
	]
}