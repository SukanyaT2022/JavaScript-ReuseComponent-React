import React from 'react'

const Header = ({title}) => {
    //use object as style
    const styleConst = {
        main:{
            backgroundColor:"lightblue",
            padding: "5px"
        },
        head:{
            fontSize:"24px",
            fontWeight:"bold",
        }
    }
  return (
    <div style={styleConst.main}>
    <div style={styleConst.head}>{title}</div>
    <p>This is a paragraph.</p>
    </div>
  )
}

export default Header