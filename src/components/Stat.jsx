import React from 'react';

class Stat extends React.Component {
    render(){
        return(
            <div>
            <li>
                {this.props.stat.value}  {this.props.stat.label}
            </li>
            </div>
        )
    }
    
}



export default Stat;