import Image from 'next/image'
import React from 'react'
import HeroImage from "@/public/hero.webp"
const AboutStory = () => {

  return (
    <>
    <div className='flex justify-center items-center flex-col'>
        <div className='font-bold text-blue-500 text-xl my-8'>
            Established in 2017
        </div>
        <div className='text-4xl font-bold text-[#2D3748]'>
             Discover Our Story
        </div>
        <div className='font-normal text-xl my-8 text-[#718096]'>
        Credibly brand standards compliant users without extensible services
        </div>
        <div>
        <Image src="/hero.webp" alt='HeroImage' width={1000}
        height={600} />
        </div>
    </div>
    </>
  )
}

export default AboutStory