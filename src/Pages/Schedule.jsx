import React from 'react'
import MiniHero from '../Components/MiniHero'
import Footer from '../Components/Footer'

function Schedule() {
  return (
    <div>
        <MiniHero />
        <div className="mt-11 mb-11 mx-[80px]">
            <h1 className='uppercase text-[#31619Eff] pb-3  text-2xl'>Schedule</h1>
            <p><a className='text-blue-800 underline' href="">Click here</a> to view International Conference on Emerging Smart Technology for Sustainable Development - ESTSD-2025 on 28th & 29th June 2025 schedule.</p>
        </div>
        <br />
        <Footer />
    </div>
  )
}

export default Schedule