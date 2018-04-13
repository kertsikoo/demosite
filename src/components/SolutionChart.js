import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
	labels: [
		'Answered',
		'Lead',
		'Other'
	],
	links: ["https://www.google.com", "https://www.facebook.com", "https://www.iltasanomat.fi"],
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

		const chartData = dataset[0]._chart.config.data;
		const index = dataset[0]._index;
		const label = chartData.labels[index];
		const url = chartData.links[index];
				

	alert(`The section you clicked is called: '${label}' with index '${index}'.
	 You get the full object definition in console. The link is : '${url}', which will be opened in a new window.`)
	console.log(dataset)
	window.open(url);
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