import React from 'react'
import {NavLink} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import './../styles/page.css'
import Logo1 from './../images/image3.jpg'

 function Home(){
     return(
        <>
<div>
      <div>


            <div className="two">
                <h1>The Siren</h1>
            </div>



        <BrowserRouter>
        <div className="three">
        <NavLink to="/home" style={{color:"black"}}>Home</NavLink>
        <NavLink to="/bollywood"  style={{color:"black"}}>Bollywood</NavLink>
        <NavLink to="/technology"  style={{color:"black"}}>Technology</NavLink>
        <NavLink to="/hollywood"  style={{color:"black"}}>Hollywood</NavLink>
        <NavLink to="/fitness"  style={{color:"black"}}>Fitness</NavLink>
        <NavLink to="/food"  style={{color:"black"}}>Food</NavLink>
        </div>
        </BrowserRouter>


        <div className="five">
        <img src={Logo1} id="one"/>
        <img src={Logo1} id="two"/>
        <img src={Logo1} id="three"/>
        </div>



</div>
</div>
        </>
     )
}
 export default Home;