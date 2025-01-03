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
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/client";
import { useRouter } from "next/navigation";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { SlBadge } from "react-icons/sl";
import { FaLanguage } from "react-icons/fa6";
import { getData } from "@/lib/data";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function FilterSelectTwo({
  lng,
  col=false,
  filterData=null
}: {
  lng: string;
  col?: boolean;
  filterData?: any
}) {
  const [data, setData] = useState<any>(filterData || null)

  useEffect(() => {
    if(!filterData) {
      (async() => {
        const response = await getData("/filters", lng);
        setData(response?.data)
      })()
    }
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
    router.push(`/universities-filters?${queryParams}`);
  };

  return data ? (
    <div className={`dlg:mt-12 grid grid-cols-1 p-4 rounded ${col ? '' : 'md:grid-cols-3 bg-green-900/25 rounded-xl p-5'} gap-4 bg-white`}>
      {/* Select Specialization */}
      <span className="font-bold text-muted-foreground/80">الفلاتر</span>
      <Select
        onValueChange={(value) => handleFilterChange("specialization", value)}
      >
        <SelectTrigger className="rtl:flex-row-reverse h-14 text-primary">
          <div className="flex gap-x-2 items-center rtl:flex-row-reverse">
            <HiOutlineAdjustmentsHorizontal className="size-5 text-primary" />
            <SelectValue placeholder={dataLang("hero.select_specialty")} />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="w-full text-primary">
              {dataLang("hero.select_specialty")}
            </SelectLabel>
            <SelectItem value={'null'} className="text-primary">{dataLang("hero.select_none")}</SelectItem>
            {data?.specializations?.map((e: any, i: number) => (
              <SelectItem key={i} value={e.id}>
                <p className="text-primary">{e.name}</p>
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
        <SelectTrigger className="rtl:flex-row-reverse h-14 text-primary">
        <div className="flex gap-x-2 items-center rtl:flex-row-reverse">
            <FaLanguage className="size-5 text-primary" />
            <SelectValue className="text-primary" placeholder={dataLang("hero.select_study_level")} />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="text-primary">{dataLang("hero.select_study_level")}</SelectLabel>
            <SelectItem className="text-primary" value={'null'}>{dataLang("hero.select_none")}</SelectItem>
            {data?.levels?.map((e: any, i: number) => (
              <SelectItem className="text-primary" key={i} value={e.id}>
                {e.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Select Language */}
      {/* <Select onValueChange={(value) => handleFilterChange("language", value)}>
        <SelectTrigger className="rtl:flex-row-reverse h-14 text-primary">
        <div className="flex gap-x-2 items-center rtl:flex-row-reverse">
            <SlBadge className="size-5 text-primary" />
          <SelectValue className="text-primary" placeholder={dataLang("hero.select_language")} />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="text-primary">{dataLang("hero.select_language")}</SelectLabel>
            <SelectItem className="text-primary" value={'null'}>{dataLang("hero.select_none")}</SelectItem>
            {data?.languages?.map((e: any, i: number) => (
              <SelectItem className="text-primary" key={i} value={e.id}>
                {e.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select> */}

      {/* Select Year */}
      {col && <Select onValueChange={(value) => handleFilterChange("years", value)}>
        <SelectTrigger className="rtl:flex-row-reverse h-14 text-primary">
        <div className="flex gap-x-2 items-center rtl:flex-row-reverse">
            <MdOutlineAccessTimeFilled className="size-5 text-primary" />
            <SelectValue className="text-primary" placeholder={dataLang("hero.select_years")} />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="text-primary">{dataLang("hero.select_years")}</SelectLabel>
            <SelectItem className="text-primary" value={'null'}>{dataLang("hero.select_none")}</SelectItem>
            {[...new Array(6)].map((e: any, i: number) => (
              <SelectItem className="text-primary" key={i} value={`${i + 1}`}>
                {i + 1}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>}

      <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border rounded">
        <AccordionTrigger small>
          <span className="text-sm text-primary">{dataLang("hero.select_language")}</span>
        </AccordionTrigger>
        <AccordionContent className="flex justify-between gap-3 text-gray-600">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
           التركية 
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
           الانجليزية 
          </label>
        </div>
        </AccordionContent>
      </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border rounded">
        <AccordionTrigger small>
        <span className="text-sm text-primary">اختر تكلفة الدراسة</span>
        </AccordionTrigger>
        <AccordionContent className="flex justify-between gap-3 text-gray-600">
          <div className="flex flex-col items-center gap-2">
            <span>الحد الادني</span>
            <Input placeholder="ادخل الحد الادني"/>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span>الحد الاقصي</span>
            <Input placeholder="ادخل الحد الاقصي"/>
          </div>
        </AccordionContent>
      </AccordionItem>
      </Accordion>
     

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
