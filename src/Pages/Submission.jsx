import React from 'react'
import MiniHero from '../Components/MiniHero'
import { paras } from '../Data/submission'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Submission() {
  return (
    <div>
        <MiniHero title="Paper Submission" />
        <div className='mt-11 mb-11'>
            <div className="submission mx-[80px]">
                <h1 className='uppercase text-[#31619Eff] pb-3  text-2xl'>Paper Submission</h1>
                <br />
                <p>{paras.para1}</p>
                <br />
                <div className="div">
                    <h2 className='text-2xl text-[#006da6] pb-4 mb-2'>Auther's Guidelines</h2>

                    <p className='font-bold mb-4'>Guidelines</p>

                    <p>{paras.guidlines}</p>
                    <ul >
                        <li className='mt-2'>
                            <a href=""><p className='text-blue-800 underline'>Download Call For Papers in PDF</p></a>
                        </li>
                        <li className='mt-2'>
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
                  <br/>
                  <p>The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.</p>


                </div>
                

            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Submission
