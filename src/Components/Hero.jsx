import React from 'react'

function Hero() {
  return (
    <div>
        <div className="holder px-[64.5px] py-[20px] text-center flex flex-col justify-center items-center text-white bg-black">
            <div className="name pb-[15px] font-bold text-3xl uppercase">International Conference on Emerging and Advanced Engineering Technologies
<br /></div>
            <div className="date text-[26px]" style={{borderBottom:"4px #31619Eff solid"}}><strong>28<sup>th</sup> - 29<sup>th</sup> June 2025</strong></div>
            <div className="data py-[15px]">
                <div className="initiate mb-4 text-[13px]">
                    <p className='text-[16px] pb-[2px] font-bold'>INITIATED BY:</p>
                    <p>Society of Inclusive Research for Sustainable Development (SIRSD), Greater Noida 201310</p>
                </div>
                <div className="host mb-4 text-[13px]">
                    <p className='text-[16px] pb-[2px] font-bold'>HOSTED BY:</p>
                    <p>Sharda University, Greater Noida</p>
                </div>
            </div>
            
            <div className="buttons">
                <div className="hero-btn mx-[5px]">Paper Submission</div>
                <div className="hero-btn mx-[5px]">Payment</div>
                <div className="hero-btn mx-[5px]">Register Now</div>
            </div>

        </div>
    </div>
  )
}

export default Hero