import { playerKDA } from '../Data/fakestats'

export const makeLineGraph = (prizeData) => ({
  labels: Object.keys(prizeData),
  datasets: [
    {
      label: 'Prize Pools',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#FF8C00',
      borderColor: '#FF8C00',
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

export const makeBarGraph = () => {
  
  const { players, kills, deaths, assists } = playerKDA;

  return ({
    data: {
      labels: players,
      datasets: [
        {
          label: "Kills",
          backgroundColor: '#FF8C00',
          borderWidth: 1,
          borderColor: '#fff',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(	0, 255, 0)',
          hoverBackgroundColor: 'rgba(	0, 255, 0)',
          hoverBorderColor: 'rgba(	0, 255, 0)',
          data: kills
        },

        {
          label: "Assist",
          backgroundColor: '#FF8C00',
          borderColor: 'rgba(75,192,192,0.4)',
          borderColor: '#fff',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(75,192,192,0.4)',
          hoverBorderColor: 'rgba(75,192,192,0.4)',
          data: assists
        },
        {
          label: "Deaths",
          backgroundColor: '#FF8C00',
          borderColor: 'rgba(	255, 0, 0)',
          borderWidth: 1,
          borderColor: '#fff',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(	255, 0, 0)',
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
      backgroundColor: ['#FF8C00', '#FF8C00', '#FF8C00', '#FF8C00', '#FF8C00', '#FF8C00', '#FF8C00', '#FF8C00', '#FF8C00', '#FF8C00', '#FF8C00', '#FF8C00', '#FF8C00'],
      borderColor: ['rgba(59, 71, 84, 1)'],
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: ['rgba(59, 71, 84, 1)',],
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: ['rgba(75,192,192,0.4)'],
      pointHoverBorderColor: ['rgba(75,192,192,0.4)'],
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: weaponData
    }
  ]
});
