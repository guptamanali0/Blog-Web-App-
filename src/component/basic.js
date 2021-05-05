import React from 'react'
import './../styles/page.css'
import Logo1 from './../images/image3.jpg'

function Basic(props){
  console.log(props)
return(

<>   
 
{
 props.courselist.map(item=>(
 <>
<div className="main2">
<p id="fourteen">The Latest</p>

  <div className="six">

 <img id="four" src={Logo1}/>
 <div id="seven">
 <h3>{item.subheading}</h3>
 <p>{item.description}</p>
 <div id="ten">
 <p id="eleven">{item.job}</p>
 <p id="tweleve">{item.date}</p>
 </div>
 </div>

 <img id="five" src={Logo1}/>
 <div id="eight">
 <h3>{item.subheading}</h3>
 <p>{item.description}</p>
 <div id="ten">
 <p id="eleven">{item.job}</p>
 <p id="tweleve">{item.date}</p>
 </div>
 </div>

 <img id="six" src={Logo1}/>
 <div id="nine">
 <h3>{item.subheading}</h3>
 <p>{item.description}</p>
 <div id="ten">
 <p id="eleven">{item.job}</p>
 <p id="tweleve">{item.date}</p>
 </div>
 </div>
</div>

<p id="fourteen">Latest Articles</p>

<div className="seven">
<img src={Logo1} id="thirteen"/>

<div>
 <h3>{item.subheading}</h3>
 <p>{item.description}</p>
 <div>
 <p>{item.job}</p>
 <p>{item.date}</p>
 </div>
 </div>



<h1>nkhkj</h1>
<h1>nkhkj</h1>
<h1>nkhkj</h1>

</div>
</div>


 </>
))

}

</>
);
}
export default Basic;