class FootballTeam {
	constructor(){
		this.players = [];
		this.activePlayer = null;
	}

	addPlayer(player) {
		if (player instanceof Player == false) return -1;

		let playerIndex = this.findPlayerIndex(player);
		return playerIndex == -1 ? this.players.push(player) : -1;
	}

	addGoalKeeper(keeper) {

	}

	removePlayer(player) {
		let playerIndex = this.findPlayerIndex(player);
		this.activePlayer = this.players[0] || null;
		return playIndex != -1 ? this.players.splice(playerIndex, 1) : 0;
	}

	findPlayerIndex(player) {
		return this.players.findIndex((p) => {
			return p.jerseyNumber == player.jerseyNumber
		});
	}

	passTo (player) {
		this.activePlayer = player;
	}
}