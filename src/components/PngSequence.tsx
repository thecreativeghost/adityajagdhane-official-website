import React, { useEffect, useState } from "react";

const images = [
  "/images/profile/sequence/1.png",
  "/images/profile/sequence/2.png",
  "/images/profile/sequence/3.png",
  "/images/profile/sequence/4.png",
  "/images/profile/sequence/5.png",
  "/images/profile/sequence/6.png",
  "/images/profile/sequence/7.png",
];

const durations = [
  2000, // 1.png
  1000, // 2.png
  1000, // 3.png
  1000, // 4.png
  1000, // 5.png
  1000, // 6.png
  2000, // 7.png
];

const PngSequence: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, durations[index]);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <img
      src={images[index]}
      alt="Profile animation frame"
      className="w-full max-w-md h-auto select-none pointer-events-none"
    />
  );
};

export default PngSequence;
