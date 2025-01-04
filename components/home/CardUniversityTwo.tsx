import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useTranslation } from "@/i18n";
export type UniversityType = {
  id: number;
  image: string;
  logo: string;
  found_year: number | null;
  study_programs:  { id: number, name: string }[]
  slug: string;
  global_rank: number | null;
  name: string;
  description: string;
  first_programs: string[];
  min_annual_fees: number;
  max_annual_fees: number;
  translated_name: string;
  translated_description: string;
  language_flags : {flag: string}[]
};

export default async function CardUniversityTwo({
  university,
  major,
  btnText,
  lng='ar'
}:{
  university?: UniversityType,
  major: string,
  btnText: string
  lng?: string
}) {  
  const { t } = await useTranslation(lng, "partial_scholarships");
  const { t:DataLang } = await useTranslation(lng, "turkish_universities");
  return university && (
    <div className="hover:shadow-xl bg-white rounded-2xl p-3 shadow-all duration-300 group">
      <div className="relative">
        <Image
          alt="alt"
          width={500}
          height={500}
          className="rounded-2xl h-36 md:h-52 w-full"
          src={university.image.split('http://').join('https://')}
        />
        <Image
          alt="alt"
          width={500}
          height={500}
          className="size-16 md:size-28 rounded-full absolute start-4 -bottom-10 md:-bottom-16 border-4 bg-white"
          src={university.logo.split('http://').join('https://')}
        />
      </div>
      <div className="p-4 mt-8 md:mt-16 text-start">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-base sm:text-xl md:text-2xl text-primary line-clamp-1">
            {university.name || university.translated_name}
          </h2>
          <div className="flex gap-3">
            {
              university?.language_flags?.map((e:{flag: string}, index: number) => {
                return <Image  key={index}
                      src={e.flag.split("http://").join("https://")}
                      alt="img"
                      width={300}
                      height={300}
                      className="!size-7 rounded-full"
                    />
              })
            }
          </div>
        </div>
        <section className="space-y-3 pt-3">
          <div className="w-full gap-2 md:items-center text-gray-800 text-xs md:text-sm grid grid-cols-3">
            <div className="bg-gray-400/10 rounded-lg p-3 flex flex-col items-center space-y-4">
              <span className="text-primary">سنة التأسيس</span>
              <span className="text-secondary">2000</span>
            </div>
            <div className="bg-gray-400/10 rounded-lg p-3 flex flex-col items-center space-y-4">
              <span className="text-primary">الترتيب عالميا</span>
              <span className="text-secondary">2000</span>
            </div>
            <div className="bg-gray-400/10 rounded-lg p-3 flex flex-col items-center space-y-4">
              <span className="text-primary">الترتيب محليا</span>
              <span className="text-secondary">2000</span>
            </div>
            <div className="bg-gray-400/10 rounded-lg p-3 flex flex-col items-center space-y-4">
              <span className="text-primary">عدد التخصصات</span>
              <span className="text-secondary">2000</span>
            </div>
          </div>
          <div className="bg-gray-400/10 text-gray-800 flex justify-between w-full gap-4 rounded-lg text-sm p-3">
            <span className="text-secondary">تبدأ الارسعار</span>
            <div className="flex items-center gap-2">
                <span>من</span>
                <span>{university.min_annual_fees}$</span>
            </div>
            <div className="flex items-center gap-2">
              <span>الى</span>
              <span>{university.max_annual_fees}$</span>
            </div>
          </div>
        </section>
        
        {/* {university?.study_programs?.length > 0 && <>
          <h6 className="text-red-500 text-base md:text-lg">{major}</h6>
          <ul className="grid grid-cols-2 mt-4 text-xs md:text-base text-gray-600 text-start custom-bullet-university">
            {
              university.study_programs.slice(0, 4).map((item, index) => (
                <li key={index}>{item.name}</li>
              ))
            }
          </ul>
        </>
        } */}
        <div className="flex justify-center mt-2">
          <Button className="group-hover:bg-secondary">{btnText}</Button>
        </div>
      </div>
    </div>
  );
}
