import React, { Component } from 'react';
import {NavLink,Link} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import Basic from './home.js';
import Coursejson from './../course.json'
import Logo1 from './../images/Home/image3.jpg'
import Bollywood from './bollywood.js'

function Heading(){
    return(
        <>
        
        <BrowserRouter>
        <div className="three">
        <Link to="/home" style={{color:"black"}} exact>Home</Link>
        <Link to="/bollywood"  style={{color:"black"}} exact>Bollywood</Link>
        <Link to="/technology"  style={{color:"black"}}>Technology</Link>
        <Link to="/hollywood"  style={{color:"black"}}>Hollywood</Link>
        <Link to="/fitness"  style={{color:"black"}}>Fitness</Link>
        <Link to="/food"  style={{color:"black"}}>Food</Link>
        </div>
        </BrowserRouter>
        </>
    )
}

export default Heading ;