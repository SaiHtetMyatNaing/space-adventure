"use client";
import Image from "next/image";
import { motion } from "framer-motion";
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

const TechSection = () => {
  return (
    <motion.main
      className="flex items-center justify-center w-full max-w-6xl p-3 mx-auto md:mt-44"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Tabs
        defaultValue="mars"
        className="flex flex-col justify-between w-full gap-4 mx-auto"
      >
        <h1 className="ml-6 text-[1.3em] tracking-[0.3em]">03 Technology</h1>
        <div className="relative min-h-[500px] h-full">
          {destinations.map((destination) => (
            <TabsContent
              value={destination.tabValue}
              key={destination.tabValue}
              className="flex flex-col items-center justify-between h-full max-w-6xl md:flex-row"
            >
              <Card className="flex flex-col items-center order-2 max-w-xl text-white bg-transparent border-none md:order-1 md:flex-row">

                <CardHeader className="items-center order-2 max-w-full py-2 md:order-1w-full md:flex-row">
                  <TabsList className="flex flex-row w-full h-full max-w-sm gap-3 bg-transparent md:flex-col">
                    {destinations.map((_, index) => (
                      <TabsTrigger
                        key={_.tabValue}
                        value={_.tabValue}
                        className="w-5 h-5 rounded-full cursor-pointer bg-white/10"
                      >
                        {index + 1}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </CardHeader>

                <CardFooter className="flex flex-col items-center md:items-start md:order-2 h-76">
                  <CardTitle className="text-[2.3em] font-extralight text-white/60 uppercase tracking-wider">
                    {destination.name}
                  </CardTitle>
                  <CardDescription className="text-[3em] text-white">
                    {destination.name}
                  </CardDescription>
                  <CardContent className="-ml-5 text-center md:text-justify">
                    <p>{destination.description}</p>
                  </CardContent>
                </CardFooter>

              </Card>

              <motion.div
                className="flex flex-col items-center justify-center order-1 gap-10 md:order-2"
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
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </motion.main>
  );
};

export default TechSection;
