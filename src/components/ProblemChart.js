import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
	labels: [
		'Contact information',
		'Maintanance',
		'Sales'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
            '#669999',
            '#888844',
            '#cc6600'
		],
		hoverBackgroundColor: [
            '#669999',
            '#888844',
            '#cc6600'
		]
	}]
};

class ProblemChart extends React.Component{

    render() {
      return (
        <div>
        <Doughnut data= {data}/>
        </div>
      );
    }
  }
  
  export default ProblemChart;