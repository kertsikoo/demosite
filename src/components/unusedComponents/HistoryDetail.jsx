import React from 'react';

class DetailSection extends React.Component {
 
    render() {
      
  
    return (
      <div >
      {this.props.filteredHistories.map((chat) => {
                return <div chat={chat} key={chat.id}>{chat.chat}</div>
                })}
      </div>
    );
  }}

  export default DetailSection;
