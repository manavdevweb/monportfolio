"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      {/*Premier div qui englobe tout le code  */}
      <div className="flex items-center w-full h-full bg-cover bg-center text-center" style={{backgroundImage: "url(/main-bg.webp)" }}>
      <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">

      {/*Texte d'introduction a la page  */}

        <h1 className="text-[50px] text-white font-semibold">
        Tout est possible a travers le
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
        {" "}
         Développement Web
        </span>
        </h1>
        <p className="text-gray-200 hidden md:block">
            Bonjour, je suis PEERTHY Manav, un passioné de programmation basé en ILE DE FRANCE. 
            Débutant dans le domaine j'aide les entreprises et les particuliers à atteindre leurs objectifs grâce à des solutions créatives, efficaces et personnalisées.
            Mon objectif est de créer des expériences inoubliables et de résultats tangibles. 
            Tu peux découvrir mes projets ci-dessous et me contacter si tu as une idée ou un projet en tête ! 
          </p>

      {/*Fin du texte d'introduction a la page  */}
      <div className="flex-col md:flex-row hidden md:flex gap-20 ">
      {/* Lien LEARN MORE sur la page  */}
      <Link href="/my-skills" className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
          En savoir +
      </Link>
      {/* FIN du lien LEARN MORE  */}

      {/* Lien MY PROJECTS sur la page  */}
      <Link href="/my-projects" className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
      <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
         Mes Projets
      </Link>
      {/* FIN du lien MY PROJECTS  */}

      {/* Lien Contact me sur la page  */}
      <Link href="/contact-me" className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
      <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
         Me contacter
      </Link>
      {/* FIN du lien Contact me  */}


      </div>

      </div>

      </div>
      {/* Fin du premier div qui englobe tout le code  */}


      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Learn more
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contact me
        </Link>
      </div>

{/* Conteneur principal positionné en bas à droite de son parent */}
<div className="absolute bottom-0 right-0 z-[10]">

  {/* Image du cheval, positionnée de manière absolue */}
  <Image
    src="/horse.png"               // Chemin vers l’image du cheval
    alt="horse"                    // Texte alternatif (important pour l’accessibilité)
    height={300}                   // Hauteur de l’image
    width={300}                    // Largeur de l’image
    className="absolute right-55 top-40" // Positionnement personnalisé du cheval dans le conteneur
  />

  {/* Image de la falaise, en dessous du cheval dans l’ordre du DOM */}
  <Image
    src="/cliff.webp"              // Chemin vers l’image de la falaise
    alt="cliff"                    // Texte alternatif pour la falaise
    width={480}                    // Largeur de l’image
    height={480}                   // Hauteur de l’image
  />

</div>

'use client';



<div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />


    </main>
  );
}
