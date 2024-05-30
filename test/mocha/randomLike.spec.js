/* eslint-env mocha */
"use strict";

var expect = require("expect.js");

var nj = require("../../src");

describe("randomLike", function () {
	const A = nj.array([
		[1, 2],
		[3, 4],
	]);
	it("can generate zeros like shaped like a given matrix", function () {
		expect(nj.randomLike(A).shape).to.eql([2, 2
		]);
	});
});
