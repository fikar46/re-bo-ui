import React, { Component } from 'react';
import {
    Navbar,
    NavbarToggler,
    } from 'reactstrap';
class NavbarRE extends Component{
  render(){
    return(
      <div  >
          <Navbar className="shadow-navbar"  expand="md" fixed="top"style={{ background: '#1083da'}}>
         <img src="../image/logo-doku.png" className="logo pl-2" alt="doku"/> <span className="text-white font-weight-bold logo-text">Risk Engine</span>
          <NavbarToggler />
         
        </Navbar>
      </div>
    )
  }
}
export default NavbarRE;
