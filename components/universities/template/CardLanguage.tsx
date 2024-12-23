import { useTranslation } from "@/i18n";
import Image from "next/image";
import React from "react";
import imgChat from "/public/images/chat.png";

export default async function CardLanguage({
  university,
  lng,
}: {
  university: any;
  lng: string;
}) {
  const { t } = await useTranslation(lng, "university_details");
  return (
    <section>
    <div className="container lg:max-w-[85vw] mx-auto px-4 py-10 mt-10 rounded-md md:text-lg md:-space-y-12">
      <h2 className="text-lg md:text-2xl font-bold">
        {t("university.languagesStudy")} {university.name}
      </h2>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col justify-center space-y-6">
          <p className="text-primary md:text-lg">
            {t("university.languagesStudyAvailable")} {university.name}{" "}
            {t("university.languagesStudyMoreLanguages")}
          </p>
          <ul className="custom-bullet">
            {university.languages &&
              university.languages.length > 0 &&
              university.languages.map((language: any, index: number) => (
                <li key={index}>{language.name}</li>
              ))}
          </ul>
        </div>
        <div>
          <Image
            className="size-full hover:scale-105 duration-300 transition-all"
            src={imgChat}
            width={400}
            height={400}
            alt="chat"
          />
        </div>
      </div>
    </div>
  </section>
  );
}
