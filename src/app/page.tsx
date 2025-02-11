import HeroSection from "@/components/ui/home/hero-section";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import React from "react";
import IPTrackerSection from "@/components/ui/home/ip-tracker-section";
import { getIpAddress } from "@/lib/fetch-data/get-location";




const Home = async () => {
 
  const result = await getIpAddress();

  return (
    <div className="w-full max-w-full mx-auto">
      <BackgroundBeamsWithCollision
        className='text-whiteflex items-center flex-col justify-center 
        md:bg-[url("/assets/home/background-home-desktop.jpg")]
      bg-[url("/assets/home/background-home-mobile.jpg")]
      sm:bg-[url("/assets/home/background-home-tablet.jpg")] mx-auto bg-no-repeat bg-cover bg-center'
      >
        <HeroSection />
      </BackgroundBeamsWithCollision>

      {result.success ? (
        <IPTrackerSection data={result.data} />
      ) : (
        <div className="bg-white">{result.error}</div>
      )}
    </div>
  );
};

export default Home;



