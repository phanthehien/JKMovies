const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');
const configureRoutes = require('./src/routes/movies.route');
const conf = require('./conf/hapi.conf');

const server = new Hapi.Server();
server.connection({
	host: 'localhost',
	port: conf.serverPort
});

const options = {
	info: {
		'title': 'Test API Documentation',
	}
};

const eventOptions = process.env.NODE_ENV === 'production'?
						{
							error: '*'
						}:
						{
							log: '*',
							request: '*',
							response: '*'
						};
const goodOptions = {
    reporters: {
		myConsoleReporter: [
			{
				module: 'good-squeeze',
				name: 'Squeeze',
				args: [eventOptions]
        	},
			{
				module: 'good-console'
        	},
			'stdout'
			],
    }
};

server.register([
	Inert,
  	Vision,
  	{
		'register': HapiSwagger,
		'options': {
						info: {
							'title': 'Test API Documentation',
						}
					}
  	},
	{
		'register': require('good'),
		'options': goodOptions
	}
	], (err) => {
		server.start( (err) => {
			if (err) {
				console.log(err);
			} else {
				console.log('Server running at:', server.info.uri);
			}
		});
	});

server.route(configureRoutes());