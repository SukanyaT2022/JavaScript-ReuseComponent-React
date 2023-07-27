import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Blog = () => {
    const myheading = "Hello Summer!"
  return (
    <>
    <Header keymyheading={myheading}/>
    <div>Blog</div>
    <Footer/>
    </>
  )
}

export default Blog