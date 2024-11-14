import Image from "next/image";
import React from "react";

import img1 from "../../public/images/heart.png";

export default function CardSmall({
    imageUrl=img1,
    text="title"
}: {
    imageUrl?: any,
    text?: string
}
) {
  return (
    <div className="inline-block bg-white !max-w-96 text-center px-24 rounded-xl py-12 hover:scale-105 duration-300 cursor-pointer my-4 group">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={imageUrl}
          alt="alt"
          width={150}
          height={150}
          className="w-36 h-36 group-hover:scale-105 duration-300"
        />
        <h2 className="text-lg pt-4 md:text-xl font-bold text-gray-500 group-hover:text-primary text-wrap w-full">
          {text}
        </h2>
      </div>
    </div>
  );
}
