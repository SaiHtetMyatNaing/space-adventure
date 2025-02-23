"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        duration: 0.5,
      }}
      className=" flex flex-col items-center justify-center sm:flex-row select-none gap-20 sm:gap-10
        sm:px-10 sm:justify-between sm:self-center p-4 
        uppercase md:justify-between md:items-center  text-white h-full lg:py-[4em] text-center max-w-full w-full lg:px-[10em] md:mt-[10em]"
    >
      <div className="flex flex-col items-start justify-start gap-4 p-2 md:mt-0 md:p-0 md:max-w-2xl">
        <h1 className="tracking-[0.3em] max-w-full w-full">
          So, You want to go to
        </h1>
        <h2 className="text-[7em] -mt-10">Space</h2>
        <p className="normal-case max-w-[19.5em] w-full text-center md:text-justify">
          Let&apos;s face: the future is here. The stars are aligned. We&apos;re
          on the right path. We&apos;re going to make it. And we&apos;re going
          to do it together.
        </p>
      </div>

      <Link
        href="/astro"
        className="flex items-center justify-center text-lg text-center text-black bg-white rounded-full w-44 h-44 md:w-64 md:h-64"
      >
        Explore
      </Link>
    </motion.section>
  );
};

export default HeroSection;
