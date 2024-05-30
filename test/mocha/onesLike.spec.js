/* eslint-env mocha */
"use strict";

var expect = require("expect.js");

var nj = require("../../src");

describe("zerosLike", function () {
	const A = nj.array([
		[1, 2],
		[3, 4],
	]);
	it("can generate zeros like shaped like a given matrix", function () {
		expect(nj.onesLike(A).tolist()).to.eql([
			[1, 1],
			[1, 1],
		]);
	});

	it("should accept a dtype", function () {
		expect(nj.onesLike(A, "uint8").dtype).to.equal("uint8");
	});
});
