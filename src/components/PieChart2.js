import React from 'react'
import Chart from 'react-d3-core'
import LineChart from 'react-d3-basic';

class PieChart2 extends React.Component {
    render() {
    
    const chartData =[
        {
            value: 5,
            label:  "more than 5"
        },
        {
            label: "5-13",
            value: 5
        },
        {
            label: "14-17",
            value:  17
        }
    ]
    

  const width = 700,
    height = 300,
    margins = {left: 100, right: 100, top: 50, bottom: 50},
    title = "User sample",
    
    chartSeries = [
      {
        field: 'BMI',
        name: 'BMI',
        color: '#ff7f0e'
      }
    ],
    
    x = function(d) {
      return d.index;
    }

 return( 
     <div>
        <Chart title={title}
                width={width}
                height={height}
                margins= {margins}>
        <LineChart showXGrid= {false}
                    showYGrid= {false}
                    margins= {margins}
                    title={title}
                    data={chartData}
                    width={width}
                    height={height}
                    chartSeries={chartSeries}
                    x={x}/>
        </Chart>
    </div>
    )}}

export default PieChart2;