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
    <CardHeader className="container mx-auto relative z-10">
      <h1 className="text-white text-lg md:text-xl font-bold">
        {university.name}
      </h1>
    </CardHeader>
    <CardContent className="relative z-10 container mx-auto text-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      <Card className="border-none shadow-none group">
        <CardHeader className="flex justify-center items-center">
          <Image
            src={img1}
            alt=""
            width={500}
            height={500}
            className="size-28 group-hover:scale-110 duration-300 transition-all"
          />
        </CardHeader>
        <CardContent>
          <h1 className="text-lg md:text-xl font-bold text-primary">
            {t("university.globalRank")}
          </h1>
        </CardContent>
        <CardFooter className="flex justify-center border-t py-3">
          <p>{university.global_rank}</p>
        </CardFooter>
      </Card>
      <Card className="border-none shadow-none group">
        <CardHeader className="flex justify-center items-center">
          <Image
            src={img2}
            alt=""
            width={500}
            height={500}
            className="size-28 group-hover:scale-110 duration-300 transition-all"
          />
        </CardHeader>
        <CardContent>
          <h1 className="text-lg md:text-xl font-bold text-primary">
            {t("university.localRank")}
          </h1>
        </CardContent>
        <CardFooter className="flex justify-center border-t py-3">
          <p>{university.local_rate}</p>
        </CardFooter>
      </Card>
      <Card className="border-none shadow-none group">
        <CardHeader className="flex justify-center items-center">
          <Image
            src={img4}
            alt=""
            width={500}
            height={500}
            className="size-28 group-hover:scale-110 duration-300 transition-all"
          />
        </CardHeader>
        <CardContent>
          <h1 className="text-lg md:text-xl font-bold text-primary">
            {t("university.studentsCount")}
          </h1>
        </CardContent>
        <CardFooter className="flex justify-center border-t py-3">
          <p>{university.student_count}</p>
        </CardFooter>
      </Card>
      <Card className="border-none shadow-none group">
        <CardHeader className="flex justify-center items-center">
          <Image
            src={img3}
            alt=""
            width={500}
            height={500}
            className="size-28 group-hover:scale-110 duration-300 transition-all"
          />
        </CardHeader>
        <CardContent>
          <h1 className="text-lg md:text-xl font-bold text-primary">
            {t("university.staff")}
          </h1>
        </CardContent>
        <CardFooter className="flex justify-center border-t py-3">
          <p>{university.teachers_count}</p>
        </CardFooter>
      </Card>
      <Card className="border-none shadow-none group">
        <CardHeader className="flex justify-center items-center">
          <Image
            src={img5}
            alt=""
            width={500}
            height={500}
            className="size-28 group-hover:scale-110 duration-300 transition-all"
          />
        </CardHeader>
        <CardContent>
          <h1 className="text-lg md:text-xl font-bold text-primary">
            {t("university.nationalityCount")}
          </h1>
        </CardContent>
        <CardFooter className="flex justify-center border-t py-3">
          <p>{university.national_count}</p>
        </CardFooter>
      </Card>
    </CardContent>
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