import React from 'react'
import './../styles/page.css'

function Basic(props){
  console.log(props)
return(

<>    
{
 props.courselist.map(item=>(
 <>
 <div className>
 <h3>{item.heading}</h3>
 <p>{item.description}</p>
 </div>
 </>
))}

</>
);
}
export default Basic;