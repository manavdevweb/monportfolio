"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
    >
      <div className="flex flex-col gap-10 max-w-[90%] text-center items-center px-4">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-white text-[30px] md:text-[50px]">
            Parcours{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              & Compétences
            </span>
          </h1>

          <p className="text-gray-400 text-[16px] md:text-[20px]">
            Qui suis-je ?
          </p>

          <p className="text-white text-[14px] md:text-[16px]">
            Comme vu précédemment, je m'appelle PEERTHY Manav et je développe
            mes compétences dans le domaine de l'informatique. Je me consacre à
            créer des solutions innovantes qui aident les entreprises ou
            particuliers à se développer et à atteindre leurs objectifs grâce à
            des designs, des sites web. Après avoir obtenu mon baccalauréat
            général et technologique en ayant comme spécialité l'anglais et
            l'informatique, j'ai décidé d'effectuer des formations dans le
            domaine de l'informatique, notamment un BTS SIO SLAM qui est
            spécialisé dans le développement WEB et 6 mois de formation au sein
            d'un organisme nommé START ZUP.
          </p>

          <div className="text-white text-[14px] md:text-[16px]">
            Ces expériences m'ont permis de perfectionner mes compétences
            techniques tout en développant un véritable sens de l'écoute.
          </div>

          <div className="text-white text-[14px] md:text-[16px]">
            Ce qui me distingue, c'est ma capacité à comprendre les besoins
            uniques de mes clients et à créer des solutions sur mesure qui ne
            sont pas seulement esthétiques, mais aussi fonctionnelles et
            orientées résultats. Je m'investis à 100% dans chaque mission pour
            garantir la satisfaction de mes clients.
          </div>

          <p className="text-white text-[14px] md:text-[16px]">
            En espérant pouvoir vous être utile, voici ci-joint un résumé de
            mes compétences :
          </p>
        </div>

        <Swiper
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="w-full"
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}
                />
                <p className="mt-2 text-center text-white">{skill.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Page;
