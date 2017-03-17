const Movie = require('./src/repositories/movie');
  const movie1 = new Movie({
	"title": "Power Rangers",
	"type": "Horror",
	"director": "Xuan Nguyen",
	"length": 123,
	"short_description": "This is a cool film",
	"photo_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA5MzU1NDI4NzBeQTJeQWpwZ15BbWU4MDUxMDQ0NDEy._V1_UX182_CR0,0,182,268_AL_.jpg"
});
movie1.save().then(() => console.log('save movie 1 successfully')).catch((err) => console.log(err));
const movie2 = new Movie({
"title": "Beauty and the Beast",
"type": "Horror 22",
"director": "Xuan Nguyen 22",
"length": 123,
"short_description": "This is a cool film  222",
"photo_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwNjUxMTM4NV5BMl5BanBnXkFtZTgwODExMDQzMTI@._V1_UY209_CR0,0,140,209_AL_.jpg"
})
movie2.save().then(() => console.log('save movie 2 successfully')).catch((err) => console.log(err));