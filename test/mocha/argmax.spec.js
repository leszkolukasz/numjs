/* eslint-env mocha */
'use strict';

var expect = require('expect.js');

var nj = require('../../src');

describe('argmax', function () {
  it('should be null for an empty array', function () {
    var arr = nj.array([]);
    expect(arr.argmax()).to.equal(null);
  });
  it('should return the max element in array', function () {
    var arr = nj.arange(10);
    expect(arr.argmax()[0]).to.equal(9);
  });
  it('should return the max element in matrix', function () {
    var arr = nj.arange(10).reshape(2, 5);
    const a = arr.argmax();
    expect(a[0]).to.equal(1);
    expect(a[1]).to.equal(4);
  });
});
