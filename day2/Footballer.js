class Footballer {
	constructor(jerseyNumber, name) {
		this.name = name || "NoName";
		this.jerseyNumber = jerseyNumber || 0;
	}
	run(rate) {
		return this.name + " is running at " + rate + "km/hr";
	}
	react() {
		return Error('class method not implemented.');
	}
}

export { Footballer as default}