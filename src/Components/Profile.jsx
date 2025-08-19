import React from 'react'

function Profile({det}) {
  return (
    <div className='px-20 pb-20 flex flex-col justify-center items-center '>
        {/* <div className="img w-52 h-52 mb-3">
            <img className='rounded-full' src={det.profilePic} alt="" />
        </div> */}
        <div className='w-[300px]'>
          <p className='text-center font-bold'>{det.name}</p>
          <p className='text-center'>{det.university}</p>
        </div>
    </div>
  )
}

export default Profile