/* eslint-env mocha */
'use strict';

var expect = require('expect.js');

var nj = require('../../src');

describe('nestedIteration', function () {
  var A = nj.arange(4).reshape(2, 2);
  var B = nj.arange(8).reshape(2, 2 ,2);

  it('Works across no axis (flat)', function () {
    expect(nj.applyOverAxis(A, nj.sum)).to.eql(6);
    expect(nj.applyOverAxis(B, nj.sum)).to.eql(28);
  });

  it('Works across last axis', function () {
    expect(nj.applyOverAxis(A, nj.sum, {axis: -1}).tolist()).to.eql([ 1, 5]);
    expect(nj.applyOverAxis(B, nj.sum, {axis: -1}).tolist()).to.eql([[  1,  5], [  9, 13]]);
  });

  it('keepdims works', function () {
    expect(nj.applyOverAxis(A, nj.sum, {axis: -1, keepdims: true}).tolist()).to.eql([ [1], [5]]);
    expect(nj.applyOverAxis(B, nj.sum, {axis: -1, keepdims: true}).tolist()).to.eql([[[  1], [  5]], [[  9], [ 13]]]);
  });
});
