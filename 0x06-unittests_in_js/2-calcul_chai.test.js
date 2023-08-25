/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
/* eslint-disable prefer-destructuring */
/* eslint-disable jest/valid-expect */

const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type: SUM', () => {
    it('should correctly round and sum positive numbers', () => {
      const result = calculateNumber('SUM', 3.7, 4.3);
      expect(result).to.equal(8); // Rounded 3.7 is 4, rounded 4.3 is 4, sum is 8
    });

    it('should correctly round and sum negative numbers', () => {
      const result = calculateNumber('SUM', -2.5, -3.8);
      expect(result).to.equal(-6); // Rounded -2.5 is -2, rounded -3.8 is -4, sum is -6
    });
  });

  describe('type: SUBTRACT', () => {
    it('should correctly round and subtract positive numbers', () => {
      const result = calculateNumber('SUBTRACT', 5.8, 3.2);
      expect(result).to.equal(3); // Rounded 5.8 is 6, rounded 3.2 is 3, result is 6 - 3 = 3
    });
  });

  describe('type: DIVIDE', () => {
    it('should correctly round and divide positive numbers', () => {
      const result = calculateNumber('DIVIDE', 9.8, 1.5);
      expect(result).to.equal(5); // Rounded 9.8 is 10, rounded 1.5 is 2, result is 10 / 2 = 5
    });

    it('should return "Error" when dividing by rounded zero', () => {
      const result = calculateNumber('DIVIDE', 7.5, 0.4);
      expect(result).to.equal('Error'); // Rounded 0.4 is 0, division by 0 is an error
    });
  });
});
