import React, { Component } from 'react';
import {NavLink,Link} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import Home from './home.js';
import Coursejson from '../course.json'
import Logo1 from './../images/Home/image3.jpg'
import Bollywood from './bollywood.js';
class Copy extends Component{
  state={
    courselist:Coursejson
  }

    render(){
      return(
        <>
        <div className="main1">
            
        <Home  courselist={this.state.courselist}/>
    

        </div>
        </>
      )
    }
}
export default Copy;