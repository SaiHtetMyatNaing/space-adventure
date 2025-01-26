"use client";
import Link from "next/link";
import React from "react";

const Header = ({className}: {className?: string}) => {
  const menuList = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Destinations", href: "/destination" },
    { id: 3, name: "Crew", href: "/crew" },
    { id: 4, name: "Technology", href: "/technology" },
  ];
  return (
    <header className={`flex items-center justify-end w-full  ${className}`}>
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
    </header>
  );
};

export default Header;
