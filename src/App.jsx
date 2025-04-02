import './index.css'

import React from 'react'

export default function App() {
  return (
    <>
    <div className='h-screen bg-amber-300 flex flex-col items-center'>
      <div className="w-full flex flex-col items-center md:w-3/4 ">
        <div className="w-full md:w-3/5 pb-5 flex flex-col md:flex-row md:justify-between">
          <p className=" pl-5 text-xl font-bold font-serif pt-8 pb-5 md:text-3xl md:py-10 md:pl-2">The creative crew</p>
          <p className='w-60 m-auto md:m-0 px-6 text-[10px] md:w-65 md:text-[14px]  '><strong className='text-[13px]'>Who we are</strong><br></br>We are team of creatively diverse, driven, innovative individuals working in various location from the world. </p>
        </div>

        {/* principal */}
        <div className=' bg-white grid grid-cols-2 justify-self-center md:grid-cols-3 md:gap-4 md:p-4 md:bg-[#374366]'>
        {/* card1 */}
          <div className="flex flex-col items-center even:mt-7 md:nth-[3n+2]:mt-4">
            <div className='flex w-4/7'>
              <img src="./public/images/photo1.png" alt=""/>
              <p className='h-4 rotate-90 origin-top-left mx-3 text-black text-[8px] md:text-sm md:mx-5'>aaaaaaaaaaaaaaaaaaaa</p></div>
            <p className='text-xs md:text-sm'>bill mahoney</p>
          </div>
          {/* card2 */}
          <div className="flex flex-col items-center even:mt-7 md:nth-[3n+2]:mt-4">
            <div className='flex w-4/7'>
              <img src="./public/images/photo2.png" alt=""/>
              <p className='h-4 rotate-90 origin-top-left mx-3 text-black text-[8px]'>aaaaaaaaaaaaaaaaaaaa</p></div>
            <p className='text-xs'>bill mahoney</p>
          </div>
          <div className="flex flex-col items-center even:mt-7 md:nth-[3n+2]:mt-4">
            <div className='flex w-4/7'>
              <img src="./public/images/photo3.png" alt=""/>
              <p className='h-4 rotate-90 origin-top-left mx-3 text-black text-[8px]'>aaaaaaaaaaaaaaaaaaaa</p></div>
            <p className='text-xs'>bill mahoney</p>
          </div>
          <div className="flex flex-col items-center even:mt-7 md:nth-[3n+2]:mt-4">
            <div className='flex w-4/7'>
              <img src="./public/images/photo4.png" alt=""/>
              <p className='h-4 rotate-90 origin-top-left mx-3 text-black text-[8px]'>aaaaaaaa</p></div>
            <p className='text-xs'>bill mahoney</p>
          </div>
          <div className="flex flex-col items-center even:mt-7 md:nth-[3n+2]:mt-4">
            <div className='flex w-4/7'>
              <img src="./public/images/photo5.png" alt=""/>
              <p className='h-4 rotate-90 origin-top-left mx-3 text-black text-[8px]'>aaaaaaaa</p></div>
            <p className='text-xs'>bill mahoney</p>
          </div>
          <div className="flex flex-col items-center even:mt-7 md:nth-[3n+2]:mt-4">
            <div className='flex w-4/7'>
              <img src="./public/images/photo6.png" alt=""/>
              <p className='h-4 rotate-90 origin-top-left mx-3 text-black text-[8px]'>aaaaaaaa</p></div>
            <p className='text-xs'>bill mahoney</p>
          </div>
        </div>
        
      </div>
      <footer className='w-3/4'>
        <p className='   text-center text-xs md:bg-blue-950 md:text-white p-2'>created by <strong>AdrianaSheila</strong>-devChallenges.io</p>
      </footer>
      
    </div>
    </>
  )
}
