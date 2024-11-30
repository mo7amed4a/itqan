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
    <section className="container mx-auto px-4 mb-5">
      <Card className="flex flex-col w-full md:flex-row md:h-96 rounded-xl shadow-none border-none hover:shadow-md">
        <CardHeader className="md:w-2/4 p-5 py-12 order-2 md:order-1">
          <div className="flex gap-4">
            <div>
              <Image
                src={university.logo.split("http://").join("https://")}
                alt=""
                width={500}
                height={500}
                className="size-20 rounded-xl"
              />
            </div>
            <div className="space-y-2 text-gray-500">
              <h1 className="text-lg font-[600]">{university.name}</h1>
              {/* <p className="text-sm text-primary">turkish - jkn</p>
              <span className="text-sm text-secondary">komkm</span> */}
            </div>
          </div>
          <div className="text-gray-500 py-4">
            <p
              className="line-clamp-4"
              dangerouslySetInnerHTML={{
                __html: university.description.slice(0, 300),
              }}
            ></p>
          </div>
          <div className="text-sm flex text-center gap-4 justify-center">
            <div className="bg-gray-50 py-3 px-5 space-y-2 rounded-lg">
              <h2 className="text-primary text-base">
                {t("university.globalRank")}
              </h2>
              <p className="text-secondary">{university.global_rank}</p>
            </div>
            <div className="bg-gray-50 py-3 px-5 space-y-2 rounded-lg">
              <h2 className="text-primary text-base">
                {t("university.localRank")}
              </h2>
              <p className="text-secondary">{university.local_rate}</p>
            </div>
            <div className="bg-gray-50 py-3 px-5 space-y-2 rounded-lg">
              <h2 className="text-primary text-base">
                {t("university.studentsCount")}
              </h2>
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
