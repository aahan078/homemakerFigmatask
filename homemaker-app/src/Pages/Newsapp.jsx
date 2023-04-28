import React from 'react'
import Newsnavbar from './Newsnavbar'
import Newshome from './Newshome'

const Newsapp = () => {
  return (
    <div>
        <Newsnavbar/>
        <div className='container-fluid'><Newshome/></div>
        
    </div>
  )
}

export default Newsapp