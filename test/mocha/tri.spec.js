/* eslint-env mocha */
'use strict';

var expect = require('expect.js');

var nj = require('../../src');

describe('tri', function () {
  it('can generate square matrix ', function () {
    expect(nj.tri(2).tolist()).to.eql([[0, 0], [1, 0]]);
  });

  it('can generate matrix with different dimensions', function () {
    expect(nj.tri(3, 2).tolist()).to.eql([[0, 0], [1, 0], [1, 1]]);
  });

  it('should accept a dtype', function () {
    expect(nj.tri(0, 'uint8').dtype).to.equal('uint8');
  });
});
