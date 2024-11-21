import { TFunction } from "i18next";
import { Button } from "../ui/button";

import { getData } from "@/lib/data";
import FilterSelect from "./Filter";

export default async function HeroSection({
  dataLang,
  locale,
}: {
  dataLang: TFunction<"home", undefined>;
  locale: string;
}) {
  const response = await getData("/filters", locale);
  const data = response?.data;
  return (
    <div
      className={`bg-hero p-6 ${locale === "en" && "transform -scale-x-100"}`}
    >
      <div
        className={`h-[85vh] container mx-auto flex flex-col items-center ${
          locale === "en" ? "lg:flex-row justify-end" : "lg:flex-row-reverse"
        }`}
      >
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0"></div>

        <div
          className={`w-full lg:w-1/2 flex flex-col items-center text-center space-y-6 ${
            locale === "en" && "transform -scale-x-100"
          }`}
        >
          <h1 className="text-3xl lg:text-5xl font-bold text-primary">
            {dataLang("hero.title")}
          </h1>
          <h2 className="text-xl lg:text-3xl text-red-600/80">
            {dataLang("hero.subtitle")}
          </h2>
          <div className="space-y-4 flex flex-col w-2/3 md:w-2/4 px-0 py-0 text-[10px] md:px-2 md:py-1 md:text-base">
            <Button variant="destructive">
              {dataLang("hero.register_now")}
            </Button>
            <Button
              // variant="pr"
              variant={"outline"}
              className="border border-primary text-primary"
              // className="text-primary border-primary px-0 py-0 text-[10px] md:px-2 md:py-1 md:text-base"
            >
              {dataLang("hero.steps")}
            </Button>
            <Button>{dataLang("hero.choose_study")}</Button>
          </div>

          <div className="w-full">
            <FilterSelect lng={locale} data={data}/>
          </div>
        </div>
      </div>
    </div>
  );
}
