import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        {/*  Le logo ici */}
        <div className="relative">
           <Image
            src="/mlogo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
          /> 
        </div>
        {/*  Fin du logo  */}

        {/*Change du texte ici stv  */}
        <h1 className="text-white text-[25px] font-semibold">
          Mon Portofolio{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            PEERTHY Manav {" "}
          </span>
        </h1>
        {/*Change du texte ici stv  */}

      </div>

      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={28}
            height={28}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;