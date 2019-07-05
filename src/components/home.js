import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import {
  Navbar,
  Nav,
  NavItem} from 'reactstrap';
import '../App.css'
import 'antd/dist/antd.css'
import MenuRE from './menu';
const { SubMenu} = Menu;
const { Sider } = Layout;
class Homes extends Component{
    state = {
        collapsed: false,
        logo:true,
        name:"Risk Engine"
      };
      
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
          logo:!this.state.logo
        });
        this.logo()
      };
      logo=()=>{
          if(!this.state.logo){
              this.setState({name:"Risk Engine"})
          }else{
            this.setState({name:""})
          }
      }
      render() {
        return (
            <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}  theme="light" >
            
                
             
           <div className="bg-blue-1">
          <a href="/RiskMonitoring/dashboard"> <img src="../image/logo-doku.png" className="logo pl-2" alt="doku"/> <span className="text-white font-weight-bold logo-text">{this.state.name}</span> </a>
           </div>
         
              
              <Menu theme="white" mode="inline" defaultSelectedKeys={['1']}>
            
                <Menu.Item key="1" >
                 <a href="/RiskMonitoring/dashboard"> <Icon type="home" />
                  <span>Dashboard</span></a>
                </Menu.Item>
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                        <Icon type="check-square"  />
                       <span>Verification</span> 
                        </span>
                    }
                    
                >
                <Menu.Item key="4">option1</Menu.Item>
                <Menu.Item key="5">option2</Menu.Item>
                <Menu.Item key="6">option3</Menu.Item>
            </SubMenu>
            <SubMenu
                    key="sub2"
                    title={
                        <span>
                        <Icon type="setting" theme="filled" />
                       <span>Tools</span> 
                        </span>
                    }
                    
                >
                <Menu.Item key="7"><a href="/RiskMonitoring/manageusers">Manage Users</a></Menu.Item>
                <Menu.Item key="8"><a href="/RiskMonitoring/managemenu">Manage Menu</a></Menu.Item>
                <Menu.Item key="9"><a href="/RiskMonitoring/managegroupmenu">Manage Group Menu</a></Menu.Item>
                <Menu.Item key="10" > <a href="/RiskMonitoring/managemerchant">Manage Merchant</a></Menu.Item>
            </SubMenu>
              </Menu>
            </Sider>
            <Layout>
              <div style={{ background: '#1083da'}} className="py-1">
                <Navbar  light expand="md">
                
                <Icon
              className="trigger text-white"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          
            <Nav className="mr-auto" navbar>
              <NavItem>
              <div class="wrapper-nameuser">
                                <div class="name-user">
                                    <span class="text-white"> Welcome,</span> &nbsp; 
                                    <span class="text-white font-weight-bold">dita                                    </span>
                                </div>
                                <div class="text-white">
                                    Level, 
                                    <span class="font-weight-bold font-reg">
	                                    		ADMIN
                                    </span>
                                </div>
                            </div>
              </NavItem>      
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
             <div className=" hvr-rectangle-out">
             <i class='fas fa-power-off mini-icon '></i>
             </div>
              </NavItem>      
            </Nav>
         
        </Navbar>      
              </div>
             
                <MenuRE />
              
            </Layout>
          </Layout>
        );
      }
}
export default Homes;
