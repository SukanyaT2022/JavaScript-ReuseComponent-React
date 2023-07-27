import { color } from 'framer-motion'
import React from 'react'


const Footer = () => {
  //method 1
//   const style={
// styleHeader:{
// fontSize:"50px",
// color:"yellow"
// },
// styleText:{
// fontSize:"20px",
// color:"red"
// }
//   }


//method 2 -normal object
const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

  

  return (
    <>
    <div>Footer</div>
    {/* //method one */}
    {/* <h2 style={style.styleHeader}>This is header</h2>
    <p style={style.styleText}>This is style from styleConst2 in app.js -pass style</p> */}

    {/* method 2 */}
  <h3 style={mystyle}>This header method 2-style</h3>
  <p style={{color:"pink", fontSize:"15px"}}>This is inlione style</p>
  
  </>
  )
}

export default Footer