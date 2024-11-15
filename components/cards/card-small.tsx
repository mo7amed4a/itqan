import Image from "next/image";
import React from "react";

import img1 from "../../public/images/heart.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
      <Card className="inline-block aspect-square w-full h-full hover:scale-105 duration-300 cursor-pointer my-4 group">
        <CardHeader className="flex justify-center items-center">
        <Image
            src={imageUrl}
            alt="alt"
            width={150}
            height={150}
            className="w-36 h-36 group-hover:scale-105 duration-300"
          />
        </CardHeader>
        <CardContent className="w-full text-center">
          <CardTitle className="text-lg  pt-4 md:text-xl font-bold text-gray-500 group-hover:text-primary text-wrap w-full">{text}</CardTitle>
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
