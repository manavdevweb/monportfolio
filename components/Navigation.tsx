"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";

const Navigation = () => {
  const [isRouting, setIsRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <>
      {/* Barre de navigation centrée et large */}
      <div className="fixed z-[50] bottom-6 w-[80%] md:w-[50%] rounded-full flex justify-between items-center border bg-black border-white px-6 py-5 left-1/2 transform -translate-x-1/2">
        {NavLinks.map((nav) => (
          <Link key={nav.name} href={nav.link} className="flex justify-center min-w-[20%]">
            <nav.icon
              className={`w-[28px] h-[28px] ${
                path === nav.name ? "text-purple-800" : "text-white"
              }`}
            />
          </Link>
        ))}
      </div>

      {/* Animation plein écran lors du routing */}
      {isRouting && (
        <div className="fixed inset-0 z-[60]">
          <Transition />
        </div>
      )}
    </>
  );
};

export default Navigation;