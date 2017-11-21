'use strict'
import {expect} from 'chai';
import Player from './../Player';
import Footballer from './../Footballer'

describe('Player', function() {
	
	it('should be instance of footballer', function() {
    expect(new Player(20, "Michael")).to.be.an.instanceof(Footballer);
  });

	it('should have property name', function() {
		const mike = new Player(20, "Michael");
		expect(mike.name).to.equal("Michael");
	});

	it('should have property jerseyNumber', function() {
		const mike = new Player(20, "Michael");
		expect(mike.jerseyNumber).to.equal(20);
	});

	it('should react like a player', function() {
		const mike = new Player(20, "Michael");
		expect(mike.react(20, "North")).to.equal("Michael Kicked the ball 20 degree North");
	})
})

