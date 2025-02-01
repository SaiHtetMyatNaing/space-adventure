import CrewSection from '@/components/ui/crew/crew-creation'
import BackgroundBeamsWithCollision from '@/components/ui/background-beams-with-collision'
import React from 'react'

const page = () => {
  return (
    <BackgroundBeamsWithCollision className='text-white gap-20 flex justify-center items-center flex-col bg-[url("/assets/crew/background-crew-desktop.jpg")] bg-no-repeat bg-cover overflow-hidden h-screen bg-center'>
       <CrewSection/>
    </BackgroundBeamsWithCollision>
  )
}

export default page