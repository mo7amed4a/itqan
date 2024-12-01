"use client";
import React, { useEffect, useState } from "react";
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
import { getData } from "@/lib/data";
import { Skeleton } from "../ui/skeleton";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

export default function FilterSelect({
  lng,
  col=false
}: {
  lng: string;
  col?: boolean
}) {
  const [data, setData] = useState<any>(null)
  useEffect(() => {
    (async() => {
      const response = await getData("/filters", lng);
      setData(response?.data)
    })()
  }, [])

  const { t: dataLang } = useTranslation(lng, "home");

  const router = useRouter(); // Router hook for navigation
  const [filters, setFilters] = useState({
    specialization: "",
    level: "",
    language: "",
    years: "",
  });

  // Function to update filter values
  const handleFilterChange = (field: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value === "null" ? "" : value,
    }));
  };
  

  // Function to navigate to the desired URL
  const handleSearch = () => {
    const queryParams = new URLSearchParams(filters).toString();
    router.push(`/programs?${queryParams}`);
  };

  return data ? (
    <div className={`mt-6 grid grid-cols-1 ${col ? '' : 'md:grid-cols-3 bg-gray-900/10'} gap-4 rounded p-4`}>
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
            <SelectItem value={'null'}>{dataLang("hero.select_none")}</SelectItem>
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
            <SelectItem value={'null'}>{dataLang("hero.select_none")}</SelectItem>
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
            <SelectItem value={'null'}>{dataLang("hero.select_none")}</SelectItem>
            {data?.languages?.map((e: any, i: number) => (
              <SelectItem key={i} value={e.id}>
                {e.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Select Year */}
      {col && <Select onValueChange={(value) => handleFilterChange("years", value)}>
        <SelectTrigger className="rtl:flex-row-reverse h-14">
        <div className="flex gap-x-2 items-center rtl:flex-row-reverse">
            <MdOutlineAccessTimeFilled className="size-5 text-gray-500" />
            <SelectValue placeholder={dataLang("hero.select_years")} />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{dataLang("hero.select_years")}</SelectLabel>
            <SelectItem value={'null'}>{dataLang("hero.select_none")}</SelectItem>
            {[...new Array(6)].map((e: any, i: number) => (
              <SelectItem key={i} value={`${i + 1}`}>
                {i + 1}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>}

      {/* Search Button */}
      <div className="grid-cols-1"></div>

      <Button
        size={"xl"}
        color="primary"
        className="hover:bg-secondary hover:!scale-x-100 py-4"
        onClick={handleSearch}
        // disabled={
        //   !filters.specialization || !filters.level || !filters.language
        // }
      >
        {dataLang("hero.search")}
      </Button>
    </div>
  ) : (
    <div className={`mt-6 grid grid-cols-1 ${col ? '' : 'md:grid-cols-3 bg-gray-900/10'} gap-4 rounded p-4`}>
      <Skeleton className="h-12 w-full rounded-xl bg-white" />
      <Skeleton className="h-12 w-full rounded-xl bg-white" />
      <Skeleton className="h-12 w-full rounded-xl bg-white" />
      
      {!col ? <div className="flex col-span-full justify-center">
        <Skeleton className="h-12 w-2/4" />
      </div> : <Skeleton className="h-12 w-full rounded-xl bg-white" /> }
    </div>
  );
}
