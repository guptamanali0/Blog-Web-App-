import React, { Component } from 'react'
import Coursejson from '../course.json'
import Bollywood from './bollywood.js';
class Copy extends Component{
  state={
    courselist:Coursejson
  }

    render(){
      return(
        <>   
        <Bollywood  courselist={this.state.courselist}/>
        <Hollywood  courselist={this.state.courselist}/>

        </>
      )
    }
}
export default Copy;