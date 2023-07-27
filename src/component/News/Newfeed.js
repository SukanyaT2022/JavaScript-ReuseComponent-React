import React from 'react'
import USnews from './USnews'
import BBC from './BBC'

const styleBorder ={
border: "1px solid black",
width: "50%",
margin:"20px 30px",
padding:"10px 5px"
}

const Newfeed = () => {
  const titleUSNews ="Shooting in Las Vegas"
  const contentUS = "10 people dead"

  const titleBBCNews = "EU Meeting"
  const contentBBC = "British Priminister meet ten leaders"
  return (
    <div style={styleBorder}>

<USnews keytitle={titleUSNews} keyContent={contentUS}/>
<BBC keytitleBBC = {titleBBCNews} keycontentBBC = {contentBBC}/>

    </div>
  )
}

export default Newfeed