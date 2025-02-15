'use client'

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Sun, CloudRain, CloudSnow, Cloud, Wind } from "lucide-react";
import { Button } from "../button";
import { Skeleton } from "../skeleton";


const WeatherComponent = () => {


  const getWeatherIcon = (main: string) => {
    switch (main) {
      case "Clear":
        return <Sun size={32} className="text-yellow-500" />;
      case "Rain":
        return <CloudRain size={32} className="text-blue-500" />;
      case "Snow":
        return <CloudSnow size={32} className="text-gray-400" />;
      case "Clouds":
        return <Cloud size={32} className="text-gray-500" />;
      default:
        return <Wind size={32} className="text-gray-700" />;
    }
  };

  return (
    <Card className="w-full max-w-md p-4 mx-auto mt-5">
      <CardHeader>
        <CardTitle>Weather</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Input
            placeholder="Enter city name"
          />
          <Button >Search</Button>
        </div>
        {/* {loading ? (
          <Skeleton className="w-full h-24 mt-4" />
        ) : error ? (
          <p className="mt-4 text-red-500">{error}</p>
        ) : weather ? (
          <div className="flex flex-col items-center mt-4">
            {getWeatherIcon(weather.weather[0].main)}
            <h2 className="mt-2 text-xl font-semibold">{weather.name}</h2>
            <p className="text-lg">{weather.main.temp}°C</p>
            <p className="text-sm text-gray-500">{weather.weather[0].description}</p>
          </div>
        ) : null} */}
      </CardContent>
    </Card>
  );
};

export default WeatherComponent;
