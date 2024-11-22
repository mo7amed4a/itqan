import Image from "next/image";
import React from "react";
import img1 from "../../public/images/romantic-fall-scenery-countryside-road-in-foggy-autumn-morning-free-image.webp";
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

export default function CardUniversity({
  university
}:{
  university?: UniversityType
}) {
  return university && (
    <div className="shadow-xl rounded-2xl p-3 hover:!scale-[1.02] duration-300">
      <div className="relative">
        <Image
          alt="alt"
          width={500}
          height={500}
          className="rounded-2xl w-full"
          src={university.image.split('http://').join('https://')}
        />
        <Image
          alt="alt"
          width={500}
          height={500}
          className="w-28 h-28 md:w-32 md:h-32 rounded-full absolute end-4 -bottom-16 border-4 bg-white"
          src={university.logo.split('http://').join('https://')}
        />
      </div>
      <div className="p-4 mt-16 text-start">
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-primary">
          {university.name}
        </h2>
        <p className="text-sm text-gray-500">{university.description}</p>
        <h6 className="text-red-500 text-base md:text-lg">أهم التخصصات</h6>
        <ul className="grid grid-cols-2 mt-4 text-xs md:text-lg text-start custom-bullet">
          {
            university?.first_programs?.length > 0 && university.first_programs.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}
