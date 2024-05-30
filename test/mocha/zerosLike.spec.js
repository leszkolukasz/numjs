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
		expect(nj.zerosLike(A).tolist()).to.eql([
			[0, 0],
			[0, 0],
		]);
	});

	it("should accept a dtype", function () {
		expect(nj.zerosLike(A, "uint8").dtype).to.equal("uint8");
	});
});
