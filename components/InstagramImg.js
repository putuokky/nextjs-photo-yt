import Image from 'next/legacy/image'
import React from 'react'
import { FaInstagram } from 'react-icons/fa'

const InstagramImg = ({ socialImg }) => {
  return (
    <div className='relative'>
      <Image src={socialImg} alt='' className='w-full h-full' layout='responsive' />
      {/* Overlay */}
      <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center hover:bg-black/50 group' >
        <p className='hidden text-gray-300 group-hover:block'><FaInstagram size={30} /></p>
      </div>
    </div>
  )
}

export default InstagramImg