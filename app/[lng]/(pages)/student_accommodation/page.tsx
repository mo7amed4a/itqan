import LinkApp from "../../../../components/global/LinkApp";
import CardUniversity from "../../../../components/home/CardUniversity";

import { Button, Carousel } from "flowbite-react";
import React from "react";
import { useTranslation } from "../../../../i18n";
import Image from "next/image";
import img1 from "../../../../public/images/for-blog.png";
import CarouselApp, {
  CarouselItem,
} from "../../../../components/global/Carousel";
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
    <div className="my-10 container mx-auto space-y-20 p-4">
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
