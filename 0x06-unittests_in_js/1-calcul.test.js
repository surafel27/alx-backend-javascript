/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type: SUM', () => {
    it('should correctly round and sum positive numbers', () => {
      const result = calculateNumber('SUM', 3.7, 4.3);
      assert.strictEqual(result, 8); // Rounded 3.7 is 4, rounded 4.3 is 4, sum is 8
    });

    it('should correctly round and sum negative numbers', () => {
      const result = calculateNumber('SUM', -2.5, -3.8);
      assert.strictEqual(result, -6); // Rounded -2.5 is -2, rounded -3.8 is -4, sum is -6
    });
  });

  describe('type: SUBTRACT', () => {
    it('should correctly round and subtract positive numbers', () => {
      const result = calculateNumber('SUBTRACT', 5.8, 3.2);
      assert.strictEqual(result, 3); // Rounded 5.8 is 6, rounded 3.2 is 3, result is 6 - 3 = 3
    });
  });

  describe('type: DIVIDE', () => {
    it('should correctly round and divide positive numbers', () => {
      const result = calculateNumber('DIVIDE', 9.8, 1.5);
      assert.strictEqual(result, 5); // Rounded 9.8 is 10, rounded 1.5 is 2, result is 10 / 2 = 5
    });

    it('should return "Error" when dividing by rounded zero', () => {
      const result = calculateNumber('DIVIDE', 7.5, 0.4);
      assert.strictEqual(result, 'Error'); // Rounded 0.4 is 0, division by 0 is an error
    });
  });
});
