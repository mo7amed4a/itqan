"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import img from '../../public/images/forCartRounded.png'
import Image from "next/image";


export default function VideoTwo({
    text,
    btn,
    lng
}:{
    text: string;
    btn: string;
    lng: string
}) {
  const containerRef = useRef(null); // للإشارة إلى الحاوية
  const imageRef = useRef(null); // للإشارة إلى الحاوية
  const [containerWidth, setContainerWidth] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
        // @ts-ignore
        setContainerWidth(containerRef.current.clientWidth);
        // @ts-ignore
      setImageWidth(imageRef.current.clientWidth);
    }

    const handleResize = () => {
      if (containerRef.current) {
      // @ts-ignore
      setContainerWidth(containerRef.current.clientWidth);
      // @ts-ignore
      setImageWidth(imageRef.current.clientWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="max-w-6xl mx-auto p-3 md:p-6 group"
    >
      <motion.div
        className="bg-gray-50 rounded-full p-3 md:p-6 flex items-center justify-between gap-8 group hover:cursor-pointer"
        style={{ direction: "rtl" }}
        whileHover="hover"
        whileFocus={"hover"}
      >
        <motion.div
          className="flex-1 space-y-2 md:space-y-6 md:group-hover:ps-[17rem] ps-4"
          variants={{
            hover: {
              x: -256,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
              },
            },
            initial: { x: 0 },
          }}
        >
          <h2 className="text-sm md:text-xl lg:text-2xl font-semibold text-gray-800">
            {text}
          </h2>
          <button className="text-sm sm:text-base md:text-lg sm:w-auto px-2 py-2 md:px-6 md:py-3 bg-primary group-hover:bg-secondary text-white rounded-lg transition-colors">
            {btn}
          </button>
        </motion.div>

        <motion.div
          className="size-24 sm:size-32 md:size-[24rem] border-8 border-white rounded-full flex-shrink-0"
          ref={imageRef}
          variants={{
            hover: {
              x: (containerWidth - (imageWidth * 1.3)), 
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
              },
            },
            initial: { x: 0 },
          }}
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-white/90">
          <Image className='rounded-full size-full border-4 md:border-8 border-primary/20' src={img} alt='video call' width={300} height={300} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}