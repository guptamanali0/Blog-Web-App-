import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import Thimage from './../images/3hline.png';
import Logo1 from './../images/image2.jpg'
import darrow from './../images/downwordarrow.png'


function Hollywood(props){
    console.log("manali");
    console.log(props);
    return(
        <>

{
 props.courselist.map(item=>(
     <>
     <div className="main8">

         <div id="seventyone">
         <p id="seventytwo">The Siren</p>
         <NavLink to="/bollywoodcopy">
         <img src={Thimage} id="seventythree"/>
         </NavLink>
         <hr id="seventyfour"></hr>
         </div>


<div className="main9">
         <p id="seventyfive">Bollywood</p>
         <hr id="seventysix"></hr>


<div className="main10">
< img src={Logo1} id="seventyseven"/>
<div id="seventyeight">
<h4 id="seventynine">{item.heading}</h4>
    <p id="eighty">{item.description}</p>

    <div id="eightyone">
        <p id="eleven">{item.job}</p>
        <p id="eightytwo">{item.date}</p>
    </div>
    </div>

</div>
<hr id="eightythree"></hr>

<div className="main10">
< img src={Logo1} id="seventyseven"/>
<div id="seventyeight">
<h4 id="seventynine">{item.heading}</h4>
    <p id="eighty">{item.description}</p>

    <div id="eightyone">
        <p id="eleven">{item.job}</p>
        <p id="eightytwo">{item.date}</p>
    </div>
    </div>

</div>
<hr id="eightythree"></hr>

<div className="main10">
< img src={Logo1} id="seventyseven"/>
<div id="seventyeight">
<h4 id="seventynine">{item.heading}</h4>
    <p id="eighty">{item.description}</p>

    <div id="eightyone">
        <p id="eleven">{item.job}</p>
        <p id="eightytwo">{item.date}</p>
    </div>
    </div>

</div>
<hr id="eightythree"></hr>


<div className="main10">
<p id="eightyfour">LOAD MORE</p>
<img src={darrow} id="ninty"/>
<p id="eightyfive">Top Posts</p>
<hr id="nintyone"></hr>
< img src={Logo1} id="eightyseven"/>
<p id="eightyeight">{item.heading}</p>
<div id="eightynine">
        <p id="eleven">{item.job}</p>
        <p id="eightytwo">{item.date}</p>
    </div>


</div>
<hr id="eightythree"></hr>

<div className="main10">
< img src={Logo1} id="seventyseven"/>
<div id="seventyeight">
<h4 id="seventynine">{item.heading}</h4>
    <p id="eighty">{item.description}</p>

    <div id="eightyone">
        <p id="eleven">{item.job}</p>
        <p id="eightytwo">{item.date}</p>
    </div>
    </div>

</div>
<hr id="eightythree"></hr>

<div className="main10">
< img src={Logo1} id="seventyseven"/>
<div id="seventyeight">
<h4 id="seventynine">{item.heading}</h4>
    <p id="eighty">{item.description}</p>

    <div id="eightyone">
        <p id="eleven">{item.job}</p>
        <p id="eightytwo">{item.date}</p>
    </div>
    </div>

</div>
<hr id="eightythree"></hr>

<div className="main10">
< img src={Logo1} id="seventyseven"/>
<div id="seventyeight">
<h4 id="seventynine">{item.heading}</h4>
    <p id="eighty">{item.description}</p>

    <div id="eightyone">
        <p id="eleven">{item.job}</p>
        <p id="eightytwo">{item.date}</p>
    </div>
    </div>

</div>
<hr id="eightythree"></hr>




</div>



     </div>





      </>
 )
 )
}
</>
    )
}
export default Hollywood;
