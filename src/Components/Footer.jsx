import React, { useState } from 'react'
import {contactData} from '../Data/contactData.js'
import logo from '../assets/logo.png'
function Footer() {
    const [ind, setInd]=useState(0)
    const [contact, setContact]=useState(contactData[ind]);
    // console.log(contact);

    function selectContact(id){
        
        setInd(id);
        setContact(contactData[ind]);
    }

    // console.log(contact[0]);
  return (
    <div id='webfoot'>
        <div className='bg-[#31619Eff] w-full text-white flex justify-center items-center py-12'>
            <div className="container mx-auto flex flex-col">
                <div className="head mb-9 px-3 text-center text-[2rem]">CONTACT US</div>
                <nav className='flex foot justify-center'>
                    <ul className='foot-nav flex flex-wrap'>
                        <li onClick={(e)=>selectContact(0)} id='0' className={`nav-item ${ind==0?'active':''}`}><button >Conference Chair & Co-Chair</button></li>
                        <li  onClick={(e)=>selectContact(1)} id='1' className={`nav-item ${ind==1?'active':''}`}><button>Convenor</button></li>
                        <li  onClick={(e)=>selectContact(2)} id='2'  className={`nav-item ${ind==2?'active':''}`}><button >For Publication Related Queries</button></li>
                        <li  onClick={(e)=>selectContact(3)} id='3'  className={`nav-item ${ind==3?'active':''}`}><button >For Registration Related Queries</button></li>
                    </ul>
                </nav>
                <div className="data-holder flex bg-[#ffffff45] justify-between flex-wrap">
                    <div className="holder w-full flex justify-center pt-[60px] pr-[10px] pb-[40px] pl-[10px] text-base">
                        <div className="left flex flex-col justify-center items-center w-[45%]">
                            <p>{contact[0][0]}</p>
                            <p><span>Email:</span> {contact[0][1]}</p>
                            <p>{contact[0][2]}</p>
                        </div>
                        <div className="right  flex flex-col justify-center items-center w-[45%]">
                            <p>{contact[1][0]}</p>
                            <p><span>Email:</span> {contact[1][1]}</p>
                            <p>{contact[1][2]}</p>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
        <div className="foot-bot flex justify-center py-5">
            <div className="container flex items-center justify-evenly">
                <div className='w-[330px]'><img className='w-[53px]' src={logo} alt="" /></div>
                <div className='w-[330px]'><img src="https://estsd2025.sirsd.com/assets/images/ext-logo.jpg" alt="" /></div>
                <div className='w-[330px]'><img className='w-[210px]' src="https://estsd2025.sirsd.com/assets/images/springer.JPG" alt="" /></div>
                <div className='w-[330px]'>
                    <p className='text-[13px] text-right'>Copyright © estsd2025</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Footer