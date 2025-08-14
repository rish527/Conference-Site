import React from 'react'
import MiniHero from '../Components/MiniHero'
import Table from '../Components/Table'
import { indianfee, foreinfee, bank } from '../Data/FeeData'
import Table2 from '../Components/Table2'
import Footer from '../Components/Footer'
import paytm from '../assets/paytm.webp'



function Registration() {
  return (
    <div>
      <MiniHero title="Registeration" />
      <div className='my-11 mx-[80px] flex flex-col gap-6'>
        <h1 className='uppercase  pb-1  text-2xl'>Registration Free</h1>
        <div className="price w-full flex">
            <div className="left w-1/2 flex justify-center pr-4">
                <Table row1="Indian Authers" row2="Price (INR)" fee={indianfee}/>
            </div>
            <div className="right w-1/2 flex justify-center pl-4">
            <Table row1="Foreing Authers" row2="Price (USD)" fee={foreinfee}/>
            </div>
        </div>
        <div className="note">
            <p><span className="font-bold">Note: </span>
                Payment to be made through NEFT /IMPS / RTGS/GPay in favour of “OMYAA Education and Research Foundation” payable at Greater Noida,India. You will be asked to fill in the payment transaction details in the registration form. The bank details and QR code are given below.
            </p>
        </div>
        <div className="link">
            <p><span className="font-bold">Registration Link: </span>
                <a className='text-blue-800 underline' href="">Click here</a>
            </p>
        </div>

        <div className="bank">
            <h1 className='  pb-1  text-xl'>Registration Free</h1>
            
            <div className="price w-full flex">
            <div className="left w-1/2 flex justify-center pr-4">
                <Table2 fee={bank} />
            </div>
            {/* <div className="right w-1/2 flex justify-center pl-4">
                <div className="qr flex justify-center">
                    <img className=' h-[800px]' src={paytm} alt="" />
                </div>
            </div> */}
        </div>
        </div>


      </div>
      <Footer />
    </div>
  )
}

export default Registration
