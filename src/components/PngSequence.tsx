import { useEffect, useRef } from "react";

const images = [
  "/images/profile/sequence/1.webp",
  "/images/profile/sequence/2.webp",
  "/images/profile/sequence/3.webp",
  "/images/profile/sequence/4.webp",
  "/images/profile/sequence/5.webp",
  "/images/profile/sequence/6.webp",
  "/images/profile/sequence/7.webp",
];

// duration per frame (ms)
const durations = [2000, 1000, 1000, 1000, 1000, 1000, 2000];

const PngSequence = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const indexRef = useRef(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    // preload images once
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const play = () => {
      if (!imgRef.current) return;

      imgRef.current.src = images[indexRef.current];

      timerRef.current = window.setTimeout(() => {
        indexRef.current = (indexRef.current + 1) % images.length;
        play();
      }, durations[indexRef.current]);
    };

    play();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={images[0]}
      alt="Profile animation sequence"
      className="
        w-full
        max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
        h-auto
        select-none
        pointer-events-none
        will-change-[opacity]
      "
      draggable={false}
    />
  );
};

export default PngSequence;
