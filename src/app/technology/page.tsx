import React from "react";
import TechSection from "@/_components/technology/tech-section";
import BackgroundBeamsWithCollision from "@/components/ui/background-beams-with-collision";

const page = () => {
  return (
    <BackgroundBeamsWithCollision className='text-white  flex gap-20 flex-col bg-[url("/assets/technology/background-technology-desktop.jpg")] bg-no-repeat bg-cover h-screen bg-center'>
      <TechSection />
    </BackgroundBeamsWithCollision>
  );
};

export default page;
