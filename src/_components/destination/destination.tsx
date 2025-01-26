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
import Header from "../header";
import { motion } from "framer-motion";
const DestinationSection = () => {
  return (
    <>
      <Header className="-mt-9"/>

      <main className="flex items-center justify-between w-full max-w-6xl gap-4 mx-auto overflow-hidden">
        <Tabs defaultValue="mars" className="flex flex-col w-full mx-auto">
          <h1 className="text-[1.3em] tracking-[0.3em]">
            01 Pick Your Destination
          </h1>

          <div className="flex w-full max-w-full justify-center ml-[17em]">
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

<motion.div
              className="w-full h-full max-w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                duration: 0.5 
              }}
            >
                <Image
                  src={destination.image.src}
                  alt={destination.image.alt}
                  width={450}
                  height={400}
                  className="ml-12 rotating-image"
                />
                </motion.div>

                <Card className="flex flex-col items-start max-w-md gap-3 text-white bg-transparent border-none">
                  <CardHeader>
                    <CardTitle className="text-center text-[7em]">
                      {destination.name}
                    </CardTitle>
                    <CardDescription className="hidden text-justify ">
                      {destination.name}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="h-32 overflow-hidden text-justify">
                    <p>{destination.description}</p>
                  </CardContent>

                  <CardFooter className="flex items-center justify-between w-full max-w-full py-2 border-t-2 border-white/10">
                    <div>
                      <h2> AVG. Distance</h2>
                      <p className="text-justify text-[2em]">
                        {destination.averageDistance}
                      </p>
                    </div>
                    <div>
                      <h2> EST. Travel Time</h2>
                      <p className="text-justify text-[2em]">
                        {destination.averageTravelTime}
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>
              </motion.div>
            );
          })}
        </Tabs>

      </main>
    </>
  );
};

export default DestinationSection;
