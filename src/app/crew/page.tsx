import CrewSection from '@/_components/crew/crew-creation'
import React from 'react'

const page = () => {
  return (
    <main className='text-white gap-20 flex justify-center items-center flex-col bg-[url("/assets/crew/background-crew-desktop.jpg")] bg-no-repeat bg-cover h-screen bg-center'>
       <CrewSection/>
    </main>
  )
}

export default page