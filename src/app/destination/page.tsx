import DestinationSection from '@/_components/destination/destination'
import BackgroundBeamsWithCollision from '@/components/ui/background-beams-with-collision'
import React from 'react'

const page = () => {
  return (
    <BackgroundBeamsWithCollision className='text-white flex gap-8 flex-col bg-[url("/assets/destination/background-destination-desktop.jpg")] bg-no-repeat bg-cover h-screen bg-center'>
       <DestinationSection/>
    </BackgroundBeamsWithCollision>
  )
}

export default page