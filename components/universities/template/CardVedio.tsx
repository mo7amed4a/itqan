import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useTranslation } from "@/i18n";
import Image from "next/image";
import React from "react";

export default async function CardVideo({
  university,
  lng,
}: {
  university: any;
  lng: string;
}) {
  const {t} = await useTranslation(lng, "university_details");
  return (
    <div className="bg-white space-y-7 text-gray-500">
    {university.video != null && (
      <Card className="border-none shadow-none container mx-auto">
        <CardHeader>
          <h1 className="text-lg md:text-xl font-bold my-2">
            {t("university.video")} {university.name}
          </h1>
        </CardHeader>

        <CardContent className="h-[30rem]">
          <iframe
            className="size-full rounded-xl"
            width={1280}
            src={`https://www.youtube.com/embed/${
              university.video.split("=")[1]
            }`}
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </CardContent>
      </Card>
    )}
    {university.photo_album.length > 0 && (
      <div className="container mx-auto">
        <div className="py-10">
          <h1 className="text-lg md:text-xl font-bold px-4">
            {t("university.photo")}
          </h1>
        </div>
        <div className="flex items-stretch gap-4 h-[30rem] rounded-xl px-4">
          <div className="flex flex-col w-1/3 gap-y-2 -mt-1">
            <img
              src={
                university.photo_album.length > 0 &&
                university.photo_album[0]
                  .split("http://")
                  .join("https://")
              }
              alt="photo_album image 1"
              className="w-full h-1/2 object-cover rounded-2xl"
            />
            <img
              src={
                university.photo_album.length >= 2 &&
                university.photo_album[1].university.image
                  .split("http://")
                  .join("https://")
              }
              alt="photo_album image 2"
              className="w-full h-1/2 object-cover rounded-2xl"
            />
          </div>

          <div className="w-2/3">
            <img
              src={
                university.photo_album.length >= 3 &&
                university.photo_album[2]
                  .split("http://")
                  .join("https://")
              }
              alt="photo_album image 3"
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    )}
  </div>
  );
}
