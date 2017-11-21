'use strict'
import {expect} from 'chai';
import GoalKeeper from './../GoalKeeper';
import Footballer from './../Footballer';

describe('GoalKeeper', function() {
	
	it('should be instance of footballer', function() {
    expect(new GoalKeeper(1, "Chila")).to.be.an.instanceof(Footballer);
  });

	it('should have property name', function() {
		const chila = new GoalKeeper(1, "Chila");
		expect(chila.name).to.equal("Chila");
	});

	it('should have property jerseyNumber', function() {
		const chila = new GoalKeeper(1, "Chila");
		expect(chila.jerseyNumber).to.equal(1);
	});

	it('should react like a goalkeeper', function() {
		const mike = new GoalKeeper(1, "Chila");
		expect(mike.react("North")).to.equal("Chila jumped to the North to catch the ball.");
	})
})

