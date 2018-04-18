import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
	labels: [
		'Answered',
		'Lead',
		'Other'
	],
	links: ["https://www.google.com", "https://www.facebook.com", "https://www.bing.fi"],
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
	constructor(props){
		super(props);
		this.state = {
			isShown : false
		}
	}

	showDataset(dataset) {

		const chartData = dataset[0]._chart.config.data;
		const index = dataset[0]._index;
		const label = chartData.labels[index];
		const url = chartData.links[index];
				
	//	this.setState = ({isShown: !this.state.isShown})

	alert(`The section you clicked is called: '${label}' with index '${index}'.
	Full object definition in console. The link is : '${url}'.`)
	console.log(dataset)
	//window.open(url);
	
	}

  render() {
    return (
      <Doughnut data={data} ref="chart" getElementAtEvent={(dataset) => this.showDataset(dataset)} />
    );
  }
}

export default SolutionChart;