// const backgroundColor = 'rgba(0, 196, 235)';

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
const kdaObject = { Frasse: {k: 1, a: 5, d: 10}, 
Hasse: {k: 2, a: 4, d: 9}, 
Lasse: {k: 3, a: 3, d: 8},
s1mpel: {k: 4, a: 2, d: 7},
flusha: {k: 5, a: 1, d: 6}};

const nameList = Object.keys(kdaObject) // ['Frasse', 'Hasse', 'Lasse']

const killList = Object.keys(kdaObject).map(key => kdaObject[key].k);
const deathList = Object.keys(kdaObject).map(key => kdaObject[key].d);
const assistList = Object.keys(kdaObject).map(key => kdaObject[key].a);
    console.log(deathList)

    return ({
        data: {
        labels: nameList,
          datasets: [
            {
              label: "Kills",
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,0.4)',
              borderWidth: 1,
              borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
              //stack: 1,
              hoverBackgroundColor: 'rgba(75,192,192,0.4)',
              hoverBorderColor: 'rgba(75,192,192,0.4)',
                  data: killList
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
                data: assistList
            },
            {
              label: "Deaths",
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,0.4)',
              borderWidth: 1,
              borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
              //stack: 1,
              hoverBackgroundColor: 'rgba(75,192,192,0.4)',
              hoverBorderColor:'rgba(75,192,192,0.4)',
                data: deathList
            },
          ]
        }
      });
    }

export const makeDonutGraph = (weaponLabels, weaponData, ) => ({  labels: weaponLabels, 
    datasets: [
    {
        labels: "Weapon usage",
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: weaponData
        }
    ]       
});
