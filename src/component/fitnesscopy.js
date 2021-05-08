import React, { Component } from 'react'
import Coursejson from '../course.json'
import Fitness from './fitness.js';
class Copy extends Component{
  state={
    courselist:Coursejson
  }

    render(){
      return(
        <>   
        <Fitness  courselist={this.state.courselist}/>

        </>
      )
    }
}
export default Copy;