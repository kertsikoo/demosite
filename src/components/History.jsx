import React from 'react';
import HistoryList from './HistoryList';


class History extends React.Component { 
  render() {
  return (
    <div>
      <HistoryList  histories= {this.props.histories}/>
         </div>
  )
}}
  export default History;