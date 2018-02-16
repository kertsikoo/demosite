import React from 'react';
import StatisticsList from './StatisticsList';

class Statistics extends React.Component{
  render(){
    return( 
    <div>
      <h2>Statistics</h2>
      <StatisticsList stats={this.props.stats}/>
    </div>
  ) 

}}

  export default Statistics;