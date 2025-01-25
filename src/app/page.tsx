import HeroSection from '@/_components/home/hero-section'
import React from 'react'

const Home = () => {
  return (
    <main className='text-white flex justify-between flex-col bg-[url("/assets/home/background-home-desktop.jpg")] bg-no-repeat bg-cover h-screen bg-center'>
    <HeroSection/>
    </main>
  )
}

export default Home