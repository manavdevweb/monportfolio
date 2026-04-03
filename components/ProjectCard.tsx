"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  text: string;
}

const ProjectCard: React.FC<Props> = ({ image, title, text }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped((prev) => !prev);
      setIsAnimating(true);
    }
  };

  return (
    <div
      onClick={handleFlip}
      className="w-[350px] md:w-[450px] h-[280px] rounded-md cursor-pointer perspective"
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setIsAnimating(false)}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Face avant */}
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="absolute w-full h-full backface-hidden bg-cover bg-center text-white rounded-lg p-4 group"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40 transition-opacity" />
          <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center justify-center z-10">
            Learn more &gt;
          </div>
        </div>

        {/* Face arrière */}
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="absolute w-full h-full backface-hidden rotateY-180 bg-cover bg-center text-white rounded-lg p-4"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-0" />
          <div className="relative flex flex-col gap-6 py-3 z-10">
            <h1 className="text-white text-2xl font-semibold">{title}</h1>
            <p className="text-gray-200 text-[18px]">{text}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
