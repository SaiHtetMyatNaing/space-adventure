"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Header = ({ className }: { className?: string }) => {
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
      className={`flex items-center justify-end w-full ${className}`}
      animate="visible"
      exit="exit"
      variants={headerVariants}
      transition={{ duration: 0.5 }} // Adjust duration as needed
    >
      <ul className="flex items-center justify-start w-full h-16 max-w-3xl text-sm gap-x-16 bg-white/10 backdrop-blur-md">
        <span></span>
        {menuList.map((item) => (
          <li key={item.id} className="flex items-center uppercase gap-x-2">
            <span>0{item.id - 1}</span>
            <Link href={item.href} className="text-white">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.header>
  );
};

export default Header;
