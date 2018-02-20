import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

const data = {
  labels: ['Hanna', 'Riikka', 'Lassi', 'Anni', 'Sara'],
  datasets: [
    {
      label: 'Chat s per agent',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [26, 19, 16, 50, 39, 0, 55]
    }
  ]
};

class Agents extends React.Component{

    render() {
      return (
        <div>
        <HorizontalBar data= {data}/>
        </div>
      );
    }
  }
  
  export default Agents;