import React from 'react'
import './../styles/page.css'
import Logo1 from './../images/image3.jpg'
import {NavLink,Link} from 'react-router-dom'
import {BrowserRouter,Route} from 'react-router-dom'
import About from './about.js'
import Course from './course.js'
import Logo2 from './../images/reactanimation.png'
import Logo3 from './../images/reactjscode.png'
import uimage from './../images/usernamelogo.jpeg'

function Technology(props){
return(

<>   
        
 {
 props.courselist.map(item=>(
 <>
 <div id="fourtyeight">
 <h1>The Siren</h1>
 <p id="fourtynine">Get Started</p>
 </div>

 <div className="main5">
   <div id="fiftyone">
   <img  src={uimage} id="fiftytwo"/>
   <div>
   <h3>Manali Gupta</h3>
   <div id="fiftythree">
 <p id="eleven">{item.job}</p>
 <p id="tweleve">{item.date}</p>
 </div>

   </div>
   </div>
   <h1>{item.reactheading}</h1>
 <img  src={Logo3} id="fifty"/>
 </div>






 </>
))

}
</>
);
}
export default Technology;