import React from 'react'
import MiniHero from '../Components/MiniHero'
import Dates from '../Components/Dates'
import Tracks from '../Components/Tracks'
import Footer from '../Components/Footer'
import {paras} from '../Data/submission.js'
function Auther() {
  return (
    <div>
      <MiniHero title="Author" />
      <div className="main-container pt-16 mb-16 m-auto flex flex-col justify-center">
        <div id='impdates' className="date-container mx-[80px] ">
            <h1 className='uppercase text-[#31619Eff] pb-3  text-4xl'>Important Dates</h1>
            <Dates />
        </div>
        <br />
        <div className="line border  mx-[80px] my-[40px]"></div>
        <br />
        <div id='alltracks' className="track-container">
            <Tracks />
        </div>
        <br />
        {/* <div className="line border  mx-[80px] my-[40px]"></div> */}
        {/* <br /> */}
        {/* <div id='callforpapers' className="call mx-[80px]">
            <h1 className='uppercase text-[#31619Eff] pb-3  text-4xl'>Call for Papers</h1>
            <ul>
                <li>
                    <a href=""><p className='text-blue-800 underline'>  Download Call For Papers in PDF</p></a>
                </li>
            </ul>
        </div> */}
        <br />
        <div className="line border  mx-[80px] my-[40px]"></div>
        <br />

        <div id='submitpaper' className="submission mx-[80px]">
            <h1 className='uppercase text-[#31619Eff] pb-3  text-4xl'>Paper Submission</h1>
            <br />
            <p>{paras.para1}</p>
            <br />
            <div className="div">
                <h2 className='text-2xl text-[#006da6] pb-4 mb-2'>Auther's Guidelines</h2>

                <p className='font-bold mb-4'>Guidelines</p>

                <p>{paras.guidlines}</p>
                <ul>
                    <li>
                        <a href=""><p className='text-blue-800 underline'>Download Paper Template (Microsoft Word)</p></a>
                    </li>
                </ul>

                <br />
                <p className='font-bold mb-4'>Manuscript Preparation</p>
                <ul>
                    {
                        paras.manuscript.map((m, index)=>(
                            <li 
                                key={index}
                                className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-green-600"
                            >{m}</li>
                            
                        ))
                    }
                </ul>
                <br />
                <p className='font-bold mb-4'>Policy on Plagiarism</p>
                <ul>
                    {
                        paras.plagpolicy.map((m, index)=>(
                            <li 
                                key={index}
                                className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-green-600"
                            >{m}</li>
                            
                        ))
                    }
                </ul>


            </div>
            

        </div>

      </div>

        <Footer />
    </div>
  )
}

export default Auther
