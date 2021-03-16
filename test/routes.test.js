let chai = require('chai');
let expect = chai.expect;
let chaiHttp = require('chai-http');
let app = require('../app.js');

chai.use(chaiHttp);
chai.should();

describe('GET /news', () => {
  it('should return a the top headlines when called', done => {
    chai
      .request(app)
      .get('/news')
      .query({
        lang: 'en',
        country: 'gb',
        pageSize: 50
      })
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body.status).to.deep.equal('ok');
        done();
      });
  });
  it('should return a error message without query params when called', done => {
    chai
      .request(app)
      .get('/news')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body.name).to.deep.equal("NewsAPIError: parametersMissing");
        done();
      });
  });
});

describe('GET /newsFilter', () => {
  it('should return a the top headlines when called', done => {
    chai
      .request(app)
      .get('/newsFilter')
      .query({
        lang: 'en',
        q: 'gb',
        sortBy: 'publishedAt',
        pageSize: 50
      })
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body.status).to.deep.equal('ok');
        done();
      });
  });
  it('should return a error message without query params when called', done => {
    chai
      .request(app)
      .get('/newsFilter')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body.name).to.deep.equal("NewsAPIError: parametersMissing");
        done();
      });
  });
});