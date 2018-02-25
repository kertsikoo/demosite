import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

const data = {
  labels: ['Customer Experience', 'Problem Solving'],
  datasets: [
    {
      label: 'Ratings 1-5',
      backgroundColor: '#6699cc',
      borderColor: '#204060',
      borderWidth: 1,
      hoverBackgroundColor: '#204060',
      hoverBorderColor: '#204060',
      data: [4.6, 4.4, 1]
    }
  ]
};

const options={
  legend: {
      display: false,
  },
};



class Ratings extends React.Component{

    render() {
      return (
        <div>
          <HorizontalBar data= {data} options={options} width={120} height={30}/>
        </div>
      );
    }
  }
  
  export default Ratings;