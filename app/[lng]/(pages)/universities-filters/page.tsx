import CardForFilter, { UniversityTwoType } from "./_components/CardForFilter";
import { useTranslation } from "@/i18n";
import { getData } from "@/lib/data";
import React from "react";
import FilterSelectTwo from "./_components/FilterSelectTwo";
import { Button } from "@/components/ui/button";

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
    <section className="container md:max-w-[85%] mx-auto px-4 py-10 md:px-0">
      <div className="flex justify-center py-10">
        <h1 className="text-lg md:text-2xl text-center font-bold text-gray-500">{t('title')}</h1>
      </div>
      <div className="pb-10 flex gap-4">        
        <Button variant={"outline"} className="bg-secondary rounded-full text-white">{t('title')}</Button>
        <Button variant={"outline"} className="bg-transparent text-gray-600 rounded-full">{t('overview')}</Button>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-4">
        <div className="lg:w-96">
          <FilterSelectTwo lng={lng} col/>
        </div>
       <div className="w-full">
        {data &&
          data?.data &&
          data?.data?.length > 0 ?  (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {data &&
                data.data &&
                data.data.map((item: UniversityTwoType) => {
                  return <CardForFilter key={item.id} data={item} lng={lng} />;
                })}
            </div>
          ) : <div className="flex justify-center items-center h-[50vh]">
              <div className="font-bold text-gray-500 text-xl">{t('notFound')}</div>
          </div> }
       </div>
      </div>
    </section>
  ) ;
}
