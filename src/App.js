import React, { Component } from 'react';
import {Route,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import './support/css/bootstrap.css';
import './support/css/bootstrap.min.css';
import './App.css'
import './support/css/dokure.css'
import Homes from './components/home';
import LoginRE from './components/login';

class App extends Component{
  render(){
    return(
      <div>
        <Route path="/RiskMonitoring" component={Homes}/>
        <Route path="/login" component={LoginRE}/>
      </div>
    )
  }
}
const mapStateToProps =(state)=>{
  return {
    
  };
}
export default withRouter(connect(mapStateToProps)(App));
