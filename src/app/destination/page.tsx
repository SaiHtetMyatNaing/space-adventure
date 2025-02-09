import DestinationSection from "@/components/ui/destination/destination";
import BackgroundBeamsWithCollision from "@/components/ui/background-beams-with-collision";
import React from "react";

const page = () => {
  return (
    <BackgroundBeamsWithCollision className='text-white  flex flex-col
    bg-[url("/assets/destination/background-destination-mobile.jpg")]
    md:bg-[url("/assets/destination/background-destination-tablet.jpg")]
     lg:bg-[url("/assets/destination/background-destination-desktop.jpg")] 
     bg-no-repeat bg-cover bg-center h-auto'>
      <DestinationSection />
    </BackgroundBeamsWithCollision>
  );
};

export default page;
