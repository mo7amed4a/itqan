"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { useTranslation } from "@/i18n/client";
import { useRouter } from "next/navigation";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { SlBadge } from "react-icons/sl";
import { FaLanguage } from "react-icons/fa6";
import Image from "next/image";

export default function FilterSelect({
  lng,
  data,
}: {
  lng: string;
  data: any;
}) {
  const { t: dataLang } = useTranslation(lng, "home");

  const router = useRouter(); // Router hook for navigation
  const [filters, setFilters] = useState({
    specialization: "",
    level: "",
    language: "",
  });

  // Function to update filter values
  const handleFilterChange = (field: string, value: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, [field]: value }));
  };

  // Function to navigate to the desired URL
  const handleSearch = () => {
    const queryParams = new URLSearchParams(filters).toString();
    router.push(`/programs?${queryParams}&years=3`);
  };

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-900/10 rounded p-4">
      {/* Select Specialization */}
      <Select
        onValueChange={(value) => handleFilterChange("specialization", value)}
      >
        <SelectTrigger className="rtl:flex-row-reverse h-14">
          <div className="flex gap-x-2 items-center rtl:flex-row-reverse">
            <HiOutlineAdjustmentsHorizontal className="size-5 text-gray-500" />
            <SelectValue placeholder={dataLang("hero.select_specialty")} />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="w-full">
              {dataLang("hero.select_specialty")}
            </SelectLabel>
            {data?.specializations?.map((e: any, i: number) => (
              <SelectItem key={i} value={e.id}>
                <p>{e.name}</p>
                {/* <div className="flex items-center gap-4 w-full">
                  <Image className="size-6" src={e.image} width={500} height={500} alt="" />
                  <p>{e.name}</p>
                </div> */}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Select Level */}
      <Select onValueChange={(value) => handleFilterChange("level", value)}>
        <SelectTrigger className="rtl:flex-row-reverse h-14">
        <div className="flex gap-x-2 items-center rtl:flex-row-reverse">
            <FaLanguage className="size-5 text-gray-500" />
            <SelectValue placeholder={dataLang("hero.select_study_level")} />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{dataLang("hero.select_study_level")}</SelectLabel>
            {data?.levels?.map((e: any, i: number) => (
              <SelectItem key={i} value={e.id}>
                {e.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Select Language */}
      <Select onValueChange={(value) => handleFilterChange("language", value)}>
        <SelectTrigger className="rtl:flex-row-reverse h-14">
        <div className="flex gap-x-2 items-center rtl:flex-row-reverse">
            <SlBadge className="size-5 text-gray-500" />
          <SelectValue placeholder={dataLang("hero.select_language")} />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{dataLang("hero.select_language")}</SelectLabel>
            {data?.languages?.map((e: any, i: number) => (
              <SelectItem key={i} value={e.id}>
                {e.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Search Button */}
      <div className="grid-cols-1"></div>

      <Button
        size={"xl"}
        color="primary"
        className="hover:bg-red-500 py-4"
        onClick={handleSearch}
        disabled={
          !filters.specialization || !filters.level || !filters.language
        }
      >
        {dataLang("hero.search")}
      </Button>
    </div>
  );
}