import HeroSection from "@/components/ui/home/hero-section";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import React from "react";

import MainGame from "@/game/MainGameScreen";

const Home = () => {
  return (
    <>
    <BackgroundBeamsWithCollision className='text-white flex items-end justify-center  bg-[url("/assets/home/background-home-desktop.jpg")] bg-no-repeat bg-cover bg-center'>

      <HeroSection />

    </BackgroundBeamsWithCollision>
    <MainGame/>
    </>
  );
};

export default Home;
