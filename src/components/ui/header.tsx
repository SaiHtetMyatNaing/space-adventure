"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  const menuList = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Destinations", href: "/destination" },
    { id: 3, name: "Crew", href: "/crew" },
    { id: 4, name: "Technology", href: "/technology" },
  ];

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, x: '100%' }, // Start off-screen to the right
    visible: { opacity: 1, x: '0%' , duration :7 },   // Move to original position
    exit: { opacity: 0, x: '-100%' }, 
 
  };

  return (
    <motion.header
      className="absolute right-0 z-10 w-full max-w-2xl top-10"
      animate="visible"
      exit="exit"
      variants={headerVariants}
      transition={{ duration: 0.5 }} // Adjust duration as needed
    >
      <ul className="flex items-center justify-between w-full h-16 text-sm bg-white/10 gap-30 backdrop-blur-md">
        <span></span>
        {menuList.map((item) => (
          <li key={item.id} className="flex items-center text-white uppercase gap-x-2">
            <span>0{item.id - 1}</span>
            <Link href={item.href} className="text-white">
              {item.name}
            </Link>
          </li>
        ))}
        <span></span>
      </ul>
    </motion.header>
  );
};

export default Header;
