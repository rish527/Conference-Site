import React from 'react'
import Dates from './Dates'

function MiniHero({title}) {
  return (
    <div id="mini-hero" className="w-full flex justify-center items-center overlay">
        <div className="overlay"></div>
        <div  className="content relative w-full container flex justify-center items-center h-60">
            <h1>{title}</h1>
        </div>
    </div>
  )
}

export default MiniHero
