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

describe('Test the cart page', () => {
  it('GET /cart/:id - Correct status code when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response, body) => {
      if (error) throw error;
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('GET /cart/:id - Correct status code when :id is NOT a number (=> 404)', (done) => {
    request.get('http://localhost:7865/cart/abc', (error, response, body) => {
      if (error) throw error;
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Test the /available_payments endpoint', () => {
  it('GET /available_payments', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      if (error) throw error;
      const expected = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal(expected);
      done();
    });
  });
});

describe('Test the /login endpoint', () => {
  it('POST /login', (done) => {
    const userName = 'John';
    const formData = { userName };

    request.post('http://localhost:7865/login', { json: formData }, (error, response, body) => {
      if (error) throw error;
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal(`Welcome ${userName}`);
      done();
    });
  });
});
