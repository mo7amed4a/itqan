import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useTranslation } from "@/i18n";
import Image from "next/image";
import React from "react";

export default async function CardUniOne({
  university,
  lng,
}: {
  university: any;
  lng: string;
}) {
  const {t} = await useTranslation(lng, "university_details");
  return (
    <section className="container lg:max-w-[85vw] mx-auto px-4 mb-5">
      <Card className="flex flex-col w-full md:flex-row md:h-96 rounded-xl shadow-none border-none hover:shadow-md">
        <CardHeader className="md:w-2/4 p-5 py-12 order-2 md:order-1">
          <div className="flex gap-4">
            <Avatar className="size-24">
              <AvatarImage className="p-4" src={university.logo.split("http://").join("https://")} alt={university.name} />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            {/* <div>
              <Image
                src={university.logo.split("http://").join("https://")}
                alt=""
                width={700}
                height={700}
                className="h-20 w-24 rounded-xl"
              />
            </div> */}
            <div className="space-y-2 flex flex-col justify-center text-gray-500">
              <span className="text-lg font-[600]">{university.name}</span>
              {/* <p className="text-sm text-primary">turkish - jkn</p>
              <span className="text-sm text-secondary">komkm</span> */}
            </div>
          </div>
          <div className="text-gray-500 pt-3 pb-4">
            <p
              className="line-clamp-4"
              dangerouslySetInnerHTML={{
                __html: university.short_description,
              }}
            ></p>
          </div>
          <div className="text-sm flex text-center gap-4 justify-center">
            <div className="bg-gray-50 py-3 px-5 space-y-2 rounded-lg">
              <span className="text-primary text-base">
                {t("university.globalRank")}
              </span>
              <p className="text-secondary">{university.global_rank}</p>
            </div>
            <div className="bg-gray-50 py-3 px-5 space-y-2 rounded-lg">
              <span className="text-primary text-base">
                {t("university.localRank")}
              </span>
              <p className="text-secondary">{university.local_rate}</p>
            </div>
            <div className="bg-gray-50 py-3 px-5 space-y-2 rounded-lg">
              <span className="text-primary text-base">
                {t("university.studentsCount")}
              </span>
              <p className="text-secondary">{university.student_count}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="md:w-2/4 p-4 md:order-2">
          <Image
            src={university.image.split("http://").join("https://")}
            alt=""
            width={500}
            height={500}
            className="size-full rounded-xl"
          />
        </CardContent>
      </Card>
    </section>
  );
}
