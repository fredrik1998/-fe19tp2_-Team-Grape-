
export const stats = {

    "confirmed": true,
    "home": {
        "roster": {
            "id": 55973
        },
        "is_winner": false,
        "score": 5,
        "player_stats": [
            {
                "player": {
                    "ign": "flusha"
                },
                "kills": 30,
                "assists": 3,
                "deaths": 18
            },
            {
                "player": {
                    "ign": "KRIMZ"
                },
                "kills": 20,
                "assists": 5,
                "deaths": 25
            },
            {
                "player": {
                    "ign": "JW"
                },
                "kills": 12,
                "assists": 6,
                "deaths": 22
            },
            {
                "player": {
                    "ign": "Brollan"
                },
                "kills": 31,
                "assists": 1,
                "deaths": 15
            },
            {
                "player": {
                    "ign": "Golden"
                },
                "kills": 13,
                "assists": 3,
                "deaths": 18
            },
        ]
    },
    "away": {
        "roster": {
            "id": 55571
        },
        "is_winner": true,
        "score": 16,
        "player_stats": [
            {
                "player": {
                    "id": 33837
                },
                "kills": 19,
                "assists": 3,
                "deaths": 10
            },
        ]
    },
    "length": 2340,
    "rounds": [
        {
            "round_nr": 1,
            "t_side": {
                "roster": {
                    "id": 55973
                },
                "is_winner": false,
                "player_stats": [
                    {
                        "player": {
                            "id": 37737
                        },
                        "kills": 0,
                        "assists": 0,
                        "deaths": 1,
                        "cash": {
                            "spent": 800
                        }
                    },
                ]
            },
            "ct_side": {
                "roster": {
                    "id": 55571
                },
                "is_winner": true,
                "player_stats": [
                    {
                        "player": {
                            "id": 33837
                        },
                        "kills": 2,
                        "assists": 0,
                        "deaths": 0,
                        "cash": {
                            "spent": 650
                        }
                    },
                ]
            },
            "bomb_events": [],
            "kills": [
                {
                    "match_time": 0,
                    "bomb_planted": true,
                    "time_since_plant": 35500,
                    "attacker": {
                        "player": {
                            "id": 33837
                        },
                        "roster": {
                            "id": 55571
                        }
                    },
                    "victim": {
                        "player": {
                            "id": 38428
                        },
                        "roster": {
                            "id": 55973
                        }
                    },
                    "assist": null,
                    "weapon": {
                        "id": 4,
                        "name": "usp_silencer",
                        "images": {
                            "small": "https://img.abiosgaming.com/other/game-assets/csgo-weapons/usp_silencer.png"
                        }
                    }
                },
            ],
            "win_reason": {
                "id": 8,
                "name": "terrorists eliminated",
                "images": {
                    "small": "https://img.abiosgaming.com/other/game-assets/csgo-winreasons/fallback.png"
                }
            }
        },
    ],
    "ended": true
}


/* 

cl st


Robin:

const usersObject = snapshot.val();
      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
}));

*/

//nameList = ['Frasse', 'Hasse', 'Lasse', 's1mpel', 'flusha'];
/*
{
                "player": {
                    "ign": "flusha"
                },
                "kills": 30,
                "assists": 3,
                "deaths": 18
            },
            */
export const getPlayerKDA = () => {
    let arr = stats.home.player_stats.map((playerObject) => (
        {
            [playerObject.player.ign]:
            {
                k: playerObject.kills,
                d: playerObject.deaths,
                a: playerObject.assists
            }
        }));
    return arr;
}
const playerKDAObject = Object.assign({}, ...getPlayerKDA());
console.log(playerKDAObject)
// export const makeBarGraph = () => {
// const kdaObject 
/* scanna igenom fakestats efter spelare, spara i en array av strängar. */
// ['Frasse', 'Hasse', 'Lasse']

//spelarArray.map(name => ({name: {k: 34, d: 23, a: 4}}))



/* const player = stats.home.player_stats

const kills = player.map(person => ({ value: person.kills }))
const assists = player.map(person => ({ value: person.assists }))
const deaths = player.map(person => ({ value: person.deaths }))

console.log(kills)
console.log(assists)
console.log(deaths)

const kda = Object.assign([kills, deaths, assists])

console.log(kda)

Object.keys(stats.home.player_stats)
console.log(Object.keys(stats.home.player_stats))
 */

// export const makeBarGraph = () => {
// const oldObject = { Frasse: {k: 1, a: 5, d: 10}, 
// Hasse: {k: 2, a: 4, d: 9}, 
// Lasse: {k: 3, a: 3, d: 8},
// s1mpel: {k: 4, a: 2, d: 7},
// flusha: {k: 5, a: 1, d: 6}};

const players = Object.keys(playerKDAObject) // ['Frasse', 'Hasse', 'Lasse']

const kills = players.map(key => playerKDAObject[key].k);
const deaths = players.map(key => playerKDAObject[key].d);
const assists = players.map(key => playerKDAObject[key].a);
export const playerKDA = { players, kills, deaths, assists }

//console.log(deathList)

// console.log(stats.home.player_stats)}