import React, { useEffect, useState } from "react";

const images = [
  "/images/profile/sequence/1.webp",
  "/images/profile/sequence/2.webp",
  "/images/profile/sequence/3.webp",
  "/images/profile/sequence/4.webp",
  "/images/profile/sequence/5.webp",
  "/images/profile/sequence/6.webp",
  "/images/profile/sequence/7.webp",
];

const durations = [
  2000, // 1.webp
  1000, // 2.webp
  1000, // 3.webp
  1000, // 4.webp
  1000, // 5.webp
  1000, // 6.webp
  2000, // 7.webp
];

const PngSequence: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, durations[index]);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <img
      key={index} // 🔥 VERY IMPORTANT
      src={images[index]}
      alt="Profile animation frame"
      className="
        w-full
        max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
        h-auto
        select-none
        pointer-events-none
        transition-opacity
        duration-300
        ease-in-out
      "
      loading="eager"
      draggable={false}
    />
  );
};

export default PngSequence;
