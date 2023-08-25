/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */

const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber with type SUM and correct arguments', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;

    calculateNumberSpy.restore();
  });

  it('should correctly display the total sum', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.withArgs('SUM', 100, 20).returns(120);

    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWithExactly('The total is: 120')).to.be.true;

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
