'use client';
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

export default function FilterSelect({
  lng,
  data,
}: {
 lng: string
  data: any;
}) {
  const { t:dataLang } = useTranslation(lng, "home");

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
        <SelectTrigger className="rtl:flex-row-reverse">
          <SelectValue placeholder={dataLang("hero.select_specialty")} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="w-full">
              {dataLang("hero.select_specialty")}
            </SelectLabel>
            {data?.specializations?.map((e: any, i: number) => (
              <SelectItem key={i} value={e.name}>
                {e.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Select Level */}
      <Select onValueChange={(value) => handleFilterChange("level", value)}>
        <SelectTrigger className="rtl:flex-row-reverse">
          <SelectValue placeholder={dataLang("hero.select_study_level")} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{dataLang("hero.select_study_level")}</SelectLabel>
            {data?.levels?.map((e: any, i: number) => (
              <SelectItem key={i} value={e.name}>
                {e.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Select Language */}
      <Select onValueChange={(value) => handleFilterChange("language", value)}>
        <SelectTrigger className="rtl:flex-row-reverse">
          <SelectValue placeholder={dataLang("hero.select_language")} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{dataLang("hero.select_language")}</SelectLabel>
            {data?.languages?.map((e: any, i: number) => (
              <SelectItem key={i} value={e.name}>
                {e.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Search Button */}
      <div className="grid-cols-1"></div>
    

      <Button
  color="primary"
  className="hover:bg-red-500 py-4"
  onClick={handleSearch}
  disabled={!filters.specialization || !filters.level || !filters.language}
>
  {dataLang("hero.search")}
</Button>
    </div>
  );
}
