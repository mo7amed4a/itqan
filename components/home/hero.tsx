import { Button, Select } from "flowbite-react";
import { TFunction } from "i18next";

export default function HeroSection({ data ,dataLang, locale }: {
  data: any,
  dataLang: TFunction<"home", undefined>,
  locale: string
}) {

  return (
    <div
      className={`bg-hero p-6 ${
        locale === "en" && "transform -scale-x-100"
      }`}
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
          <h1 className="text-3xl lg:text-5xl font-bold text-primary/90">
            {dataLang('hero.title')}
          </h1>
          <h2 className="text-xl lg:text-3xl text-red-600/80">
            {dataLang('hero.subtitle')}
          </h2>
          <div className="space-y-4 flex flex-col w-2/3 md:w-2/4 px-0 py-0 text-[10px] md:px-2 md:py-1 md:text-base">
            <Button color="failure" >
              {dataLang("hero.register_now")}
            </Button>
            <Button
              color="light"
              className="text-primary border-primary px-0 py-0 text-[10px] md:px-2 md:py-1 md:text-base"
            >
              {dataLang('hero.steps')}
            </Button>
            <Button color="primary" className="px-0 py-0 text-[10px] md:px-2 md:py-1 md:text-base">
              {dataLang('hero.choose_study')}
            </Button>
          </div>

          <div className="w-full">
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 bg-primary/40 rounded p-4">
              <Select id="specialty" required>
                {data && data.specializations && data.specializations.map((e: any, i: number) => <option key={i} value={e.name}>{e.name}</option>)}
              </Select>
              <Select id="studyLevel" required>
              {data && data.levels && data.levels.map((e: any, i: number) => <option key={i} value={e.name}>{e.name}</option>)}
              </Select>
              <Select id="language" required>
              {data && data.languages && data.languages.map((e: any, i: number) => <option key={i} value={e.name}>{e.name}</option>)}
              </Select>
              <Button color="primary">{dataLang('hero.search')}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
