import React from "react";
import CardFull from "../../../../components/cards/Card-full";
import { useTranslation as getTranslation } from "../../../../i18n";
import { getData } from "@/lib/data";
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
    title: t('partial_scholarships') + " - " + data?.site_name,
    description: data?.meta_description || "",
  };
}

export default async function Page({ params }: { params: { lng: string } }) {
  const lng = params.lng;
  const { t } = await getTranslation(lng, "partial_scholarships");
  const response = await getData("/grants", lng);
  const data = response?.data;
  return (
    <div className="container lg:max-w-[85vw] mx-auto px-4 md:px-0 my-10">
      <BreadcrumbApp lng={lng} />
      <h1 className="text-center text-xl md:text-2xl font-bold text-gray-500 capitalize">
        {t("title")}
      </h1>
      <div className="flex flex-col space-y-7 mt-10">
        {/* here */}
        {data && data?.data &&
          data.data.map((item: any) => <CardFull  lng={lng} key={item.id} data={item} />)}
      </div>
    </div>
  );
}
