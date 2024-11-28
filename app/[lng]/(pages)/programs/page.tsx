import CardFull, { UniversityTwoType } from "@/components/cards/Card-full";
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
    data &&
    data?.data &&
    data?.data?.length > 0 ?  (
      <section className="grid grid-cols-1 gap-4 max-w-7xl mx-auto py-10 px-4">
        {data &&
          data.data &&
          data.data.map((item: UniversityTwoType) => {
            return <CardFull key={item.id} data={item} lng={lng} />;
          })}
      </section>
    ) : <div className="flex justify-center items-center h-[50vh]">
        <div className="font-bold text-gray-500 text-xl">Not fount</div>
    </div> 
  ) ;
}
