import Image from "next/image";
import React from "react";

import img1 from "../../public/images/heart.png";
import { Card, CardHeader, CardTitle } from "../ui/card";

export default function CardSmall({
  imageUrl = img1,
  text = "title",
  services=false
}: {
  imageUrl?: any;
  text?: string;
  services?: boolean
}) {
  return (
    <>
      <Card className="flex w-full border-none shadow-none hover:shadow h-full py-4 px-3 hover:scale-105 duration-300 cursor-pointer md:my-4 group flex-col justify-center">
        <CardHeader className="flex justify-center text-center items-center h-full space-y-10 p-0">
          <Image
            src={imageUrl.split("http://").join("https://")}
            alt="alt"
            width={500}
            height={500}
            className="size-16 md:size-36 group-hover:scale-105 duration-300"
          />
          <CardTitle className={`text-gray-500 group-hover:text-primary text-wrap w-full text-base md:text-2xl  ${services ? "font-normal" : "font-bold"}`}>
            {text}
          </CardTitle>
        </CardHeader>
      </Card>
    </>
  );
}
