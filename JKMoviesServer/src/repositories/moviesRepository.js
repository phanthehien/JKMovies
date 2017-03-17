module.exports.loadMovies = () => {
	return new Promise((resolve, reject) => {
		resolve([
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
				photo_url: "http://movie.com/photo/fligh.png"
			}
		])
	})
}