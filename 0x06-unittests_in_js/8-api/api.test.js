const request = require('request');
const { expect } = require('chai');

describe('Test the index page', () => {
  it('GET /', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      if (error) throw error;
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
