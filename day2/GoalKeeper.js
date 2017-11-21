import Footballer from './Footballer'

class GoalKeeper extends Footballer {
	
	constructor(jerseyNumber, name) {
		super(jerseyNumber, name);
	}

	react(direction) {
		return this.name + " jumped to the " + direction + " to catch the ball."; 
	}
}

export { GoalKeeper as default}