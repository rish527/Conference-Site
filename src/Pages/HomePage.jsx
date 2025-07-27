import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Notification from '../Components/Notification'
import About from '../Components/About'
import Missions from '../Components/Missions'
import Tracks from '../Components/Tracks'
import About2 from '../Components/About2'
import Footer from '../Components/Footer'

function HomePage() {
  return (
    <div >
        <Hero />
        <Notification />
        <section style={{borderBottom:'1px solid #dadada', borderTop:'1px solid #dadada'}}>
          <About />
          <Missions />
          <Tracks />
          <About2 />
        </section>
        <Footer />
        
    </div>
  )
}

export default HomePage