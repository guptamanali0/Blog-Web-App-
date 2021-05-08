import React, { Component } from 'react'
import Coursejson from '../course.json'
import Food from './food.js';

class Copy extends Component{
  state={
    courselist:Coursejson
  }

    render(){
      return(
        <>   
        <Food  courselist={this.state.courselist}/>

        </>
      )
    }
}
export default Copy;