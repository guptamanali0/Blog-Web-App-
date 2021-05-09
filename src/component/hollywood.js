import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import Thimage from './../images/Hollywood/3hline.png';
import Logo1 from './../images/Hollywood/holly1.png'
import Logo2 from './../images/Hollywood/holly2.jpg'
import Logo3 from './../images/Hollywood/holly3.png'
import Logo4 from './../images/Hollywood/holly4.webp'
import Logo5 from './../images/Hollywood/holly5.jpg'
import Logo6 from './../images/Hollywood/holly6.jpg'
import Logo7 from './../images/Hollywood/holly7.jpg'
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
         <Link to="/bollywoodcopy">
         <img src={Thimage} id="seventythree"/>
         </Link>
         <hr id="seventyfour"></hr>
         </div>
        

         
<div className="main9">
         <p id="seventyfive">Hollywood</p>
         <hr id="seventysix"></hr>

<div className="main10">
<Link to="/foodcopy" id="color">
< img src={Logo1} id="seventyseven"/>
</Link>
<div id="seventyeight">
<h4 id="seventynine">{item.spiderman}</h4>
    <p id="eighty">{item.spidermandescription}</p>

    <div id="eightyone">
        <p id="eleven">{item.update}</p>
        <p id="eightytwo">{item.date}</p>
    </div>
    </div>

</div>
<hr id="eightythree"></hr>

<div className="main10">
<Link to="/" id="color">
< img src={Logo2} id="seventyseven"/>
</Link>
<div id="seventyeight">
<h4 id="seventynine">{item.blackpanther}</h4>
    <p id="eighty">{item.blackpantherdescription}</p>

    <div id="eightyone">
        <p id="eleven">{item.update}</p>
        <p id="eightytwo">{item.date}</p>
    </div>
    </div>

</div>
<hr id="eightythree"></hr>

<div className="main10">
<Link to="/bollywoodcopy" id="color">
< img src={Logo3} id="seventyseven"/>
</Link>
<div id="seventyeight">
<h4 id="seventynine">{item.ironman}</h4>
    <p id="eighty">{item.ironmandescription}</p>

    <div id="eightyone">
        <p id="eleven">{item.update}</p>
        <p id="eightytwo">{item.date}</p>
    </div>
    </div>

</div>

<hr id="eightythree"></hr>

<Link to="/fitnesscopy" id="color">
<div className="main10">
<p id="eightyfour">LOAD MORE</p>
<img src={darrow} id="ninty"/>
<p id="eightyfive">Top Posts</p>
<hr id="nintyone"></hr>
< img src={Logo4} id="eightyseven"/>
<p id="eightyeight">{item.blackwidow}</p>
<div id="eightynine">
        <p id="eleven">{item.update}</p>
        <p id="eightytwo">{item.date}</p>
    </div>


</div>
</Link>
<hr id="eightythree"></hr>


<Link to="/" id="color">
<div className="main10">
< img src={Logo5} id="seventyseven"/>
<div id="seventyeight">
<h4 id="seventynine">{item.drstrange}</h4>
    <p id="eighty">{item.drstrangedescription}</p>

    <div id="eightyone">
        <p id="eleven">{item.update}</p>
        <p id="eightytwo">{item.date}</p>
    </div>
    </div>

</div>
</Link>
<hr id="eightythree"></hr>


<Link to="/fitnesscopy" id="color">
<div className="main10">
< img src={Logo6} id="seventyseven"/>
<div id="seventyeight">
<h4 id="seventynine">{item.thanos}</h4>
    <p id="eighty">{item.thanosdescription}</p>

    <div id="eightyone">
        <p id="eleven">{item.update}</p>
        <p id="eightytwo">{item.date}</p>
    </div>
    </div>

</div>
</Link>
<hr id="eightythree"></hr>

<Link to="/foodcopy" id="color">
<div className="main10">
< img src={Logo7} id="seventyseven"/>
<div id="seventyeight">
<h4 id="seventynine">{item.capamerica}</h4>
    <p id="eighty">{item.capamericadescription}</p>

    <div id="eightyone">
        <p id="eleven">{item.update}</p>
        <p id="eightytwo">{item.date}</p>
    </div>
    </div>

</div>
</Link>

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
