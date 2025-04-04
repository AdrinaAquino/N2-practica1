import './index.css'
import React from 'react'
import { CardPersonal } from './components/CardPersonal'
export default function App() {
  return (
    <>
      <div className=' flex flex-col items-center'>
        <div className="w-full flex flex-col items-center md:w-3/5 md:text-white">
          <div className="w-full pb-5 flex flex-col md:flex-row md:justify-between md:bg-[#111827] ">
            <p className=" pl-5 text-xl font-bold font-serif pt-8 pb-5 md:text-3xl md:py-10 md:pl-2">The creative crew</p>
            <p className='w-60 m-auto md:m-0 px-6 text-[10px] md:w-65 md:text-[14px]  '>
              <strong className='text-[13px]'>Who we are</strong>
              <br></br>We are team of creatively diverse, driven, innovative individuals working in various location from the world.
            </p>
          </div>
          <div className=' bg-white grid grid-cols-2 md:grid-cols-3 md:gap-4 md:p-4 md:bg-[#111827]'>
            <CardPersonal />
          </div>
        </div>
        <footer className='md:w-3/5'>
          <p className='w-full text-center text-xs md:bg-[#111827] md:text-white p-2'>
            created by <strong>AdrianaSheila</strong>-devChallenges.io
          </p>
        </footer>
      </div >
    </>
  )
}
