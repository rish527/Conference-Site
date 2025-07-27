import React from 'react'
import { abouttop, aboutbot } from '../Data/about2Data'
function About2() {
  return (
    <div className='bg-[#fafafa] flex m-auto w-full justify-center p-[50px]'>
        <div className="container">
            <h1 className='uppercase text-[#31A649]  mb-2 text-xl' >ABOUT SOCIETY FOR INCLUSIVE RESEARCH AND SUSTAINABLE DEVELOPMENT</h1>
            <br />
            <div className="data-holder flex flex-wrap">
                <div className="left w-[50%]">
                    {abouttop.map((dat,index)=>(
                        <div key={index}>
                            <p>{dat}</p>
                            <br />
                        </div>
                    ))}
                </div>
                <div className="right w-1/2 px-3 flex items-start">
                    <img className='h-[360px] w-full' src="https://estsd2025.sirsd.com/assets/images/sdg-common.jpg" alt="" />
                </div>
            </div>
            <br />
            <h1 className='uppercase text-[#31A649]  mb-2 text-xl' >ABOUT SIRSD</h1>
            <p>{aboutbot[0]}</p>
            <br />
        </div>
    </div>
  )
}

export default About2