const team = {
  _players: [
    {
  firstName: 'Pablo',
  lastName: 'Sanchez',
  age: 11
},
{
  firstName: 'Paul',
  lastName: 'Sandstone',
  age: 14
},
{
  firstName: 'Paula',
  lastName: 'Sandy',
  age: 16
}
  ],
  _games: [
    {
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
},
{
  opponent: 'Pokemon',
  teamPoints: 52,
  opponentPoints: 17
},
{
  opponent: 'Mario',
  teamPoints: 22,
  opponentPoints: 67
}
  ],
 get games() {
       return this._games;
   },
   get players() {
     return this._players;
   },
 addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
  addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
    };
    this.games.push(game);
  }
};
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);
team.addGame('Wolves', 130, 71);
team.addGame('Timber', 134, 83);
console.log(team.players)
console.log(team.games)
