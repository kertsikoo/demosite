import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

const data = {
  labels: ['Customer Experience', 'Problem Solving'],
  datasets: [
    {
      label: 'Ratings 1-5',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [4.6, 4.4, 1]
    }
  ]
};

class Ratings extends React.Component{

    render() {
      return (
        <div>
          <HorizontalBar data= {data}/>
        </div>
      );
    }
  }
  
  export default Ratings;