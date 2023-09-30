import React from 'react'
import Nabbar from './Nabbar'
import Footer from './footer'
export default function Wrapper({children}) {
  return (
    <div>
      <Nabbar/>
      <div style={{width:'100%', alignItems:'center',justifyContent: 'center',padding:'30px'}}>
        {children}
      </div>
      <Footer/>
    </div>
  )
}
