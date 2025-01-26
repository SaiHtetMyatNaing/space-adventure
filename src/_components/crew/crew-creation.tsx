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

const CrewSection = () => {
  return (
    <>
      <Header className="-mt-20" />
      <main className="flex items-center justify-between w-full max-w-6xl gap-2 mx-auto overflow-hidden">
        <Tabs defaultValue="mars" className="flex flex-col w-full mx-auto">
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
                <Card className="flex flex-col items-start max-w-md gap-2 text-white bg-transparent border-none ">
                  <CardHeader className="flex flex-col gap-2 h-96">
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
                  width={450}
                  height={400}
                  className="ml-12 rotating-image"
                />
              </TabsContent>
            );
          })}
        </Tabs>
      </main>
    </>
  );
};

export default CrewSection;
