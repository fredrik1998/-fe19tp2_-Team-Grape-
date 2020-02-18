import React from 'react';
import { Bar } from 'react-chartjs-2';
import { findPrizePool, tournaments } from '../Data/tournaments';
import { players, findPlayersByGameID } from '../Data';
import LineDemo from '../Chartjs/linegraph';

export default class Home extends React.Component {


  componentDidMount() {
    // console.log(findPlayersByGameID(5));
    // console.log(findPlayersByGameID(3));
    console.log(findPrizePool());
  }

  render() {
    return (
      <div>
        {<LineDemo />}
      </div>
    );
  }
}

