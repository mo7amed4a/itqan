import Image from "next/image";
import React from "react";
import { FaLanguage, FaTag } from "react-icons/fa6";
import { TFunction } from "i18next";
import { FaMapSigns, FaUniversity } from "react-icons/fa";
import LinkApp from "../global/LinkApp";
import { useTranslation } from "@/i18n";
import { Button } from "../ui/button";

export type UniversityTwoType ={
  id: number;
  image: string;
  logo: string;
  university_name: string;
  program_name: string;
  level: string;
  program_language: string;
  city_name: string;
  fees_before: null;
  annual_fees: number;
  total_fees: string;
  study_years: number;
  university_slug: string;
  university_id: number;
};


type CardFullProps = {
  lng: string;
  data: UniversityTwoType
};

export default async function CardFull({ data, lng }: CardFullProps) {
  const {t} = await useTranslation(lng, "partial_scholarships")
  return (
    <div className="bg-white rounded-xl p-4 lg:!px-10 flex flex-col md:flex-row text-start hover:shadow">
      <div className="lg:w-1/4 h-full items-center p-4 hidden lg:flex">
        <Image
          src={data.logo.split("http://").join("https://")}
          className="rounded-full w-52"
          alt={data.university_name}
          width={100}
          height={100}
        />
      </div>

      <div className="lg:w-3/4 md:py-5 flex flex-col items-start space-y-4">
        <div className="flex flex-col-reverse justify-between items-center w-full gap-5">
          <h1 className="text-gray-500 text-xl font-bold text-start w-full">
            {data.university_name}
          </h1>
          <Image
            src={data.logo.split("http://").join("https://")}
            className="rounded-full w-64 h-64 lg:hidden"
            alt={data.university_name}
            width={100}
            height={100}
          />
        </div>

        <div className="flex justify-between md:justify-normal w-full gap-x-2 md:items-center">
          <h3 className="flex gap-x-2 text-primary text-base text-start">
            <FaUniversity />
            {t("specialization.label")}:
          </h3>
          <p className="text-base text-gray-500">{data.program_name}</p>
        </div>

        <div className="flex justify-between md:justify-normal w-full gap-x-2 md:items-center">
          <h3 className="flex gap-x-2 text-primary text-base text-start">
            <FaTag />
            {t("level.label")}:
          </h3>
          <p className="text-base text-gray-500">{data.level}</p>
        </div>

        {/* <div className="flex gap-x-2 md:items-center">
          <h3 className="flex gap-x-2 text-primary text-base font-bold text-start">
            <FaMapSigns />
            {t("city.label")}:
          </h3>
          <p className="text-base text-gray-500">{data.city_name}</p>
        </div> */}

        {/* <div className="flex gap-x-2 md:items-center">
          <h3 className="flex gap-x-2 text-primary text-base font-bold text-start">
            {t("study_years.label")}:
          </h3>
          <p className="text-base text-gray-500">{data.study_years}</p>
        </div> */}

        <div className="flex justify-between md:justify-normal w-full md:flex-row md:gap-4 md:items-start">
          <h3 className="flex gap-x-2 text-primary text-base text-start">
            <FaTag />
            {t("fees.label")}:
          </h3>
          <div className="flex flex-col gap-2 text-start text-sm md:text-base text-gray-400">
            {/* <p>
              {t("fees.before")}:{" "}
              <span className="text-secondary line-through font-bold ms-1">
                {data.fees_before}$
              </span>
            </p> */}
            {/* <p>
              {t("fees.annual")}: <span className="text-primary font-bold ms-1">{data.annual_fees}$</span>
            </p> */}
            <p>
              {/* {t("fees.total")}:{" "} */}
              <span className="text-secondary ms-1">
                {data.total_fees}$
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:flex gap-x-4 w-full mt-4 lg:ms-16">
          <div className="w-full md:w-auto">
            <Button color="primary" className="bg-primary w-full text-white lg:!px-10 md:!h-11">
              {t("buttons.register_scholarship")}
            </Button>
          </div>
          <div className="w-full md:w-auto">
            <LinkApp className="w-full" href={`/universities/${data.id}`} lng={lng}>
              <Button className="w-full bg-secondary lg:!px-16 !py-4 md:!h-11">
                {t("buttons.view_university")}
              </Button>
            </LinkApp>
          </div>
        </div>
      </div>
    </div>
  );
}
