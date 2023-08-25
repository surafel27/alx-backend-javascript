/**
 * Retrieves a payment token from an API.
 *
 * @param {boolean} success - Indicates whether the API call should succeed.
 * @returns {Promise} - A promise that resolves to an object with data if success is true, otherwise undefined.
 */
function getPaymentTokenFromAPI(success) {
  if (success) {
    // Resolve the promise with successful response
    return Promise.resolve({ data: 'Successful response from the API' });
  } else {
    // Resolve the promise with no data (failure case)
    return Promise.resolve();
  }
}

module.exports = getPaymentTokenFromAPI;
