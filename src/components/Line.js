import React from 'react';
import {Line} from 'react-chartjs-2';



class AmountChart extends React.Component{

  render() {
    return (
      <div>
        <Line data={this.props.stats} />
      </div>
    );
  }
}

export default AmountChart;