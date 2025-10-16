import React from 'react'
import MiniHero from '../Components/MiniHero'
import Footer from '../Components/Footer'


function Venue() {
  return (
    <div>
      <MiniHero title="CMT Acknowledgement" />
      <div className="mt-11 mb-11 mx-[80px]">
        {/* <h1 className='uppercase text-[#31619Eff] pb-3  text-2xl'>CMT Acknowledgement</h1> */}
        CMT ACKNOWLEDGMENT <br></br>
        This conference uses Microsoft CMT for paper submission and review.
        The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
        <br />
      </div>
      
     
      <Footer />

    </div>
  )
}

export default Venue
