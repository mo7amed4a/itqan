import CardUniversity, { UniversityType } from "@/components/home/CardUniversity";
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
  console.log(level, specialization, years, language);
  
  let data = null;
  if (searchParams.level) {
    const response = await getData(
      `/programs?level=${level}&specialization=${specialization}&years=${years||3}&language=${language}`,
      lng
    );
    data = response?.data;
  }
  return (
    data &&
    data?.data &&
    data?.data?.length > 0 ?  (
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data &&
          data.data &&
          data.data.map((item: UniversityType) => {
            return <CardUniversity key={item.id} university={item} />;
          })}
      </section>
    ) : <div className="flex justify-center items-center h-[50vh]">
        <div className="font-bold text-gray-500 text-xl">Not fount</div>
    </div> 
  ) ;
}
