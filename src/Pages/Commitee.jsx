import React from 'react'
import MiniHero from '../Components/MiniHero'
import { commitee } from '../Data/commitee'
import Profile from '../Components/Profile'
import '../Components/componet.css'
import Footer from '../Components/Footer'
function Commitee() {
  return (
    <div className='tol'>
        <MiniHero title="Patrons and Chair" />
        <div className="mt-11 mb-11 mx-[80px]">
            <div >
                {commitee.map((data,index)=>(
                    <div key={index} className='row py-2 flex flex-col items-center w-full'>
                        <h1 className='bg-[#31619Eff] text-white text-2xl mx-auto  mb-7 py-[5px] px-[20px]'>{data.head}</h1>
                        <div className='flex flex-wrap justify-center '>
                            {
                                data.members.map((det,ind)=>(
                                    <Profile det={det} />
                                ))
                            }

                        </div>
                        
                        {index!=commitee.length-1? <div className="line border w-[100vw] "></div> :<></> }
                        <br />  
                    </div>
                ))}
                
            </div>
        </div>
            <Footer />
    </div>
  )
}

export default Commitee