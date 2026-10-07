function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}


function allPlayers() {
    const game = gameObject();
    return Object.assign({}, game.home.players, game.away.players);
}

function numPointsScored(playerName) {
    return allPlayers()[playerName].points;
}

function playerNumbers(teamName) {
    const team = Object.values(gameObject()).find(team => team.teamName === teamName);
    return Object.values(team.players).map(player => player.number);
}

function shoeSize(playerName) {
    return allPlayers()[playerName].shoe;
}

function teamColors(teamName) {
    return Object.values(gameObject()).find(team => team.teamName === teamName).colors;
}   

function teamNames() {
        return Object.values(gameObject()).map(team => team.teamName);
}


function playerStats(playerName) {
    return allPlayers()[playerName];
}

//REDO BIGGEST SHOE SIZE
function bigShoeRebounds() {
    const players = Object.values(allPlayers());
    let biggestShoePlayer = players[0];
    for (const player of players) {
        if (player.shoe > biggestShoePlayer.shoe) {
            biggestShoePlayer = player;
        }
    }
    return biggestShoePlayer.rebounds;
}

function mostPointsScored() {
    return Object.entries(allPlayers()).reduce((maxPlayer, [name, stats]) => {
        return stats.points > maxPlayer.stats.points ? { name, stats } : maxPlayer;
    }, { name: "", stats: { points: -Infinity } }).name;
}

function mostPointsScored() {
    const players = allPlayers();
    let maxPoints = -1;
    let topScorer = "";
    for (const player in players) {
        if (players[player].points > maxPoints) {
            maxPoints = players[player].points;
            topScorer = player;
        }
    }
    return topScorer;
}

function winningTeam() {
    const teams = Object.values(gameObject());
    let winningTeam = "";
    let maxPoints = -1;
    for (const team of teams) {
        const teamPoints = Object.values(team.players).reduce((sum, player) => sum + player.points, 0);
        if (teamPoints > maxPoints) {
            maxPoints = teamPoints;
            winningTeam = team.teamName;
        }
    }
    return winningTeam;
}

function playerWithLongestName() {
    const players = Object.keys(allPlayers());
    return players.reduce((longest, player) => player.length > longest.length ? player : longest, "");
}  

function doesLongNameStealATon() {
    const longestNamePlayer = playerWithLongestName();
    const players = allPlayers();
    const maxSteals = Math.max(...Object.values(players).map(player => player.steals));
    return players[longestNamePlayer].steals === maxSteals;
}

console.log(numPointsScored("Ben Gordon"));
console.log(playerNumbers("Ben Gordon"));
console.log(shoeSize("Ben Gordon"));
console.log(teamColors("Ben Gordon"));
console.log(teamNames());
console.log(playerStats("Ben Gordon"));
console.log(bigShoeRebounds());
console.log(mostPointsScored());
console.log(winningTeam());
console.log(playerWithLongestName());
console.log(doesLongNameStealATon());