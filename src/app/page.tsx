import HeroSection from "@/components/ui/home/hero-section";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import React from "react";
import IPTrackerSection from "@/components/ui/home/ip-tracker-section";

interface Location {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: number;
}

interface AS {
  asn: number;
  name: string;
  route: string;
  domain: string;
  type: string;
}

export interface IPGeoLocation {
  ip: string;
  location: Location;
  domains: string[];
  as: AS;
  isp: string;
}

const Home = async () => {
  let getLocation: IPGeoLocation = {
    ip: "",
    location: {
      country: "",
      region: "",
      city: "",
      lat: 0,
      lng: 0,
      postalCode: "",
      timezone: "",
      geonameId: 0,
    },
    domains: [],
    as: {
      asn: 0,
      name: "",
      route: "",
      domain: "",
      type: "",
    },
    isp: "",
  };
  try {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${
        process.env.GEO_LOCATION_API_KEY as string
      }`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch location: ${response.status} ${response.statusText}`
      );
    }

    getLocation = (await response.json()) as IPGeoLocation;
     
    } catch (error) {// eslint-disable-line @typescript-eslint/no-unused-vars
    throw new Error("Failed to fetch location");
  }

  return (
    <>
      <BackgroundBeamsWithCollision
        className='text-whiteflex items-center flex-col justify-center 
        md:bg-[url("/assets/home/background-home-desktop.jpg")]
      bg-[url("/assets/home/background-home-mobile.jpg")]
      sm:bg-[url("/assets/home/background-home-tablet.jpg")] bg-no-repeat bg-cover bg-center'
      >
        <HeroSection />
      </BackgroundBeamsWithCollision>

      <IPTrackerSection data={getLocation} />
    </>
  );
};

export default Home;
