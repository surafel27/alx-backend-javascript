/* eslint-disable prefer-destructuring */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */

const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber with type SUM and correct arguments', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should use Utils.calculateNumber with type SUBTRACT and correct arguments', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(5);

    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(15, 10);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 15, 10)).to.be.true;
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 5')).to.be.true;

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
