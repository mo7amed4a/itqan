import { TFunction } from "i18next";
import { Button } from "../ui/button";

import { getData } from "@/lib/data";
import FilterSelect from "./Filter";
import BookingFixed from "../fixedCps/BookingFixed";
import LinkApp from "../global/LinkApp";
import OpenBooking from "../fixedCps/OpenBooking";

export default async function HeroSection({
  dataLang,
  locale,
}: {
  dataLang: TFunction<"home", undefined>;
  locale: string;
}) {
  return (
    <div
      className={`bg-hero p-6 ${locale === "en" && "transform -scale-x-100"}`}
    >
      <div
        className={`h-screen md:h-[85vh] max-w-[90rem] mx-auto flex flex-col items-center ${
          locale === "en" ? "lg:flex-row justify-end" : "lg:flex-row-reverse"
        }`}
      >
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0"></div>

        <div
          className={`w-full lg:w-3/4 flex flex-col items-center text-center space-y-6 ${
            locale === "en" && "transform -scale-x-100"
          }`}
        >
          <h1 className="text-xl md:text-3xl lg:text-[2.5rem] font-bold text-gray-700 text-opacity-80 !leading-[1.35]">
            {dataLang("hero.title")}
          </h1>
          <h2 className="text-lg md:text-xl lg:text-[2.5rem] text-secondary font-bold">
            {dataLang("hero.subtitle")}
          </h2>
          <div className="space-y-4 flex flex-col w-2/3 md:w-2/4 px-0 py-0 text-[10px] md:px-2 md:py-1 md:text-base">
            <OpenBooking>
              <Button size={"xl"} variant={"secondary"} className="w-full">
                {dataLang("hero.register_now")}
              </Button>
            </OpenBooking>
            <LinkApp href="/registration_rules" lng={locale}>
            <Button
              size={"xl"}
              variant={"outline"}
              className="border border-primary text-primary w-full"
            >
              {dataLang("hero.steps")}
            </Button>
            </LinkApp>
            <LinkApp href="/turkish_universities" lng={locale}>
              <Button size={"xl"} className="w-full">
                {dataLang("hero.choose_study")}
              </Button>
            </LinkApp>
          </div>

          <div className="w-full">
            <FilterSelect lng={locale} />
          </div>
        </div>
      </div>
    </div>
  );
}
