// type rafce

import Blog from "./component/Blog"
import Footer from "./component/Footer"
import Header from "./component/Header"


const App = () => {
  const title = 'I love USA'
  return (
    <>
    <div>App</div>
    <Header mytitle={title}/>
    <Blog/>
    <Footer/>

</>
  )
}

export default App
