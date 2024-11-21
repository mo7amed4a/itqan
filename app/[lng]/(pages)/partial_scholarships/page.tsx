import React from "react";
import CardFull from "../../../../components/cards/Card-full";
import { useTranslation } from "../../../../i18n";
import { Button } from "flowbite-react";
import { getData } from "@/lib/data";

export default async function Page({ params }: { params: { lng: string } }) {
  const lng = params.lng;
  const { t } = await useTranslation(lng, "partial_scholarships");
  const response = await getData("/page/agents", lng);
  const data = response?.data;
  return (
    <div className="container mx-auto px-4 my-10">
      <h1 className="text-center text-xl md:text-2xl font-bold text-gray-500 capitalize">
        {t("title")}
      </h1>
      <div className="flex flex-col space-y-7 mt-10">
        <CardFull t={t} />
        <CardFull t={t} />
        <CardFull t={t} />
        <CardFull t={t} />
        <CardFull t={t} />
        <CardFull t={t} />
        <CardFull t={t} />
        <CardFull t={t} />
      </div>
      <div className="flex justify-center mt-10">
        <Button color="primary" className="bg-primary text-white hover:bg-white hover:text-primary">
          {t('show_more')}
        </Button>
      </div>
    </div>
  );
}
