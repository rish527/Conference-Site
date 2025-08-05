import React from 'react'
import logo from '../assets/logo.png'
import shardalogo from '../assets/sharda-logo.webp'
import springerlogo from '../assets/springer.webp'
import './componet.css'


function Navbar() {
  return (
    <div>
        <div className="navtop py-[12px] px-[15px] flex w-full ">
          <div className="row flex">
              <div className="left w-[25%]">
                <a href=""><div className="logo flex items-center">
                    <img className='h-14 w-14' src={logo} alt="" />
                    <p className='text-[#31619Eff] font-bold text-[46px]' >ICEAET</p>
                </div></a>
            </div>
            <div className="mid w-[33.333%]">
              <marquee behavior="" direction="">
                <p className="text-base">It is seen that some authors still have not done the registration. The conference proceeding will be published in prestigious scopus indexed  Springer Lecture note series. Do not miss the opportunity. Authors are advised to do the registration by today. </p>
              </marquee>
            </div>
            <div className="right w-[41.66667%]">
              {/* <div className="logo2 flex flex-wrap justify-end items-end">
                <a href=""><img className='w-[240px] mt-[6px] mr-[15px]' src={springerlogo} alt="" /></a>
                <a href=""><img className='w-[240px] mt-[6px] mr-[15px]' src={shardalogo} alt="" /></a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="nav-bottom">
          <nav>
            <div id="navbarnav" className='flex  justify-center h-[50px] bg-[#31619Eff]'>
              <ul className='nav-items items flex items-center justify-evenly w-full h-full text-white'>
                <li >
                  <a href="/"><p>Home</p></a>
                </li>
                <li>
                  <a href="/auther"><p className='dropdown-toggle'>For Authers</p></a>
                  <div className="dropdown">
                    <ul className='dropdown-menu'>
                      <li><a href="/auther#impdates">Important Dates</a></li>
                      <li><a href="/auther#alltracks">Technical Tracks</a></li>
                      <li><a href="/auther#callforpapers">Call for Papers</a></li>
                      <li><a href="/auther#submitpaper">Paper Submissions</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="/commitee"><p>Committe</p></a>
                  
                </li>
                <li>
                  <a href="/submit"><p>Paper Submission</p></a>
                </li>
                <li>
                  <a href="/register"><p>Registration</p></a>
                </li>
                <li>
                  <a href="/venue"><p>Venue</p></a>
                </li>
                <li>
                  <a href="/schedule"><p>Schedule</p></a>
                </li>
                <li>
                  <a href="#webfoot"><p>Contact Us</p></a>
                </li>
                
              </ul>
            </div>
          </nav>
        </div>
    </div>
  )
}

export default Navbar