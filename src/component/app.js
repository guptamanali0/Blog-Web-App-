import React, { Component } from 'react';
import Home from './home.js';
import Basic from './basic.js';
import Coursejson from './../course.json'
import Logo1 from './../images/image3.jpg'

class App extends Component{
  state={
    courselist:Coursejson
  }

    render(){
      return(
        <>
        <div className="main">
          <div className="main1">
        <Home />
        <Basic  courselist={this.state.courselist}/>
        </div>
        </div>
        </>
      )
    }
}
export default App  