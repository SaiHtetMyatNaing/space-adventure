"use client";
import React from "react";
import { Input } from "../input";
import { Card, CardContent } from "../card";
import dynamic from "next/dynamic";
import { IPGeoLocation } from "@/app/page";

const MapSection = dynamic(() => import("./map"), {
  ssr: false,
});

const IPTrackerSection = ({ data }: { data: IPGeoLocation }) => {
  return (
    <>
      <div className='bg-[url("/assets/ip-tracker/pattern-bg-desktop.png")] cursor-pointer flex items-center justify-between py-4 flex-col w-full  h-[20em] bg-cover bg-no-repeat'>
        <div className="flex flex-col items-center justify-between w-full max-w-lg gap-4 mx-auto">
          <h1 className="text-[3em] text-white">IP Address Tracker</h1>
          <Input
            className="w-full max-w-sm bg-white"
            placeholder="Search for any IP address or domain"
          />
        </div>

        <Card className="w-full max-w-5xl ">
          <CardContent className="flex items-center justify-between w-full max-w-full py-4 overflow-hidden">
            <div className="flex flex-col items-start justify-between w-full max-w-[14em] gap-3 border-r-2 px-2">
              <span className="font-medium">IP Adress</span>
              <span>{data.ip}</span>
            </div>
            <div className="flex flex-col items-start justify-between w-full max-w-[14em] gap-3 border-r-2 px-2">
              <span className="font-medium">Location</span>
              <span>{data.location.city}</span>
            </div>

            <div className="flex flex-col items-start justify-between w-full max-w-[14em] gap-3 border-r-2 px-2">
              <span className="font-medium">Timezone</span>
              <span>{data.location.timezone}</span>
            </div>

            <div className="flex flex-col items-start justify-between w-full max-w-[14em] gap-3  px-2">
              <span className="font-medium">ISP</span>
              <span>{data.isp}</span>
            </div>
          </CardContent>
        </Card>
      </div>
      <MapSection data={data} />
    </>
  );
};

export default IPTrackerSection;
