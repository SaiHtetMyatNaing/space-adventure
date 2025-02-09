import React from "react";
import TechSection from "@/components/ui/technology/tech-section";
import BackgroundBeamsWithCollision from "@/components/ui/background-beams-with-collision";

const page = () => {
  return (
    <BackgroundBeamsWithCollision className='text-white  flex items-center justify-center  flex-col bg-[url("/assets/technology/background-technology-desktop.jpg")] h-screen bg-no-repeat bg-cover  bg-center'>
      <TechSection />
    </BackgroundBeamsWithCollision>
  );
};

export default page;
