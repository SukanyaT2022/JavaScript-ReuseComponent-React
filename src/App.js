// type rafce

import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Blog from './component/Blog'

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
    </div>
  )
}

export default App