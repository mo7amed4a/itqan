import React from "react";
import { useTranslation as getTranslation } from "../../../../i18n";
import { getData } from "@/lib/data";
import HousingList from "@/components/housing/HousingList";
import BreadcrumbApp from "@/components/global/breadcrumb";

export async function generateMetadata({
  params,
}: {
  params: { lng: string };
}) {
  const {lng} = params
  const { t } = await getTranslation(lng, "Header");
  let data;
  const response = await getData("/get_settings", params.lng);
  data = response?.data;
  return {
    title: t('student_accommodation') + " - " + data?.site_name,
    description: data?.meta_description || "",
  };
}


export default async function UniversitiesPage({
  params,
}: {
  params: { lng: string };
}) {
  const lng = params.lng;
  const { t } = await getTranslation(lng, "housing");
  const response = await getData("/housings", lng);
  const data = response?.data;

  return (
    <div className="mb-10 container lg:max-w-[85vw] mx-auto space-y-20 p-4 md:px-0">
      <BreadcrumbApp lng={lng} className="-my-12"/>
      <div className="flex justify-center items-center text-center">
        <h1 className="text-lg font-bold text-gray-500 md:text-2xl">
          {t("titlePage")}
        </h1>
      </div>
      {data && data?.housings && data?.housings?.length > 0 && (
        <HousingList t={t} housings={data?.housings} />
      )}
    </div>
  );
}
