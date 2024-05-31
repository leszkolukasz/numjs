/* eslint-env mocha */
"use strict";

var expect = require("expect.js");

var nj = require("../../src");

describe("fullLike", function () {
  const A = nj.array([
      [1, 2],
      [3, 4],
  ]);
  it("can generate fillValue like shaped like a given matrix", function () {
    expect(nj.fullLike(A, 5).tolist()).to.eql([
      [5, 5],
      [5, 5],
    ]);
  });

  it("should accept a dtype", function () {
    expect(nj.fullLike(A, 5, "uint8").dtype).to.equal("uint8");
  });
});
