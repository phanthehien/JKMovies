const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');
const configureRoutes = require('./src/routes/movies.route');

const server = new Hapi.Server();
server.connection({
	host: 'localhost',
  port: 3001
});
const options = {
	info: {
		'title': 'Test API Documentation',
	}
};

server.register([
	Inert,
  Vision,
  {
		'register': HapiSwagger,
		'options': options
  }], (err) => {
		server.start( (err) => {
    if (err) {
			console.log(err);
    } else {
			console.log('Server running at:', server.info.uri);
		}
	});
});

server.route(configureRoutes());