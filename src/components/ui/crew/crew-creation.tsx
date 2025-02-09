"use client";
import Image from "next/image";
import React from "react";
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
import { motion } from "framer-motion";

const CrewSection = () => {
  return (
     
      <main className="flex items-center justify-between w-full max-w-6xl gap-2 mx-auto overflow-hidden">
        <Tabs defaultValue="mars" className="flex flex-col w-full mx-auto">
          <motion.h1 
          initial={{ x : '-100%' , opacity : 0 }}
          animate={{ opacity: 1, x: '0%' }}
          exit={{ opacity: 0, x: '-100%' }}
          className="ml-6 text-[1.3em] tracking-[0.3em]">
            02 Meet Your Crew
          </motion.h1>

          {destinations.map((destination) => {
            return (
              <motion.div
              key={destination.tabValue}
              className="w-full h-full max-w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                duration: 0.5 
              }}
            >
              <TabsContent
                value={destination.tabValue}
                key={destination.tabValue}
                className="flex items-center justify-between max-w-6xl"
              >
                <Card className="flex flex-col items-start max-w-md gap-2 text-white bg-transparent border-none ">
                  <CardHeader className="flex flex-col gap-2">
                    <CardTitle className="text-[2.3em] font-extralight text-white/60 uppercase tracking-wider">
                      {destination.name}
                    </CardTitle>
                    <CardDescription className="text-[3em] text-white">
                      {destination.name}
                    </CardDescription>
                    <CardContent className="-ml-5">
                      <p>{destination.description}</p>
                    </CardContent>
                  </CardHeader>

                  <CardFooter className="flex self-start justify-between w-full max-w-full py-2">
                    <TabsList className="flex items-center self-start justify-start w-full max-w-md gap-3 bg-transparent">
                      {destinations.map((destination) => (
                        <TabsTrigger
                          key={destination.tabValue}
                          value={destination.tabValue}
                          className="w-5 h-5 rounded-full cursor-pointer bg-white/10"
                        ></TabsTrigger>
                      ))}
                    </TabsList>
                  </CardFooter>
                </Card>

                <Image
                  src={destination.image.src}
                  alt={destination.image.alt}
                  width={420}
                  height={400}
                  className="ml-12 rotating-image"
                />
              </TabsContent>
              </motion.div>
            );
          })}
        </Tabs>
      </main>
  );
};

export default CrewSection;
