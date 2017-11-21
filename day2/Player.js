import Footballer from './Footballer'

class Player extends Footballer {
	
	constructor(jerseyNumber, name) {
		super(jerseyNumber, name)
	}

	react(degree, pole) {
		return this.name + " Kicked the ball " + degree + " degree " + pole;
	}
}

export { Player as default}