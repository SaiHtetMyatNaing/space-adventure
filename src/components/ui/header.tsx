"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { MenuIcon} from "lucide-react";

const Header = () => {
  const menuList = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Destinations", href: "/destination" },
    { id: 3, name: "Crew", href: "/crew" },
    { id: 4, name: "Technology", href: "/technology" },
  ];

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, x: "100%" }, // Start off-screen to the right
    visible: { opacity: 1, x: "0%", duration: 7 }, // Move to original position
    exit: { opacity: 0, x: "-100%" },
  };

  return (
    <motion.header
      className="absolute right-0 z-10 w-full max-w-2xl top-10"
      animate="visible"
      exit="exit"
      variants={headerVariants}
      transition={{ duration: 0.5 }} // Adjust duration as needed
    >
      <ul className="items-center justify-between hidden w-full h-16 text-sm md:flex bg-white/10 gap-30 backdrop-blur-md">
        <span></span>
        {menuList.map((item) => (
          <li
            key={item.id}
            className="flex items-center text-white uppercase gap-x-2"
          >
            <span>0{item.id - 1}</span>
            <Link href={item.href} className="text-white">
              {item.name}
            </Link>
          </li>
        ))}
        <span></span>
      </ul>

      <Sheet>
        <SheetTrigger className="block md:hidden z-[1000]  backdrop-blur-md bg-white/10  self-end justify-self-end p-2 mr-5 md:mr-10 border-none">
          <MenuIcon className="text-white" />
        </SheetTrigger>

        <SheetContent className="flex flex-col items-center w-full max-w-sm border-none bg-white/10 backdrop-blur-lg">
          <SheetHeader className="mt-20">
             <SheetTitle className="hidden">Navigation Bar</SheetTitle>
              <SheetDescription className="flex flex-col  items-start justify-between w-full max-h-[30em] h-[20em] text-sm">
                {menuList.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col items-start text-white uppercase gap-x-2"
                  >
                    <Link href={item.href}>
                      {item.name}
                    </Link>
                  </li>
                ))}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </motion.header>
  );
};

export default Header;
