const mongoose = require('./db');

const movieSchema = mongoose.Schema({
    title: String,
		type: String,
		photo_url: String,
		director: String,
		length: Number,
		short_description: String,
		video_url: String,
		starts: String
});
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;


