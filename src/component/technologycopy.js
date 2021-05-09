import React, { Component } from 'react';
import {NavLink,Link} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import Coursejson from '../course.json'
import Logo1 from './../images/Home/image3.jpg'
import Technology from './technology.js';

class Technologycopy extends Component{
  state={
    courselist:Coursejson
  }

    render(){
      return(
        <>
            
        <Technology  courselist={this.state.courselist}/>
    

        </>
      )
    }
}
export default Technologycopy;