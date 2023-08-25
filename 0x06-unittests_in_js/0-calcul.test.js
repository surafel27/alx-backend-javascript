const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should correctly round and sum positive numbers', () => {
    const result = calculateNumber(3.7, 4.3);
    assert.strictEqual(result, 8); // Rounded 3.7 is 4, rounded 4.3 is 4, sum is 8
  });

  it('should correctly round and sum negative numbers', () => {
    const result = calculateNumber(-2.5, -3.8);
    assert.strictEqual(result, -6); // Rounded -2.5 is -2, rounded -3.8 is -4, sum is -6
  });

  it('should round and sum a positive and a negative number', () => {
    const result = calculateNumber(2.1, -2.9);
    assert.strictEqual(result, -1); // Rounded 2.1 is 2, rounded -2.9 is -3, sum is -1
  });
});
