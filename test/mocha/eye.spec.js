/* eslint-env mocha */
'use strict';

var expect = require('expect.js');

var nj = require('../../src');

describe('eye', function () {
  it('can generate square matrix ', function () {
    expect(nj.eye(2).tolist()).to.eql([[1, 0], [0, 1]]);
  });

  it('can generate matrix with different dimensions', function () {
    expect(nj.eye(1, 2).tolist()).to.eql([[1, 0]]);
  });

  it('should accept a dtype', function () {
    expect(nj.eye(0, 'uint8').dtype).to.equal('uint8');
  });
});
