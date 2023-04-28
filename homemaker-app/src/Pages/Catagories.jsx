import React from 'react'
import Newsnavbar from './Newsnavbar'

function Catagories({cat}) {
  return (
    <div>
        <Newsnavbar/>
        <div className='container'>{cat}</div>
        
        </div>
  )
}

export default Catagories