import React, { Component } from 'react';
import NavbarRE from '../feature/navbar';
import ReCAPTCHA from "react-google-recaptcha";

const TEST_SITE_KEY = "6LeY6i8UAAAAAP15Hp6DgXhli9W-LwotfXBCUY74";
class LoginRE extends Component{
  onChange = value =>{
    console.log("Captcha value:", value);
  }
  render(){
    return(
      <div>
         <NavbarRE/>
         <div className="limiter">
        <div className="container-login100">
          <div className="card card-login">
            <form className="text-center validate-form">
                <div className="">
                    <div className="my-5">
                      <img src="../image/logo-doku.png" width="80" alt="doku"/> 
                      <h3 className="fontreg mt-2">Risk Monitoring</h3>
                    </div>
                    <div className="mb-5 pl-4 pr-4">
                        <div className="form-group text-left">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username" />
                      </div>
                      <div className="form-group text-left">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                      </div>
                      <div className=" my-3">
                                                <ReCAPTCHA
                                                
                              sitekey={TEST_SITE_KEY}
                              onChange={this.onChange}
                            />
                      </div>
                      <button type="button" className="btn btn-outline-primary w-100 btn-lg">SIGN IN</button>
                    </div>
                </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
export default LoginRE;
