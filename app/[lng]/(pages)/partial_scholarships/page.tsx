import React from "react";
import CardFull from "../../../../components/cards/Card-full";
import { useTranslation } from "../../../../i18n";
import { getData } from "@/lib/data";

export default async function Page({ params }: { params: { lng: string } }) {
  const lng = params.lng;
  const { t } = await useTranslation(lng, "partial_scholarships");
  const response = await getData("/grants", lng);
  const data = response?.data;
  return (
    <div className="container mx-auto px-4 my-10">
      <h1 className="text-center text-xl md:text-2xl font-bold text-gray-500 capitalize">
        {t("title")}
      </h1>
      <div className="flex flex-col space-y-7 mt-10">
        {/* here */}
        {data && data?.data &&
          data.data.map((item: any) => <CardFull lng={lng} key={item.id} data={item} />)}
      </div>
    </div>
  );
}
