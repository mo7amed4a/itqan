import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
export type UniversityType = {
  id: number;
  image: string;
  logo: string;
  found_year: number | null;
  slug: string;
  global_rank: number | null;
  name: string;
  description: string;
  first_programs: string[];
  min_annual_fees: number;
  max_annual_fees: number;
};

export default async function CardUniversity({
  university,
  major
}:{
  university?: UniversityType,
  major: string
}) {
  return university && (
    <div className="hover:shadow-xl bg-white rounded-2xl p-3 hover:!scale-[1.02] duration-300 group">
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
          {university.name}
        </h2>
        <p className="text-sm text-gray-500">{university.description}</p>
        <h6 className="text-red-500 text-base md:text-lg">{major}</h6>
        <ul className="grid grid-cols-2 mt-4 text-xs md:text-lg text-start custom-bullet">
          {
            university?.first_programs?.length > 0 && university.first_programs.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          }
        </ul>
        <div className="flex justify-center mt-2">
          <Button className="group-hover:bg-secondary">سجل الان</Button>
        </div>
      </div>
    </div>
  );
}
