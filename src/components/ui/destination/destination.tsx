"use client";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { destinations } from "@/lib/data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { motion } from "framer-motion";
const DestinationSection = () => {
  return (
    <main className="flex items-center justify-center w-full gap-2 p-4 mx-auto md:px-0 max-w-7xl">
      <Tabs
        defaultValue="mars"
        className="flex flex-col w-full gap-4 mt-4 md:mt-0"
      >
        <h1 className="px-10 lg:p-3 text-[1em] sm:text-[1.3em] mt-10 select-none  tracking-[0.3em]">
          01 Pick Your Destination
        </h1>

        <div className="justify-center hidden w-full max-w-full md:flex">
          <TabsList className="flex max-w-sm bg-transparent ml-[14em]">
            {destinations.map((destination) => (
              <TabsTrigger
                key={destination.tabValue}
                value={destination.tabValue}
                className="cursor-pointer"
              >
                {destination.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {destinations.map((destination) => {
          return (
            <TabsContent
              value={destination.tabValue}
              key={destination.tabValue}
              className="w-full h-full"
            >
              <div
                className="flex flex-col items-center justify-between max-w-6xl gap-10 md:flex-row"
              >
                <motion.div
                  className="flex flex-col items-center justify-center gap-10"
                  initial={{ scale: 0.7 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <Image
                    src={destination.image.src}
                    alt={destination.image.alt}
                    width={450}
                    height={400}
                    className="w-56 h-56 md:ml-12 rotating-image md:w-[20em] max-h-[26em] max-w-[26em] md:h-[20em] lg:w-[26em] lg:h-[26em]"
                  />
                </motion.div>

                <div className="flex justify-center w-full max-w-full -mb-4 md:hidden">
                  <TabsList className="flex max-w-sm bg-transparent justify-self-end">
                    {destinations.map((destination) => (
                      <TabsTrigger
                        key={destination.tabValue}
                        value={destination.tabValue}
                        className="cursor-pointer"
                      >
                        {destination.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                <Card className="flex flex-col max-w-lg gap-3 px-3 text-white bg-transparent border-2 border-none md:max-w-md">
                  <CardHeader className="self-center py-0 overflow-hidden md:px-6 md:self-start">
                    <CardTitle className="text-center text-[3em]  md:text-[4em] lg:text-[6em]">
                      {destination.name}
                    </CardTitle>
                 
                  </CardHeader>

                  <CardContent className="text-center   md:text-justify min-h-[100px]">
                    <p>{destination.description}</p>
                  </CardContent>

                  <CardFooter className="flex flex-col items-center justify-between self-center max-w-[22em] gap-3 py-5  border-t border-white md:py-2 md:max-w-full w-full md:border-t-2 md:border-white/10 md:gap-0 md:flex-row">
                    <div className="text-center md:text-justify">
                      <h2> AVG. Distance</h2>
                      <p className=" text-[2em]">
                        {destination.averageDistance}
                      </p>
                    </div>
                    <div className="text-center md:text-justify">
                      <h2> EST. Travel Time</h2>
                      <p className=" text-[2em]">
                        {destination.averageTravelTime}
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </main>
  );
};

export default DestinationSection;
