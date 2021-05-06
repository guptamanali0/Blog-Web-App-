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
<div id="fifteen">
 <h3>{item.heading}</h3>
 <p>{item.description}</p>
 <div id="sixteen">
<p id="eleven">{item.job}</p>
 <p id="tweleve">{item.date}</p>
 </div>
</div>

<img src={Logo1} id="eighteen"/>
<div id="ninteen">
 <h3>{item.heading}</h3>
 <p>{item.description}</p>
 <div id="sixteen">
<p id="eleven">{item.job}</p>
 <p id="tweleve">{item.date}</p>
 </div>
</div>

<img src={Logo1} id="twenty"/>
<div id="twentytwo">
 <h3>{item.heading}</h3>
 <p>{item.description}</p>
 <div id="sixteen">
<p id="eleven">{item.job}</p>
 <p id="tweleve">{item.date}</p>
 </div>
</div>

<img src={Logo1} id="twentyone"/>
<div id="twentythree">
 <h3>{item.heading}</h3>
 <p>{item.description}</p>
 <div id="sixteen">
<p id="eleven">{item.job}</p>
 <p id="tweleve">{item.date}</p>
 </div>
</div>


<div id="twentyfour">
  <h1 id="twentyfive">Advertisment</h1>
</div>
<div id="twentyseven">
<div>Top </div>
<div>Posts</div>
</div>
<img src={Logo1} id="twentysix"/>
</div>


<div className="eight">
  <img src={Logo1} id="twentyeight"/>

  <div id="twentynine">
<h3>{item.heading}</h3>
<div id="sixteen">
<p id="eleven">{item.job}</p>
<p id="twelve">{item.date}</p>
</div>
</div>

<div id="thirty">
<img src={Logo1} id="thirtythree"/>
</div>
<div id="thirtyfour">
<h4>{item.heading}</h4>
<div id="thirtyeight">
<p id="thirtynine">{item.job}</p>
<p id="fourty">{item.date}</p>
</div>
</div>


<div id="thirtyone">
<img src={Logo1} id="thirtyfive"/>
</div>
<div id="fourtyone">
<h4>{item.heading}</h4>
<div id="thirtyeight">
<p id="thirtynine">{item.job}</p>
<p id="fourty">{item.date}</p>
</div>
</div>




<div id="thirtytwo">
<img src={Logo1} id="thirtyseven"/>
</div>
<div id="fourtytwo">
<h4>{item.heading}</h4>
<div id="thirtyeight">
<p id="thirtynine">{item.job}</p>
<p id="fourty">{item.date}</p>
</div>
</div>

</div>
<h1>Latest Stories</h1>
<div className="nine">

<div id="fourtythree">
<h2>{item.heading}</h2>
<p>{item.bdescription}</p>
<div id="ten">
<p id="eleven">{item.tech}</p>
<p id="tweleve">{item.tdate}</p>
</div>


</div>


<div id="fourtyfour">
<h2>{item.heading}</h2>
<p>{item.bdescription}</p>
<div id="ten">
<p id="eleven">{item.style}</p>
<p id="tweleve">{item.adate}</p>
</div>
</div>

<div id="fourtyfive">
<h2>{item.heading}</h2>
<p>{item.bdescription}</p>
<div id="ten">
<p id="eleven">{item.tech}</p>
<p id="tweleve">{item.adate}</p>
</div>
</div>

</div>

</div>
 </>
))

}

</>
);
}
export default Basic;