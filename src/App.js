// type rafce

import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Blog from './component/Blog'
import Newfeed from './component/News/Newfeed'

const App = () => {
  //style component
const styleConst2 = {
  main:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"column",
    width: "50%"
  }
}

  return (
    <div style={styleConst2.main}>
    <div>App</div>
    <Header/>
    <Footer/>
    <Blog/>
    <Newfeed/>
    
    </div>
  )
}

export default App