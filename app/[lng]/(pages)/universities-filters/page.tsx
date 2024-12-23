import CardFull, { UniversityTwoType } from "@/components/cards/Card-full";
import FilterSelect from "@/components/home/Filter";
import { useTranslation } from "@/i18n";
import { getData } from "@/lib/data";
import React from "react";

export default async function Page({
  params,
  searchParams,
}: {
  params: { lng: string };
  searchParams: {
    level: string;
    specialization: string;
    years: string;
    language: string;
  };
}) {
  const lng = params.lng;
  const {t} = await useTranslation(lng, 'program')
  const { level, specialization, years, language } = searchParams;
  const query:Partial<typeof searchParams> = {};

if (level) query.level = level;
if (specialization) query.specialization = specialization;
if (years) query.years = years;
if (language) query.language = language;

const queryString = new URLSearchParams(query).toString();

const response = await getData(`/programs?${queryString}`, lng);
const data = response?.data;

  
  return (
    <section className="max-w-7xl mx-auto py-10 px-4">
      <div className="flex justify-center py-10">
        <h1 className="text-lg md:text-2xl text-center font-bold text-gray-500">{t('title')}</h1>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-4">
       <div className="w-full">
        {data &&
          data?.data &&
          data?.data?.length > 0 ?  (
            <div className="grid grid-cols-1 gap-4 w-full">
              {data &&
                data.data &&
                data.data.map((item: UniversityTwoType) => {
                  return <CardFull key={item.id} data={item} lng={lng} />;
                })}
            </div>
          ) : <div className="flex justify-center items-center h-[50vh]">
              <div className="font-bold text-gray-500 text-xl">{t('notFound')}</div>
          </div> }
       </div>
        <div className="lg:w-96">
          <FilterSelect lng={lng} col/>
        </div>
      </div>
    </section>
  ) ;
}
