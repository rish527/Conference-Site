import React from 'react'
import MiniHero from '../Components/MiniHero'
import Footer from '../Components/Footer'


function Venue() {
  return (
    <div>
      <MiniHero title="Venue" />
      <div className="mt-11 mb-11 mx-[80px]">
        <h1 className='uppercase text-[#31619Eff] pb-3  text-2xl'>Venue</h1>
        <p>Indira Gandhi National Tribal University - Regional Campus Manipur,India.</p>
        <br />
      </div>
      <br />
      <div className="line border  "></div>
      <div className="mt-11 mb-11 mx-[80px]">
        <h1 className='uppercase text-[#31619Eff] pb-3  text-2xl'>Indira Gandhi National Tribal University location Map</h1>
        <iframe
          src="https://www.google.com/maps?q=Indira+Gandhi+National+Tribal+University+-+Regional+Campus+Manipur&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>        
        <br />
      </div>

      <Footer />

    </div>
  )
}

export default Venue
