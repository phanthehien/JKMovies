const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const moviesService = require('../src/services/moviesService');
const moviesController = require('../src/controllers/moviesController');

chai.should();
chai.use(sinonChai);

describe('When requesting getMovies', () => {
  var sandbox;

  beforeEach(function () {
      sandbox = sinon.sandbox.create();
  });

  afterEach(function () {
      sandbox.restore();
  });

  it('should return empty array if there is no movie available', (done) => {
    sandbox.stub( moviesService, 'getMovies').callsFake(() => new Promise((resolve, reject) => {
      resolve([])
    }));
    const reply = sinon.spy();
    moviesController.getMovies({}, reply)
    .then(() => {
      reply.should.have.been.calledWith({
	      success: true,
	      data: []
	    });
      done();
    })
    .catch((error) => {
      done(error);
    });
  });

  it('should return list of movies received from movies service', (done) => {
    sandbox.stub(moviesService, 'getMovies').callsFake(() => new Promise((resolve, reject) => {
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
          photo_url: "http://movie.com/photo/fligh2.png"
        }
      ])
    }));
    const reply = sinon.spy();
    moviesController.getMovies({}, reply)
    .then(() => {
      reply.should.have.been.calledWith(
        {
        success: true,
        data: [
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
              photo_url: "http://movie.com/photo/fligh2.png"
            }
          ]
        }
      );
      done();
    })
    .catch((err) => done(err));
  });
})
