import React, { Component } from 'react'
import Coursejson from '../course.json'
import Hollywood from './hollywood.js';
class Copy extends Component{
  state={
    courselist:Coursejson
  }

    render(){
      return(
        <>   
        <Hollywood  courselist={this.state.courselist}/>

        </>
      )
    }
}
export default Copy;