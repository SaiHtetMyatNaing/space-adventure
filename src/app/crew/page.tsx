import CrewSection from '@/components/ui/crew/crew-creation'
import BackgroundBeamsWithCollision from '@/components/ui/background-beams-with-collision'
import React from 'react'

const page = () => {
  return (
    <BackgroundBeamsWithCollision className='text-white flex justify-start md:justify-center items-center flex-col lg:bg-[url("/assets/crew/background-crew-desktop.jpg")]
    md:bg-[url("/assets/crew/background-crew-tablet.jpg")]
    bg-[url("/assets/crew/background-crew-mobile.jpg")] h-auto bg-no-repeat bg-cover bg-center'>
       <CrewSection/>
    </BackgroundBeamsWithCollision>
  )
}

export default page