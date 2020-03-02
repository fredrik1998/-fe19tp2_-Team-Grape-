import { playerKDA } from '../Data/fakestats'
import Chart from 'chart.js'

// const backgroundColor = 'rgba(0, 196, 235)';

Chart.defaults.global.defaultFontColor = "#fff";
Chart.defaults.global.defaultFontFamily = "roboto"

export const makeLineGraph = (prizeData) => ({
  labels: Object.keys(prizeData),
  datasets: [
    {
      label: 'Prize Pools',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(0, 196, 235)',
      borderColor: 'rgba(0, 196, 235)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(0, 196, 235)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(0, 196, 235',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: Object.values(prizeData)
    }
  ]
});

/* 

Robin:

const usersObject = snapshot.val();
      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
}));

*/

//nameList = ['Frasse', 'Hasse', 'Lasse', 's1mpel', 'flusha'];

export const makeKDAObject = (fakestats) => {
  /* scanna igenom fakestats efter spelare, spara i en array av strängar. */
  // ['Frasse', 'Hasse', 'Lasse']

  //spelarArray.map(name => ({name: {k: 34, d: 23, a: 4}}))

}



export const makeBarGraph = () => {
  // console.log(playerKDA)
  /*   const kdaObject = {
      Frasse: { k: 1, a: 5, d: 10 },
      Hasse: { k: 2, a: 4, d: 9 },
      Lasse: { k: 3, a: 3, d: 8 },
      s1mpel: { k: 4, a: 2, d: 7 },
      flusha: { k: 5, a: 1, d: 6 }
    };
   */
  /*
{
  "players": [
    "flusha",
    "KRIMZ",
    "JW",
    "Brollan",
    "Golden"
],
  "kills": [
    30,
    20,
    12,
    31,
    13
  ],
  "deaths": [
    18,
    25,
    22,
    15,
    18
  ],
  "assists": [
    3,
    5,
    6,
    0,
    3
  ]
}*/
  /* 
    const nameList = Object.keys(kdaObject) // ['Frasse', 'Hasse', 'Lasse']
  
    const killList = Object.keys(kdaObject).map(key => kdaObject[key].k);
    const deathList = Object.keys(kdaObject).map(key => kdaObject[key].d);
    const assistList = Object.keys(kdaObject).map(key => kdaObject[key].a);
     */
  //console.log(deathList)
  /*
  X const o = {p: 42, q: true};
  -> const {p, q} = o;
  
  console.log(p); // 42
  console.log(q); // true */

  //desutrcutra ut variabler med samma namn

  const { players, kills, deaths, assists } = playerKDA;

  return ({
    data: {
      labels: players,
      datasets: [
        {
          label: "Kills",
          backgroundColor: 'rgba(	0, 255, 0)',
          borderColor: 'rgba(	0, 255, 0',
          borderWidth: 1,
          borderColor: 'rgba(	0, 255, 0',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(	0, 255, 0)',
          //stack: 1,
          hoverBackgroundColor: 'rgba(	0, 255, 0)',
          hoverBorderColor: 'rgba(	0, 255, 0)',
          data: kills
        },

        {
          label: "Assist",
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',

          borderWidth: 1,
          //stack: 1,
          hoverBackgroundColor: 'rgba(75,192,192,0.4)',
          hoverBorderColor: 'rgba(75,192,192,0.4)',
          data: assists
        },
        {
          label: "Deaths",
          backgroundColor: 'rgba(	255, 0, 0)',
          borderColor: 'rgba(	255, 0, 0)',
          borderWidth: 1,
          borderColor: 'rgba(	255, 0, 0)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(	255, 0, 0)',
          //stack: 1,
          hoverBackgroundColor: 'rgba(	255, 0, 0)',
          hoverBorderColor: 'rgba(	255, 0, 0)',
          data: deaths
        },
      ]
    }
  });
}

export const makeDonutGraph = (weaponLabels, weaponData, ) => ({
  labels: weaponLabels,
  datasets: [
    {
      labels: "Weapon usage",
      fill: false,
      lineTension: 0.1,
      backgroundColor: ['rgba(75,192,192,0.4)','rgba(0,0,0,0.4)', 'rgba(255,255,255,0.4)', 'rgba(255,0,0,0.4)', 'rgba(0,255,0,0.4)', 'rgba(0,0,255,0.4)','rgba(255,255,0,0.4)','rgba(255,0,255,0.4)','rgba(0,0,128,0.4)','rgba(128,0,0,0.4)','rgba(128,128,0,0.4)','rgba(0,128,0,0.4)','rgba(128,0,128,0.4)'],
      borderColor: ['rgba(75,192,192,0.4)','rgba(0,0,0,0.4)', 'rgba(255,255,255,0.4)', 'rgba(255,0,0,0.4)', 'rgba(0,255,0,0.4)', 'rgba(0,0,255,0.4)','rgba(255,255,0,0.4)','rgba(255,0,255,0.4)','rgba(0,0,128,0.4)','rgba(128,0,0,0.4)','rgba(128,128,0,0.4)','rgba(0,128,0,0.4)','rgba(128,0,128,0.4)'],
      borderCapStyle: 'butt',
      borderDash: [],
      scaleFontColor: '#FFF',
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: ['rgba(75,192,192,0.4)','rgba(0,0,0,0.4)', 'rgba(255,255,255,0.4)', 'rgba(255,0,0,0.4)', 'rgba(0,255,0,0.4)', 'rgba(0,0,255,0.4)','rgba(255,255,0,0.4)','rgba(255,0,255,0.4)','rgba(0,0,128,0.4)','rgba(128,0,0,0.4)','rgba(128,128,0,0.4)','rgba(0,128,0,0.4)','rgba(128,0,128,0.4)'],
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: ['rgba(75,192,192,0.4)','rgba(0,0,0,0.4)', 'rgba(255,255,255,0.4)', 'rgba(255,0,0,0.4)', 'rgba(0,255,0,0.4)', 'rgba(0,0,255,0.4)','rgba(255,255,0,0.4)','rgba(255,0,255,0.4)','rgba(0,0,128,0.4)','rgba(128,0,0,0.4)','rgba(128,128,0,0.4)','rgba(0,128,0,0.4)','rgba(128,0,128,0.4)'],
      pointHoverBorderColor: ['rgba(75,192,192,0.4)','rgba(0,0,0,0.4)', 'rgba(255,255,255,0.4)', 'rgba(255,0,0,0.4)', 'rgba(0,255,0,0.4)', 'rgba(0,0,255,0.4)','rgba(255,255,0,0.4)','rgba(255,0,255,0.4)','rgba(0,0,128,0.4)','rgba(128,0,0,0.4)','rgba(128,128,0,0.4)','rgba(0,128,0,0.4)','rgba(128,0,128,0.4)'],
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: weaponData
    }
  ]
});


