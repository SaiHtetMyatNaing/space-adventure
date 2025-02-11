"use client";
import React, { useEffect } from "react";
import { Card, CardContent, CardHeader } from "../card";
import dynamic from "next/dynamic";
import { IPGeoLocation } from "@/lib/types/geo-location";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Cover } from "../cover";

const MapSection = dynamic(() => import("./map"), {
  ssr: false,
  loading: () => <div className="h-[40em] loader">:oading....</div>,
});

const IPTrackerSection = ({ data }: { data: IPGeoLocation }) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (data.query.length > 0) {
      const params = new URLSearchParams(searchParams);
      if (data.query.length > 0) {
  
        params.set("ip",  data.query);
  
        if (data.city) {
          params.set("location", data.country);
        }
        if (data.timezone) {
          params.set("timezone", data.timezone);
        }
        if (data.isp) {
          // If 'ips' is an array, you might want to join them into a string
          params.set("ips", data.isp); // Example: comma-separated
        }
        replace(`${pathname}?${params.toString()}`  , {scroll: false});
      }}
  } , [])
    

  return (
    <div className="w-full max-w-full mx-auto">
      <div className='flex flex-col items-center justify-center w-full overflow-hidden cursor-pointer md:gap-4 md:py-4'>

        <Card className="w-full max-w-[20em] md:max-w-4xl bg-transparent border-none text-white z-[2000]">
          <CardHeader className="bg-transparent">
          <h1 className="text-[2em] text-center md:text-[3em] ">
            <Cover className="text-white">IP Address Tracker</Cover>
          </h1>
    
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center w-full max-w-md gap-4 py-4 overflow-hidden md:justify-between md:gap-0 md:max-w-full md:flex-row">
            <div className="flex flex-col items-center border-white/20  justify-between w-full max-w-[14em] gap-3 md:border-r-2 px-2">
              <span className="font-light text-white/40">IP Adress</span>
              <span className="font-light">{data.query}</span>
            </div>
            <div className="flex flex-col items-center border-white/20 justify-between w-full max-w-[14em] gap-3 md:border-r-2 px-2">
              <span className="font-light text-white/40">Location</span>
              <span className="font-light">{data.city}</span>
            </div>

            <div className="flex flex-col items-center border-white/20 justify-between w-full max-w-[14em] gap-3 md:border-r-2 px-2">
              <span className="font-light text-white/40">Timezone</span>
              <span className="font-light">{data.timezone}</span>
            </div>

            <div className="flex flex-col items-center border-white/20 justify-between w-full max-w-[14em] gap-3  px-2">
              <span className="font-light text-white/40">ISP</span>
              <span className="font-light">{data.isp}</span>
            </div>
          </CardContent>
        </Card>
      </div>
     {data.lat && data.lon && <MapSection data={data} />}
    </div>
  );
};

export default IPTrackerSection;
