import React from 'react'
import { tracks } from '../Data/Tracks'
function Tracks() {
  return (
    <div>
        <div className="container flex flex-wrap justify-center m-auto">
            {tracks.tracks.map((track,index)=>(
                <div key={index} className="track w-[50%] mb-5">
                    <h1 className='uppercase text-[#31A649]  mb-2 text-xl' key={index}>Track-{index+1}. {track.head}</h1>
                    <ul className=' pb-5'>
                        {track.data.map((m, index) => (
                            <li 
                                key={index}
                                className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-green-600"
                            >{m}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Tracks