import React from "react";
import Link from "next/link";
import Header from "../header";

const HeroSection = () => {
  return (
    <>
      <Header className="mt-12"/>
      <section className=" flex select-none   uppercase  gap-4 items-end justify-between mb-[10em] text-center max-w-full w-full px-[10em]">
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
          href="/"
          className="flex items-center justify-center w-64 h-64 text-lg bg-white rounded-full"
        >
          <span className="text-black  text-[1.3em]">Explore</span>
        </Link>

      </section>
      </>
  );
};

export default HeroSection;
