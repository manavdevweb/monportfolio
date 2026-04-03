"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative overflow-hidden">

      {/* Section principale avec background */}
      <div
        className="flex items-center w-full h-full bg-cover bg-center text-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-6 md:pl-40 pb-40 md:pb-20 flex flex-col gap-5 z-10 max-w-[750px]">
          {/* Titre principal */}
          <h1 className="text-[32px] md:text-[50px] text-white font-semibold">
            Tout est possible à travers le
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}Développement Web
            </span>
          </h1>

          {/* Texte intro */}
          <p className="text-gray-200 hidden md:block text-left">
            Bonjour, je suis PEERTHY Manav, un passionné de programmation basé en Île-de-France.
            Débutant dans le domaine, j'aide les entreprises et particuliers à atteindre leurs objectifs
            grâce à des solutions créatives, efficaces et personnalisées.
            Mon objectif est de créer des expériences inoubliables et des résultats tangibles.
            Tu peux découvrir mes projets ci-dessous et me contacter si tu as une idée ou un projet en tête !
          </p>

          {/* Liens desktop */}
          <div className="flex-col md:flex-row hidden md:flex gap-6 mt-4">
            <Link
              href="/my-skills"
              className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] text-center"
            >
              En savoir +
            </Link>

            <Link
              href="/my-projects"
              className="rounded-[20px] border border-white hover:bg-white hover:text-blue-600 px-5 py-3 text-lg text-white max-w-[200px] text-center"
            >
              Mes Projets
            </Link>

            <Link
              href="/contact-me"
              className="rounded-[20px] border border-white hover:bg-white hover:text-blue-600 px-5 py-3 text-lg text-white max-w-[200px] text-center"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </div>

      {/* Liens mobiles en bas à droite */}
      <div className="absolute flex bottom-10 right-5 z-20 flex-col md:hidden gap-4">
        <Link
          href="/my-skills"
          className="rounded-[20px] bg-blue-500 px-5 py-3 text-lg text-white text-center"
        >
          En savoir +
        </Link>
        <Link
          href="/my-projects"
          className="rounded-[20px] border border-white px-5 py-3 text-lg text-white text-center"
        >
          Mes Projets
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] border border-white px-5 py-3 text-lg text-white text-center"
        >
          Me contacter
        </Link>
      </div>

      {/* Décorations visuelles */}
      <div className="absolute bottom-0 right-0 z-10">
        {/* Image du cheval */}
        <Image
          src="/horse.png"
          alt="horse"
          width={300}
          height={300}
          className="absolute right-[55px] top-40"
        />

        {/* Image de la falaise */}
        <Image
          src="/cliff.webp"
          alt="cliff"
          width={480}
          height={480}
        />
      </div>

      {/* Arrière-plan arbres */}
      <div className="absolute bottom-0 z-5 w-full">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-auto"
        />
      </div>

      {/* Étoiles */}
      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-10"
      />
    </main>
  );
}