"use client";
import Link from "next/link";
import React from "react";

const Header = () => {
  const menuList = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Destinations", href: "/destination" },
    { id: 3, name: "Crew", href: "/crew" },
    { id: 4, name: "Technology", href: "/technology" },
  ];
  return (
    <header className="w-full flex items-center justify-end py-14">
      <ul className="flex w-full  items-center text-sm px-1 gap-x-16 h-16 justify-start bg-white/10 backdrop-blur-md max-w-3xl">
        <span></span>
        {menuList.map((item) => (
          <li key={item.id} className="flex items-center gap-x-2 uppercase">
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
