import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useTranslation } from "@/i18n";
import Image from "next/image";
import React from "react";
import { ImageModal } from "./ImageModal";

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
        <div className="flex flex-col md:flex-row items-stretch gap-4 md:h-[40rem] rounded-xl px-4">
          <div className="flex flex-col md:w-1/3 gap-y-2 -mt-1">
            <div className="w-full h-1/3 relative group">
                <ImageModal key={781} src={university.photo_album[3]?.split("http://")
                  .join("https://")} alt="Main photo" />
                <div className="absolute inset-0 bg-[#21837F]/50 group-hover:hidden transition-opacity duration-300 rounded-2xl"></div>
            </div>
            <div className="w-full h-1/3 relative group">
                <ImageModal key={781} src={university.photo_album[2]?.split("http://")
                  .join("https://")} alt="Main photo" />
                <div className="absolute inset-0 bg-[#21837F]/50 group-hover:hidden transition-opacity duration-300 rounded-2xl"></div>
            </div>
            <div className="w-full h-1/3 relative group">
                <ImageModal key={781} src={university.photo_album[1]?.split("http://")
                  .join("https://")} alt="Main photo" />
                <div className="absolute inset-0 bg-[#21837F]/50 group-hover:hidden transition-opacity duration-300 rounded-2xl"></div>
            </div>
          </div>

          <div className="md:w-2/3 h-full relative group">
                <ImageModal key={781} src={university.photo_album[0]?.split("http://")
                  .join("https://")} alt="Main photo" />
                <div className="absolute inset-0 bg-[#21837F]/50 group-hover:hidden transition-opacity duration-300 rounded-2xl"></div>
          </div>
        </div>
      </div>
    )}
  </div>
  );
}
