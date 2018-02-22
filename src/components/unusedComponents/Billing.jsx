import React from 'react';
import BillingList from './BillingList';


class Billing extends React.Component {
  render() {
    return(
      <div>
          <BillingList  bills= {this.props.bills}/>
      </div>
        
    )}
}
  
  export default Billing;