import React, { Component } from 'react';
import Expand from 'react-expand-animated';
import TableMerchants from './tableMerchants';
import Axios from 'axios';
import {koneksi} from '../../../../support/config'
class ManageMerchant extends Component{
  state = { 
    open: false,
    merchant:[]
  };
 componentDidMount(){
    this.getDataMerchant()
 }
 getDataMerchant=()=>{
    Axios.get(`${koneksi}/re-bo/merchant`
    ).then((res) => {
        console.log(res.data)
        this.setState({
            merchant : res.data
        })
        console.log(this.state.merchant)
    }).catch((err) => {
        console.log(err)
    })  
 }
  toggle = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };
      render() {
        return (
          <div className="main container">
          <h3 className="first-wtp fontreg my-4">Manage Merchant</h3>
              <div className="card p-3 mb-4">
             <div className="font-weight-bold mb-2 fontreg">
             <div onClick={this.toggle}><h4><i class='fas fa-search biru-doku-font'></i> <span className="biru-doku-font">Search</span></h4></div>
             </div>
             <Expand open={this.state.open}>
                <div className="row">
                <div className="col-3">
                    <label htmlFor="exampleInputEmail1">Merchant Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Merchant Name" />
                  </div>
                  <div className="col-3">
                    <label htmlFor="exampleInputEmail1">Merchant EDU Status</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="All status" />
                    
                  </div>
                  <div className="col-3">
                    <label htmlFor="exampleInputEmail1">Status</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Status" />
                    
                  </div>
                </div>
                <div className="mt-3">
                <button type="submit" className="btn btn-outline-primary col-4 mr-3">Submit</button>
          <button type="submit" className="btn btn-outline-secondary">Reset</button>
                </div>
     
            </Expand>
            
            <button type="button" class="btn btn-outline-primary btn-lg my-3 w-25">Create New Merchant</button>
            <TableMerchants/>
              </div>
          </div>
        );
      }
}
export default ManageMerchant;
