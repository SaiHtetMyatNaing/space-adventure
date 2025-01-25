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

const DestinationSection = () => {
  return (
    <main className="flex justify-between max-w-6xl gap-4 items-center w-full mx-auto overflow-hidden">
      <Tabs  defaultValue="mars" className="flex flex-col w-full mx-auto">
        <h1 className="text-[1.3em] tracking-[0.3em]">01 Pick Your Destination</h1>

        <div className="flex w-full max-w-full justify-center ml-[17em]">
        <TabsList className="bg-transparent justify-self-end  flex max-w-sm">
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
              className="flex justify-between items-center max-w-6xl"
            >
              <Image
                src={destination.image.src}
                alt={destination.image.alt}
                width={450}
                height={400}
                className="ml-12"
              />

              <Card className="max-w-md gap-3 flex items-start flex-col bg-transparent text-white border-none">
                <CardHeader>
                  <CardTitle className="text-center text-[7em]">
                    {destination.name}
                  </CardTitle>
                  <CardDescription className="text-justify hidden ">
                    {destination.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{destination.description}</p>
                </CardContent>
                <CardFooter className="border-t-2  py-2 flex justify-between items-center border-white/10 max-w-full w-full">
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
          );
        })}
      </Tabs>
    </main>
  );
};

export default DestinationSection;
