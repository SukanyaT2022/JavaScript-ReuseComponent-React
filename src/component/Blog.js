import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Blog = () => {
    const myheading = "Hello Summer!"
  return (
    <>
    <Header react pass the proc={myheading}/>
    <div>Blog</div>
    <Footer/>
    </>
  )
}

export default Blog