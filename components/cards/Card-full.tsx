import { Button } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { FaLanguage, FaTag } from "react-icons/fa6";
import { TFunction } from "i18next";
import { FaMapSigns, FaUniversity } from "react-icons/fa";
import LinkApp from "../global/LinkApp";

type CardFullProps = {
  t: TFunction<"partial_scholarships", undefined>;
  lng: string;
  data: {
    id: number;
    image: string;
    logo: string;
    university_name: string;
    program_name: string;
    level: string;
    program_language: string;
    city_name: string;
    fees_before: number;
    annual_fees: number;
    total_fees: string;
    study_years: number;
    university_slug: string;
  };
};

export default function CardFull({ t, data, lng }: CardFullProps) {
  return (
    <div className="bg-white rounded-xl p-4 flex flex-col md:flex-row text-start">
      <div className="lg:w-1/4 p-4 hidden lg:block">
        <Image
          src={data.logo.split("http://").join("https://")}
          className="rounded-full w-52"
          alt={data.university_name}
          width={100}
          height={100}
        />
      </div>

      <div className="lg:w-3/4 md:py-5 flex flex-col items-start space-y-4">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-primary text-xl font-bold">
            {data.university_name}
          </h1>
          <Image
            src={data.logo.split("http://").join("https://")}
            className="rounded-full w-20 lg:hidden"
            alt={data.university_name}
            width={100}
            height={100}
          />
        </div>

        <div className="flex gap-x-2 md:items-center">
          <h3 className="flex gap-x-2 text-primary text-base font-bold text-start">
            <FaUniversity />
            {t("specialization.label")}:
          </h3>
          <p className="text-base text-gray-500">{data.program_name}</p>
        </div>

        <div className="flex gap-x-2 md:items-center">
          <h3 className="flex gap-x-2 text-primary text-base font-bold text-start">
            <FaTag />
            {t("level.label")}:
          </h3>
          <p className="text-base text-gray-500">{data.level}</p>
        </div>

        <div className="flex gap-x-2 md:items-center">
          <h3 className="flex gap-x-2 text-primary text-base font-bold text-start">
            <FaMapSigns />
            {t("city.label")}:
          </h3>
          <p className="text-base text-gray-500">{data.city_name}</p>
        </div>

        <div className="flex gap-x-2 md:items-center">
          <h3 className="flex gap-x-2 text-primary text-base font-bold text-start">
            {t("study_years.label")}:
          </h3>
          <p className="text-base text-gray-500">{data.study_years}</p>
        </div>

        <div className="flex flex-col md:flex-row md:gap-4 md:items-start">
          <h3 className="flex gap-x-2 text-primary text-base font-bold text-start">
            <FaTag />
            {t("fees.label")}:
          </h3>
          <div className="flex flex-col gap-2 text-start text-sm md:text-base text-gray-400">
            <p>
              {t("fees.before")}:{" "}
              <span className="text-red-400 line-through font-bold ms-1">
                {data.fees_before}$
              </span>
            </p>
            {/* <p>
              {t("fees.annual")}: <span className="text-primary font-bold ms-1">{data.annual_fees}$</span>
            </p> */}
            <p>
              {t("fees.total")}:{" "}
              <span className="text-primary font-bold ms-1">
                {data.total_fees}$
              </span>
            </p>
          </div>
        </div>

        <div className="flex gap-x-4 w-full mt-4">
          <Button color="primary" className="md:w-1/4 bg-primary text-white">
            {t("buttons.register_scholarship")}
          </Button>
          <div className="md:w-1/4">
            <LinkApp href={`/universities/${data.id}`} lng={lng}>
              <Button color="failure" className="md:w-full">
                {t("buttons.view_university")}
              </Button>
            </LinkApp>
          </div>
        </div>
      </div>
    </div>
  );
}
