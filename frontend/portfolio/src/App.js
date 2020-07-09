import React, { Component } from 'react';
import './App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import Nav from './component/Nav'
import RoutingPage from './component/RoutingPage';
import Footer from './component/Footer';
import IdleTimerContainer from './component/IdleTimerContainer'
import Cookies from 'js-cookie'


class App extends Component {

// componentDidMount(){
//   function handlesSessions (){
//     const token = Cookies.get('JWT')
//     if(!token){
//      window.location = "/signin"
//     }
//   }
// }
   
  handleLogout =  () => {
    localStorage.clear();
    Cookies.remove('JWT')
    window.location = "/signin"
  }

  
  render(){
  return ( 
 
        <div >
          <Nav onDelete = {this.handleLogout}/>
          <RoutingPage />
          <Footer />
          <IdleTimerContainer ></IdleTimerContainer>
        
        </div>

)}
}
 
export default App;
