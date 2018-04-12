import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
	labels: [
		'Answered',
		'Lead',
		'Other'
	],
	datasets: [{
		data: [50, 150, 100],
		backgroundColor: [
		'#d4d4aa',
		'#888844',
		'#ffe6cc'
		],
		hoverBackgroundColor: [
			'#d4d4aa',
		'#888844',
		'#ffe6cc'
		],
	}],
	
};



class SolutionChart extends React.Component{

	
  render() {

    return (
      <div>
      <Doughnut data={data} ref="chart" />
      </div>
    );
  }
}

export default SolutionChart;