import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Coursejson from './../course.json'
import Copy from './copy.js';
import Bollywoodcopy  from './bollywoodcopy.js';
import Technologycopy  from './technologycopy.js';
import Hollywoodcopy  from './hollywoodcopy.js';
import Foodcopy  from './foodcopy.js';
import Fitnesscopy  from './fitnesscopy.js';
class App extends Component{
  state={
    courselist:Coursejson
  }

    render(){
      return(
        <>

   
   <BrowserRouter>
   <Route path="/" component={Copy} exact/>
   <Route path="/bollywoodcopy" component={Bollywoodcopy} exact />
   <Route path="/technologycopy" component={Technologycopy} exact />
   <Route path="/hollywoodcopy" component={Hollywoodcopy} exact/>
   <Route path="/foodcopy" component={Foodcopy} exact/>
   <Route path="/fitnesscopy" component={Fitnesscopy} exact/>
   </BrowserRouter>
    


        </>
      )
    }
}
export default App  