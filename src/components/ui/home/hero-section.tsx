"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 0.5,
        }}
        className=" flex select-none   uppercase  gap-4 items-end justify-between mb-[10em] text-center max-w-full w-full px-[10em]"
      >
        <div className="flex flex-col items-start justify-start w-full max-w-2xl gap-4">
          <h1 className="tracking-[0.3em]">So, You want to go to</h1>
          <h2 className="text-[7em] -mt-10">Space</h2>
          <p className="normal-case max-w-[19.5em] w-full text-justify">
            Let&apos;s face: the future is here. The stars are aligned.
            We&apos;re on the right path. We&apos;re going to make it. And
            we&apos;re going to do it together.
          </p>
        </div>

        <Link
          href="/adventure"
          className="flex items-center justify-center w-64 h-64 text-lg text-center text-black bg-white rounded-full"
        >
          Explore
        </Link>
      </motion.section>
    </>
  );
};

export default HeroSection;
