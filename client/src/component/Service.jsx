import React from 'react'
import delivery from "../assets/del.avif"

function Service() {
  return (
    <div className='py-3 px-10 sm:px-4 md:px-6 lg:px-6 bg-black'>
        <div className='container mx-auto py-[2vh]'>
            <div className='grid grid-cols-1 relative lg:grid-cols-2
            gap-8 items-center'>
                <img src={delivery} alt="" className=' mx-auto justify-end rounded-[50px] h-[500px]' />
                <div className=' w-full md:w-[32rem] flex flex-col space-y-6'>
                <div className='text-2xl md:text-3xl font-bold text-white lg:text-4xl'>
                 <span className='text-[#f54748]'>shop</span> with us for <span className='
                    text-[#fdc55e]'>fast</span>   delivery services
                </div>
                <div className='lg:text-lg text-white md:text-base text-sm'>
                Discover endless possibilities at our online shop, where convenience meets curated excellence. Elevate your shopping
                 experience with a click – explore, indulge, and redefine the way you shop.
                </div>
                <div className='flex gap-8 items-center'>
                    {/* <button className='bg-[#f54748] active:scale-90 transition duration-150 transform
                    hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium
                    text-white'>About Us</button> */}
                </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Service
