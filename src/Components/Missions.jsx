import React from 'react'
import { missions } from '../Data/aboutData.js'
import {tracks} from "../Data/Tracks.js"
function Missions() {
  return (
    <div className="div flex flex-col justify-center max-w-[1320px] px-3 m-auto">
        <div className="space-y-4 list-disc list-inside  ">
            <ul className=' px-3'>
                {missions.map((m, index) => (
                    <li 
                        key={index}
                        className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-green-600"
                    >{m}</li>
                ))}
            </ul>
        </div>
        <br />
        <div className="track-head mb-4 pb-5">
            <p >{tracks.head}</p>
        </div>
        <br />
    </div>
    
    
  )
}

export default Missions