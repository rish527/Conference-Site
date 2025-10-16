import React from 'react'
import MiniHero from '../Components/MiniHero'
import Footer from '../Components/Footer'


function Acknowledgement() {
  return (
    <div>
      {/* <MiniHero title="CMT Acknowledgement" /> */}
      <div id="mini-hero" className="w-full flex justify-center items-center overlay">
          <div className="overlay"></div>
          <div  className="content relative w-full container flex justify-center items-center h-60">
              <h1>CMT Acknowledgement</h1>
          </div>
      </div>
      <div className="mt-11 mb-11 mx-[80px]">
        {/* <h1 className='uppercase text-[#31619Eff] pb-3  text-2xl'>CMT Acknowledgement</h1> */}
        CMT ACKNOWLEDGMENT <br></br>
        The Microsoft CMT service was used for managing the paper submission and peer-reviewing process for this conference. This service was provided free of charge by Microsoft, which covered all costs including those for Azure cloud services, software development, and support.

        <br />
      </div>
      
     
      <Footer />

    </div>
  )
}

export default Acknowledgement;
