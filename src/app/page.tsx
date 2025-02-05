import HeroSection from "@/components/ui/home/hero-section";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import React from "react";

import MainGame from "@/game/MainGameScreen";

const Home = () => {
  return (
    <>
    <BackgroundBeamsWithCollision className='text-whiteflex items-end justify-center   md:bg-[url("/assets/home/background-home-desktop.jpg")]
    bg-[url("/assets/home/background-home-mobile.jpg")]
    sm:bg-[url("/assets/home/background-home-tablet.jpg")] bg-no-repeat bg-cover bg-center'>
      <HeroSection />
    </BackgroundBeamsWithCollision>
    <MainGame/>
    </>
  );
};

export default Home;
