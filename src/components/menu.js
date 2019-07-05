import React, { Component } from 'react';
import {Route,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Dashboard from './menu/dashboard';
import ManageMerchant from './menu/tools/manageMerchant';
import ManageUsers from './menu/tools/manageUsers';
class MenuRE extends Component{
  render(){
    return(
      <div>
          <Route path="/RiskMonitoring/Dashboard" component={Dashboard}/>
          <Route path="/RiskMonitoring/managemerchant" component={ManageMerchant}/>
          <Route path="/RiskMonitoring/manageusers" component={ManageUsers}/>    
      </div>
    )
  }
}
const mapStateToProps =(state)=>{
  return {
    
  };
}
export default withRouter(connect(mapStateToProps)(MenuRE));
