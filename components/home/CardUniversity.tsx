import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
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
};

export default async function CardUniversity({
  university,
  major,
  btnText
}:{
  university?: UniversityType,
  major: string,
  btnText: string
}) {  
  return university && (
    <div className="hover:shadow-xl bg-white rounded-2xl p-3 shadow-all duration-300 group">
      <div className="relative">
        <Image
          alt="alt"
          width={500}
          height={500}
          className="rounded-2xl h-52 w-full"
          src={university.image.split('http://').join('https://')}
        />
        <Image
          alt="alt"
          width={500}
          height={500}
          className="size-24 md:size-28 rounded-full absolute start-4 -bottom-16 border-4 bg-white"
          src={university.logo.split('http://').join('https://')}
        />
      </div>
      <div className="p-4 mt-16 text-start">
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-primary line-clamp-1">
          {university.name || university.translated_name}
        </h2>
        {
          university.description &&
        <p className="text-sm text-gray-500 line-clamp-2 pt-4" dangerouslySetInnerHTML={{ __html: university.description.slice(0, 200) }}></p>
        }
        {
           university.translated_description &&
        <p className="text-sm text-gray-500 line-clamp-2 pt-4" dangerouslySetInnerHTML={{ __html: university.translated_description.slice(0, 200) }}></p>
        }
        {university?.first_programs?.length > 0 && <>
          <h6 className="text-red-500 text-base md:text-lg">{major}</h6>
          <ul className="grid grid-cols-2 mt-4 text-xs md:text-base text-gray-600 text-start custom-bullet-university">
            {
              university.first_programs.slice(0, 4).map((item, index) => (
                <li key={index}>{item}</li>
              ))
            }
          </ul>
        </>
        }
        
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
