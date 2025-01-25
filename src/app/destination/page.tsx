import DestinationSection from '@/_components/destination/destination'
import Header from '@/_components/header'
import React from 'react'

const page = () => {
  return (
    <main className='text-white flex gap-10 flex-col bg-[url("/assets/destination/background-destination-desktop.jpg")] bg-no-repeat bg-cover h-screen bg-center'>
       <Header/>
       <DestinationSection/>
    </main>
  )
}

export default page