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
    <div className="bg-white space-y-7 text-gray-500 pb-10">
    {university.video != null && (
      <Card className="border-none shadow-none container lg:max-w-[85vw] mx-auto">
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
  </div>
  );
}
