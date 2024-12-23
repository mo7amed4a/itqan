import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useTranslation } from "@/i18n";
import Image from "next/image";
import React from "react";
import img1 from "/public/images/sp/1.png";
import img2 from "/public/images/sp/2.png";
import img3 from "/public/images/sp/3.png";
import img4 from "/public/images/sp/4.png";
import img5 from "/public/images/sp/5.png";
import imgBg from "/public/images/bg-ehs.png";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { dir } from "i18next";


export default async function CardRank({
  university,
  lng,
}: {
  university: any;
  lng: string;
}) {
  const { t } = await useTranslation(lng, "university_details");
  return (
    <Card className="relative border-none shadow-none rounded-none bg-primary py-10">
    <CardHeader className="container lg:max-w-[85vw] mx-auto relative z-10">
      <h2 className="text-white text-lg md:text-xl font-bold">
        {university.name} {t('university.numbers')}
      </h2>
    </CardHeader>
    <ScrollArea className="w-full whitespace-nowrap" dir={dir(lng)}>
      
      <CardContent className="flex w-max gap-x-4 p-4 relative z-10 container lg:max-w-[85vw] mx-auto lg:px-16 text-center lg:grid lg:grid-cols-5 gap-5">
        
        <Card className="w-52 border-none shadow-none group">
          <CardHeader className="flex justify-center items-center">
            <Image
              src={img1}
              alt={t("university.globalRank")}
              width={500}
              height={500}
              className="!h-20 !w-24 lg:size-28 group-hover:scale-110 duration-300 transition-all"
            />
          </CardHeader>
          <CardContent className="py-2">
            <span className="text-base sm:text-lg md:text-xl font-bold text-primary">
              {t("university.globalRank")}
            </span>
          </CardContent>
          <div className="flex justify-center py-3 items-center text-2xl font-bold text-gray-500 border-t">
            <span>{university.global_rank}</span>
          </div>
        </Card>
        <Card className="w-52 border-none shadow-none group">
          <CardHeader className="flex justify-center items-center">
            <Image
              src={img2}
              alt=""
              width={500}
              height={500}
              className="!h-20 !w-24 lg:size-28  group-hover:scale-110 duration-300 transition-all"
            />
          </CardHeader>
          <CardContent className="py-2">
            <span className="text-lg md:text-xl font-bold text-primary">
              {t("university.localRank")}
            </span>
          </CardContent>
          <div className="flex justify-center py-3 items-center text-2xl font-bold text-gray-500 border-t">
            <p>{university.local_rate}</p>
          </div>
        </Card>
        <Card className="w-52 border-none shadow-none group">
          <CardHeader className="flex justify-center items-center">
            <Image
              src={img4}
              alt=""
              width={500}
              height={500}
              className="!h-20 !w-24 lg:size-28  group-hover:scale-110 duration-300 transition-all"
            />
          </CardHeader>
          <CardContent className="py-2">
            <span className="text-lg md:text-xl font-bold text-primary">
              {t("university.studentsCount")}
            </span>
          </CardContent>
          <div className="flex justify-center py-3 items-center text-2xl font-bold text-gray-500 border-t">
          <p>{university.student_count}</p>
          </div>
        </Card>
        <Card className="w-52 border-none shadow-none group">
          <CardHeader className="flex justify-center items-center">
            <Image
              src={img3}
              alt=""
              width={500}
              height={500}
              className="!h-20 !w-24 lg:size-28  group-hover:scale-110 duration-300 transition-all"
            />
          </CardHeader>
          <CardContent className="py-2">
            <span className="text-lg md:text-xl font-bold text-primary">
              {t("university.staff")}
            </span>
          </CardContent>
          <div className="flex justify-center py-3 items-center text-2xl font-bold text-gray-500 border-t">
            <p>{university.teachers_count}</p>
          </div>
        </Card>
        <Card className="w-52 border-none shadow-none group">
          <CardHeader className="flex justify-center items-center">
            <Image
              src={img5}
              alt=""
              width={500}
              height={500}
              className="!h-20 !w-24 lg:size-28  group-hover:scale-110 duration-300 transition-all"
            />
          </CardHeader>
          <CardContent className="py-2">
            <span className="text-lg md:text-xl font-bold text-primary">
              {t("university.nationalityCount")}
            </span>
          </CardContent>
          <div className="flex justify-center py-3 items-center text-2xl font-bold text-gray-500 border-t">
            <p>{university.national_count}</p>
          </div>
        </Card>

      </CardContent>
      <ScrollBar orientation="horizontal" className="hidden" />

    </ScrollArea>
    <Image
      className="absolute inset-0 size-full z-0 opacity-35"
      src={imgBg}
      alt=""
      width={2500}
      height={2500}
    />
  </Card>
  );
}
