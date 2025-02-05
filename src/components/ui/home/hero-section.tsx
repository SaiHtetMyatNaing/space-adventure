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
        className=" flex flex-col items-center sm:flex-row select-none gap-4 
        md:bg-blue-200 sm:px-10 sm:justify-between sm:self-center lg:bg-green-200
        uppercase   md:justify-between md:items-center text-white h-full py-[4em] justify-between  text-center max-w-full w-full lg:px-[10em]"
      >
        <div className="flex flex-col items-start justify-start gap-4 p-2 mt-12 md:mt-0 md:p-0 md:max-w-2xl">
          <h1 className="tracking-[0.3em] max-w-full w-full">So, You want to go to</h1>
          <h2 className="text-[7em] -mt-10">Space</h2>
          <p className="normal-case max-w-[19.5em] w-full text-center md:text-justify">
            Let&apos;s face: the future is here. The stars are aligned.
            We&apos;re on the right path. We&apos;re going to make it. And
            we&apos;re going to do it together.
          </p>
        </div>

        <Link
          href="/adventure"
          className="flex items-center justify-center text-lg text-center text-black bg-white rounded-full w-36 h-36 sm:w-44 sm:h-44 md:w-64 md:h-64"
        >
          Explore
        </Link>
      </motion.section>
  );
};

export default HeroSection;
