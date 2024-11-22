import Image from "next/image";
import React from "react";

import img1 from "../../public/images/heart.png";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function CardSmall({
  imageUrl = img1,
  text = "title",
}: {
  imageUrl?: any;
  text?: string;
}) {
  return (
    <>
      <Card className="flex w-full h-full py-4 px-3 hover:scale-105 duration-300 cursor-pointer md:my-4 group flex-col justify-center">
        <CardHeader className="flex justify-center items-center p-0">
        <Image
            src={imageUrl.split('http://').join('https://')}
            alt="alt"
            width={150}
            height={150}
            className="size-16 md:size-24 group-hover:scale-105 duration-300"
          />
        </CardHeader>
        <CardContent className="w-full text-center p-0 h-full flex items-center">
          <CardTitle className="text-base md:text-xl font-bold text-gray-500 group-hover:text-primary text-wrap w-full">{text}</CardTitle>
          {/* <CardDescription>{text}</CardDescription> */}
        </CardContent>
      </Card>
      {/* <div className="inline-block bg-white !max-w-96 text-center px-24 rounded-xl py-12 hover:scale-105 duration-300 cursor-pointer my-4 group">
        <div className="flex flex-col justify-center items-center">
          
          <h2 className="text-lg pt-4 md:text-xl font-bold text-gray-500 group-hover:text-primary text-wrap w-full">
            {text}
          </h2>
        </div>
      </div> */}
    </>
  );
}
