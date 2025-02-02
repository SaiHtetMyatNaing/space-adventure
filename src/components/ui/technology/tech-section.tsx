"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Import motion
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { destinations } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TechSection = () => {
  // Animation variants for the pop-up effect
  const popUpVariants = {
    hidden: { opacity: 0, scale: 0.8 }, // Start hidden and scaled down
    visible: { opacity: 1, scale: 1 },   // Fully visible and at normal scale
  };

  return (
    <>
  
      <motion.main
        className="flex items-center justify-center w-full max-w-6xl mx-auto overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={popUpVariants}
        transition={{ duration: 0.5 }} // Adjust duration as needed
      >
        <Tabs defaultValue="mars" className="flex flex-col justify-between w-full mx-auto">
          <h1 className="ml-6 text-[1.3em] tracking-[0.3em]">
            02 Meet Your Crew
          </h1>

          {destinations.map((destination) => {
            return (
              <TabsContent
                value={destination.tabValue}
                key={destination.tabValue}
                className="flex items-center justify-between max-w-6xl"
              >
                <Card className="flex items-center max-w-xl text-white bg-transparent border-none ">
                  <CardHeader className="flex items-start justify-start w-full max-w-full py-2">
                    <TabsList className="flex flex-col items-start justify-center w-full h-full max-w-sm gap-3 bg-transparent">
                      {destinations.map((destination, index) => (
                        <TabsTrigger
                          key={destination.tabValue}
                          value={destination.tabValue}
                          className="w-5 h-5 rounded-full cursor-pointer bg-white/10"
                        >
                          {index + 1}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </CardHeader>
                  <CardFooter className="flex flex-col items-start h-76">
                    <CardTitle className="text-[2.3em] font-extralight text-white/60 uppercase tracking-wider">
                      {destination.name}
                    </CardTitle>
                    <CardDescription className="text-[3em] text-white">
                      {destination.name}
                    </CardDescription>
                    <CardContent className="-ml-5">
                      <p>{destination.description}</p>
                    </CardContent>
                  </CardFooter>
                </Card>

                <Image
                  src={destination.image.src}
                  alt={destination.image.alt}
                  width={400}
                  height={400}
                  className="ml-12 rotating-image"
                />
              </TabsContent>
            );
          })}
        </Tabs>
      </motion.main>
    </>
  );
};

export default TechSection;
