  import HeroSection from "@/_components/home/hero-section";
  import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
  import React from "react";

  const Home = () => {
    return (
      <BackgroundBeamsWithCollision className='text-white flex justify-between flex-col bg-[url("/assets/home/background-home-desktop.jpg")] bg-no-repeat bg-cover bg-center'>
        <HeroSection />

      </BackgroundBeamsWithCollision>
    );
  };

  export default Home;
