import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";

type PhotosType = {
  logo: string;
  name: string
  slug: string
}[];
export default function Photos({
  data
}: {
  data: PhotosType;
}) {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-5 w-full gap-4 px-4 md:px-0 hover:cursor-pointer bg-transparent">
        {data.map((item, index) => (
          <Card key={index} className="bg-transparent border-none flex flex-col shadow-none items-center w-56 text-center py-7">
            <CardContent className="">
              <Image src={item.logo.split('http://').join('https://')} 
                width={500}
                height={500}
                alt="alt" className="rounded-full size-40 border-none"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
