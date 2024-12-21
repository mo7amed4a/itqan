import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useTranslation } from "@/i18n";
import { dir } from "i18next";
import Image from "next/image";
import React from "react";

export default async function CardConfessions({
  university,
  lng,
}: {
  university: any;
  lng: string;
}) {
  const { t } = await useTranslation(lng, "university_details");
  return (
    <div className="container lg:max-w-[85vw] mx-auto px-4 py-10 mt-10 rounded-md">
      <h2 className="text-lg md:text-xl font-bold my-10">
        {t("university.confessions")}
      </h2>
      <ScrollArea className="w-full whitespace-nowrap"  dir={dir(lng)}>
        <div className="flex w-max gap-x-4 p-4 lg:w-9/12 mx-auto lg:grid lg:grid-cols-3 gap-5">
          {university.confessions.map((item: any, index: number) => (
            <Card
              key={index + 11752}
              className="size-40 lg:size-auto px-10 py-20 group flex items-center justify-center transition-all duration-300 hover:shadow-lg bg-white cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={900}
                height={900}
                className="object-contain w-40 h-24 group-hover:scale-110 duration-300 transition-all"
              />
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
      {/* <div className="lg:w-9/12 mx-auto grid md:grid-cols-3 gap-5">
        {university.confessions.map((item: any, index: number) => (
          <Card
            key={index}
            className="px-10 py-20 group  flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={900}
              height={900}
              className="object-contain w-48 h-24 group-hover:scale-110 duration-300 transition-all"
            />
          </Card>
        ))}
      </div> */}
    </div>
  );
}
