import { Card } from "@/components/ui/card";
import { useTranslation } from "@/i18n";
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
    <div className="container mx-auto px-4 py-10 mt-10 rounded-md">
      <h1 className="text-lg md:text-xl font-bold my-10">
        {t("university.confessions")}
      </h1>
      <div className="lg:w-9/12 mx-auto grid md:grid-cols-3 gap-5">
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
      </div>
    </div>
  );
}
