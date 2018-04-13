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

//const legendOpts = {
//onClick: (e, item) => alert(`Item with text ${item.text} and index ${item.index} clicked`),
//};

class SolutionChart extends React.Component{

	showDataset(dataset, e) {
	alert(`The section you clicked is called: '${dataset[0]._view.label}'. You get the full object definition in console.`)
	console.log(dataset)

	}

  render() {

    return (
      <div>
      <Doughnut data={data} ref="chart" getElementAtEvent={(dataset) => this.showDataset(dataset)} />
      </div>
    );
  }
}

export default SolutionChart;