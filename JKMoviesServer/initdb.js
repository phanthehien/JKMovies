const Movie = require('./src/repositories/movie');

const movies = [
{
	"title": "Power Rangers",
	"type": "Horror",
	"director": "Xuan Nguyen",
	"length": 123,
	"short_description": "This is a cool film",
	"photo_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA5MzU1NDI4NzBeQTJeQWpwZ15BbWU4MDUxMDQ0NDEy._V1_UX182_CR0,0,182,268_AL_.jpg"
},
{
"title": "Beauty and the Beast",
"type": "Romantic",
"director": "Xuan Nguyen 22",
"length": 123,
"short_description": "This is a cool film  222",
"photo_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwNjUxMTM4NV5BMl5BanBnXkFtZTgwODExMDQzMTI@._V1_UY209_CR0,0,140,209_AL_.jpg"
},
{
"title": "T2 Trainspotting (2017)",
"type": "Acion",
"director": "Xuan Nguyen",
"length": 123,
"short_description": "This is a cool film  222",
"photo_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2NTA0NDM0MF5BMl5BanBnXkFtZTgwMDMzMTQzMTI@._V1_UX140_CR0,0,140,209_AL_.jpg"
},
{
"title": "Song to Song (2017) ",
"type": "Action",
"director": "Peter",
"length": 123,
"short_description": "This is a ",
"photo_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzI1MTg0MzEyOF5BMl5BanBnXkFtZTgwNzk4Mjk0MTI@._V1_UY209_CR0,0,140,209_AL_.jpg"
},
{
"title": "	The Belko Experiment (2016)",
"type": "Horror 22",
"director": "Tom",
"length": 123,
"short_description": "This is a cool film  222",
"photo_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BODQyMDkyOTE2MF5BMl5BanBnXkFtZTgwNDQ1NTQwMTI@._V1_UY209_CR0,0,140,209_AL_.jpg"
},
{
"title": "Frantz (2016)",
"type": "Horror 22",
"director": "Xuan Nguyen 22",
"length": 123,
"short_description": "This is a cool film  222",
"photo_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BZmM3MDE2MmEtY2NhNS00MTQyLWFhNzMtZThiZjM1ZmNiNzM4XkEyXkFqcGdeQXVyNDU0NjMyNTQ@._V1_UY209_CR8,0,140,209_AL_.jpg"
},
{
"title": "They Call Me Jeeg (2015)",
"type": "Acion",
"director": "Xuan Nguyen",
"length": 123,
"short_description": "This is a cool film  222",
"photo_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk1OTNjNDEtN2M3Zi00MDQ1LWJjZTktN2Y4NGFhNzZiYzg5XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_UY209_CR3,0,140,209_AL_.jpg"
},
{
"title": "Betting on Zero (2016)",
"type": "Action",
"director": "Peter",
"length": 123,
"short_description": "This is a ",
"photo_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA0MTc3ODc3NF5BMl5BanBnXkFtZTgwMTQ5NDc0MTI@._V1_UY209_CR0,0,140,209_AL_.jpg"
},
{
"title": "Kong: Skull Island (2017)",
"type": "Horror 22",
"director": "Tom",
"length": 123,
"short_description": "This is a cool film  222",
"photo_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwMzI5ODEwNF5BMl5BanBnXkFtZTgwNjAzNjI2MDI@._V1_UY209_CR0,0,140,209_AL_.jpg"
},
{
"title": "Logan (2017)",
"type": "Horror 22",
"director": "Xuan Nguyen 22",
"length": 123,
"short_description": "This is a cool film  222",
"photo_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1MjkzMjczMV5BMl5BanBnXkFtZTgwNDk4NjYyMTI@._V1_UY209_CR0,0,140,209_AL_.jpg"
},		
]

Movie.collection.insert(movies, (err) => {
	if(err) {
		throw err;
	}
	console.log('insert successfully');
})

