import React from "react";
import { useTranslation } from "../../../../i18n";
import { getData } from "@/lib/data";
import HousingList from "@/components/housing/HousingList";

export default async function UniversitiesPage({
  params,
}: {
  params: { lng: string };
}) {
  const lng = params.lng;
  const { t } = await useTranslation(lng, "housing");
  const response = await getData("/housings", lng);
  const data = response?.data;

  return (
    <div className="my-10 container lg:max-w-[85vw] mx-auto space-y-20 p-4 md:px-0">
      <div className="flex justify-center items-center text-center">
        <h2 className="text-lg font-bold text-gray-500 md:text-2xl">
          {t("titlePage")}
        </h2>
      </div>
      {data && data?.housings && data?.housings?.length > 0 && (
        <HousingList t={t} housings={data?.housings} />
      )}
    </div>
  );
}
