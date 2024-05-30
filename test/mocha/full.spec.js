/* eslint-env mocha */
'use strict';

var expect = require('expect.js');

var nj = require('../../src');

describe('full', function () {
  it('can generate from scalar fillValue', function () {
    expect(nj.full(0, 5).tolist()).to.eql([]);
    expect(nj.full(2, 5).tolist()).to.eql([5, 5]);
    expect(nj.full([2], 5).tolist()).to.eql([5, 5]);
  });

  it('can generate matrix from scalar fillValue', function () {
    expect(nj.full([2, 2], 5).tolist())
      .to.eql([
      [5, 5],
      [5, 5]]);
  });

  it('can generate matrix from array fillValue', function () {
    expect(nj.full([2, 2], [1, 2]).tolist())
      .to.eql([
      [1, 2],
      [1, 2]]);
  });

  it('should accept a dtype', function () {
    expect(nj.full(0, 5, 'uint8').dtype).to.equal('uint8');
  });
});
