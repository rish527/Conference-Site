import React from 'react'
import MiniHero from '../Components/MiniHero'
import Footer from '../Components/Footer'


function Venue() {
  return (
    <div>
      <MiniHero title="Venue" />
      <div className="mt-11 mb-11 mx-[80px]">
        <h1 className='uppercase text-[#31619Eff] pb-3  text-2xl'>Venue</h1>
        <p>Indira Gandhi National Tribal University, Regional Campus Manipur, Kangpokpi district, Manipur 795136, India</p>
        <br />
      </div>
      <br />
      <div className="line border  "></div>
      <div className="mt-11 mb-11 mx-[80px]">
        <h1 className='uppercase text-[#31619Eff] pb-3  text-2xl'>Sharda University Location Map</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38875.36664993537!2d77.454314921551!3d28.47430843579721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea0f7b91511b%3A0x486f13bd49e5e7ae!2sSharda%20University!5e1!3m2!1sen!2sin!4v1753612773451!5m2!1sen!2sin"
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
