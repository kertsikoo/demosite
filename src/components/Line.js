import React from 'react';
import {Line} from 'react-chartjs-2';

const options={
  legend: {
      display: false,
  },
};



class AmountChart extends React.Component{

  render() {
    return (
      <div>
        <Line data={this.props.stats} options={options} />
      </div>
    );
  }
}

export default AmountChart;