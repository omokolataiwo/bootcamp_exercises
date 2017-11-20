'use strict'
const expect = require('chai').expect

var wordCount = require('./../word');

describe('word', function() {
  it('should return JSON object with words has its property', function() {
    expect(wordCount("hello there")).to.have.property('hello');
    expect(wordCount("hello there")).to.have.property('there');
  });
});

describe('word', function() {
	it('should remove characters that are not alphanumeric', function() {
		expect(wordCount("This is andela $@#$%^#^&*")).to.deep.equal({this:1, is:1, andela:1});
	});
});

describe('word', function() {
	it('should remove trailing spaces', function() {
		expect(wordCount("This      is   andela")).to.deep.equal({this:1, is:1, andela:1})
	})
})

describe('word', function() {
	it('should return empty JSON object on zero length string', function() {
		expect(wordCount("")).to.deep.equal({});
	})
})