const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const moviesService = require('../src/services/moviesService');
const moviesController = require('../src/controllers/moviesController');
const Boom = require('boom');

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

  it('should return 500 status code if internal errors happen', (done) => {
    sandbox.stub(moviesService, 'getMovies').callsFake(() => {
      return new Promise((resolve, reject) => {
        reject({code:'CAN_NOT_OPEN_CONNECTION'});
      })
    });
    const reply = sinon.spy();
    moviesController.getMovies({}, reply)
    .then(() => {
      reply.should.have.been.calledWith(sinon.match({output: Boom.badImplementation().output}));
      done();
    })
    .catch((error) => {
      done(error);
    })
  });
});

describe('when getting movie detail', () => {
  var sandbox;

  beforeEach(function () {
      sandbox = sinon.sandbox.create();
  });

  afterEach(function () {
      sandbox.restore();
  });

  it('should return movies detail returned from movies service', (done) => {
    const movie = { 
							title:"Flight of Fury",
							type: "Horror",
							director: "Xuan Nguyen",
							length: 123,
							short_description:"This is a cool film",
							photo_url: "http://movie.com/photo/fligh.png",
							video_url: "http://movie.com/photo/fligh.png",
							stars: "Hien Phan, Xuan Trinh, Xuan Hinh, Tran Thanh"
						};
    sandbox.stub(moviesService, 'getMovie').callsFake((id, loadMovie) => {
      return new Promise((resolve, reject) => {
        resolve(movie)
      })
    });
    const reply = sinon.spy();

    moviesController.getMovieDetail({
      params:{
        id: 'id'
      }
    }, reply)
    .then(() => {
      reply.should.have.been.calledWith({
        success: true,
        data: movie
      });
      done();
    })
    .catch((error) => done(error));
  });

  it('should return 404 status code if there is no movie', (done) => {
    sandbox.stub(moviesService, 'getMovie').callsFake((id, loadMovie) => {
      return new Promise((resolve, reject) => {
        resolve();
      })
    });
    const reply = sinon.spy();
    
    moviesController.getMovieDetail({
      params:{
        id: 'id'
      }
    }, reply)
    .then(() => {
      reply.should.have.been.calledWith(sinon.match({output: Boom.notFound().output}));
      return done();
    })
    .catch((error) => {
      return done(error);
    })
  });

  it('should return 500 status code if internal errors', (done) => {
    sandbox.stub(moviesService, 'getMovie').callsFake((id, loadMovie) => {
      return new Promise((resolve, reject) => {
        reject({code:'CAN_NOT_OPEN_CONNECTION'});
      });
    });

    const reply = sinon.spy();

    moviesController.getMovieDetail({
      params:{
        id: 'id'
      }
    }, reply)
    .then(() => {
      reply.should.have.been.calledWith(sinon.match({output: Boom.badImplementation.output}));
      done();
    })
    .catch((error) => {
      return done(error);
    });
  })
});
