/* eslint-disable prefer-destructuring */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/no-test-callback */
/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */

const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with data on success', (done) => {
    // Call getPaymentTokenFromAPI with success = true
    getPaymentTokenFromAPI(true)
      .then((response) => {
        // Check if the response matches the expected data
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Signal the end of the test
      })
      .catch(done); // In case of any errors, signal the end of the test
  });

  it('should return a resolved promise with undefined on failure', (done) => {
    // Call getPaymentTokenFromAPI with success = false
    getPaymentTokenFromAPI(false)
      .then((response) => {
        // Check if the response is undefined
        expect(response).to.be.undefined;
        done(); // Signal the end of the test
      })
      .catch(done); // In case of any errors, signal the end of the test
  });
});
