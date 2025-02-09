"use client";
import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { destinations } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const CrewSection = () => {
  return (
    <main className="flex items-center justify-center w-full gap-2 px-5 mx-auto mt-20 md:mt-32 max-w-7xl">
      <Tabs
        defaultValue="mars"
        className="flex flex-col w-full gap-3 px-2 md:gap-0"
      >
        <motion.h1
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ opacity: 1, x: "0%" }}
          exit={{ opacity: 0, x: "-100%" }}
          className=" lg:p-3 text-[1em] sm:text-[1.3em]  select-none tracking-[0.3em]"
        >
          02 Meet Your Crew
        </motion.h1>
        <div className="relative min-h-[500px]">
          {destinations.map((destination) => {
            return (
              <TabsContent
                value={destination.tabValue}
                key={destination.tabValue}
                className="flex flex-col items-center justify-between h-full max-w-6xl gap-3 md:flex-row"
              >
                <Card className="flex flex-col max-w-md gap-2 text-white bg-transparent border-none md:items-start">
                  <CardHeader className="flex flex-col items-center gap-2 md:items-start">
                    <CardTitle className="text-[2.3em] font-extralight text-white/60 uppercase tracking-wider">
                      {destination.name}
                    </CardTitle>
                    <CardTitle className="text-[3em] font-extralight text-white uppercase tracking-wider">
                      {destination.name}
                    </CardTitle>
                    <CardContent className="-ml-5 text-center  md:text-justify min-h-[100px]">
                      <p>{destination.description}</p>
                    </CardContent>
                  </CardHeader>
                </Card>

                <TabsList className="flex items-center self-center justify-center w-full max-w-md gap-3 bg-transparent md:hidden md:justify-start md:self-start">
                  {destinations.map((destination) => (
                    <TabsTrigger
                      key={destination.tabValue}
                      value={destination.tabValue}
                      className="w-3 rounded-full cursor-pointer md:w-5 md:h-5 bg-white/60"
                    ></TabsTrigger>
                  ))}
                </TabsList>

                <Image
                  src={destination.image.src}
                  alt={destination.image.alt}
                  width={450}
                  height={400}
                  className="w-56 h-56 md:ml-12 md:order-2 order-1 mt-1 rotating-image md:w-[20em] max-h-[26em] max-w-[26em] md:h-[20em] lg:w-[26em] lg:h-[26em] flex-shrink-0"
                />
              </TabsContent>
            );
          })}

          <TabsList className="items-center self-center justify-center hidden max-w-md gap-3 bg-transparent md:flex sw-full md:justify-start md:self-start">
            {destinations.map((destination) => (
              <TabsTrigger
                key={destination.tabValue}
                value={destination.tabValue}
                className="w-5 h-5 rounded-full cursor-pointer bg-white/60"
              ></TabsTrigger>
            ))}
          </TabsList>
        </div>
      </Tabs>
    </main>
  );
};

export default CrewSection;
