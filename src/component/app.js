import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom'
import Coursejson from './../course.json'
import Home from './home.js';
import Bollywood from './bollywood'
import Technology  from './technology';
import Hollywood  from './hollywood';
import Food from './food'
import Fitness from './fitness'
class App extends Component{
  state={
    courselist:Coursejson
  }

    render(){
      return(
        <>

   
<BrowserRouter>
   <Route path="/" component={() => <Home courselist={this.state.courselist} />} exact />
   <Route path="/bollywoodcopy" component={() => <Bollywood courselist={this.state.courselist} />} exact />
   <Route path="/hollywoodcopy" component={() => <Hollywood courselist={this.state.courselist} />} exact />
   <Route path="/foodcopy" component={() => <Food courselist={this.state.courselist} />} exact />
   <Route path="/fitnesscopy" component={() => <Fitness courselist={this.state.courselist} />} exact />
   <Route path="/technologycopy" component={() => <Technology courselist={this.state.courselist} />}exact />
   </BrowserRouter>
  </>
      )
      }
}


export default App  