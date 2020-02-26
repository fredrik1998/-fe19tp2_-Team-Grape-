
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
                    "id": 37737
                },
                "kills": 13,
                "assists": 3,
                "deaths": 18
            },
            {
                "player": {
                    "id": 37736
                },
                "kills": 13,
                "assists": 3,
                "deaths": 18
            },
            {
                "player": {
                    "id": 37735
                },
                "kills": 13,
                "assists": 3,
                "deaths": 18
            },
            {
                "player": {
                    "id": 37734
                },
                "kills": 13,
                "assists": 3,
                "deaths": 18
            },
            {
                "player": {
                    "id": 37733
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

console.log(stats.home.player_stats)