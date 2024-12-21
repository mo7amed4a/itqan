import { useTranslation } from "@/i18n";
import React from "react";
import ReadMore from "../ReadMore";

export default async function CardDetails({
  university,
  lng,
}: {
  university:any
  lng: string;
}) {
  const { t } = await useTranslation(lng, "university_details");
  return (
    university?.description && (
      <div className="px-4 py-10 mt-10 bg-white rounded-md">
        <div className="container lg:max-w-[85vw] mx-auto">
          <h2 className="text-lg md:text-xl font-bold mb-4">
            {t("description")} {university.name}
          </h2>
          <ReadMore
            text={university?.description}
            readMore={t("readMore")}
            readLess={t("readLess")}
          />
        </div>
      </div>
    )
  );
}
