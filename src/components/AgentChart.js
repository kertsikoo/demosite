import React from 'react';
import {Bar} from 'react-chartjs-2';


const data = {
  labels: ['Hanna', 'Riikka', 'Lassi', 'Anni', 'Sara', 'Ilari', 'Sofia', '', ''],
  datasets: [
    {
      label: 'Chats per agent',
      backgroundColor: '#6699cc',
      borderColor: '#204060',
      borderWidth: 1,
      hoverBackgroundColor: '#204060',
      hoverBorderColor: '#204060',
      data: [26, 19, 16, 50, 39, 69, 55, 29, 18],
    }
  ]
};

const options={
  legend: {
      display: false,
  },
};



class Agents extends React.Component{
  

    render() {
      return (
        <div>
          <Bar data= {data} options={options} width={500} height={100}/>
        </div>
      );
    }
  }
  
  export default Agents;




