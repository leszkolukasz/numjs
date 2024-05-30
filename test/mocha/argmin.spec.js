/* eslint-env mocha */
'use strict';

var expect = require('expect.js');

var nj = require('../../src');

describe('argmin', function () {
  it('should be null for an empty array', function () {
    var arr = nj.array([]);
    expect(arr.argmin()).to.equal(null);
  });
  it('should return the min element in array', function () {
    var arr = nj.arange(10);
    expect(arr.argmin()[0]).to.equal(0);
  });
  it('should return the min element in matrix', function () {
    var arr = nj.arange(10).reshape(2, 5);
    const a = arr.argmin();
    expect(a[0]).to.equal(0);
    expect(a[1]).to.equal(0);
  });
});
