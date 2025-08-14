import React from 'react'
import { objective, about, missions } from '../Data/aboutData'
import Dates from './Dates'

function About() {
  return (
    <section className='py-[50px]'>
        <div className='container m-auto px-3'>
            <div className="row flex flex-wrap">
                <div className="col1 w-[66.667%] px-3">
                    <h2 className='uppercase text-[#31619Eff] pb-5 mb-2 text-xl'>About the Conference</h2>
                    <p className='pb-5 mb-4'>{about.para1}</p>
                    <p className='pb-5 mb-4 text-[#FF8C00]'>{about.para2}</p>
                
                    <h2 className='uppercase text-[#31619Eff] pb-5 mb-2 text-xl'>THE OBJECTIVE OF THE CONFERENCE</h2>
                    <p className='pb-20px mb-4'>{objective.para1}</p>
                </div>
                <div className="col2 w-[33.333%] px-3">
                    {/* <div className="time">
                        <p className='mb-2 text-2xl'>CONFERENCE BEGINS IN</p>
                        <div className="timer flex mb-8">
                            <div className="day flex flex-col justify-center"><p className='num'>24</p><p className='txt'>Days</p></div>
                            <div className="hours"><p className='num'>24</p><p className='txt'>Hours</p></div>
                            <div className="minutes"><p className='num'>24</p><p className='txt'>Minutes</p></div>
                            <div className="seconds"><p className='num'>24</p><p className='txt'>Seconds</p></div>
                        </div>
                    </div> */}
                    <div className="dates-sec pl-5">
                        <div className="hero-btn">Download CPC Here</div>
                        <br />
                        <br />
                        <h1 className='uppercase text-[#31619Eff] pb-3  text-xl'>Important Dates</h1>
                        <Dates />
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default About