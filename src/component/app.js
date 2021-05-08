import React, { Component } from 'react';
import {NavLink,Link} from 'react-router-dom'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './home.js';
import Coursejson from './../course.json'
import Logo1 from './../images/image3.jpg'
import Heading from './heading.js'
import Copy from './copy.js';
import Course from './course.js';
import About  from './about.js';
import Bollywoodcopy  from './bollywoodcopy.js';
import Technologycopy  from './technologycopy.js';
import Hollywoodcopy  from './hollywoodcopy.js';
import Foodcopy  from './foodcopy.js';
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
   <Route path="/course" component={Course} exact/>
   </BrowserRouter>
    


        </>
      )
    }
}
export default App  