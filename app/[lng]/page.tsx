import HeroSection from "../../components/home/hero";
import VideoCall from "../../components/home/videoCall";
import SectionApp from "../../components/home/section";
import CardSmall from "../../components/cards/card-small";
import FormBooking from "../../components/home/form-booking";
import CardUniversity, { UniversityType } from "../../components/home/CardUniversity";
import WhyItqan from "../../components/home/whyItqan";
import { Button } from "flowbite-react";
import { useTranslation } from "../../i18n";
import Image from "next/image";
import img1 from "../../public/images/form-logo.png";
import { api } from "../../lib/axios";

export default async function Page({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  const { t } = await useTranslation(lng, "home");
  const response = await api.get("/get_home");
  let data = null
  if (response?.data?.status) {
    data = response?.data?.data
  } else {
    console.log("error");
  }
  return (
    <main className="space-y-20">
      {data && <HeroSection data={data} dataLang={t} locale={lng} />}
      <VideoCall dataVideoCall={t} locale={lng} />
      <div className="bg-[#f5f7f9] my-10">
        <SectionApp
          title={t("specialties.title")}
          className="container mx-auto "
        >
          <div className="overflow-x-auto whitespace-nowrap p-4 hidden-scrollbar space-x-4 my10">
            {[1, 2, 7, 8, 9, 66, 114, 245, 87, 5454, 54256429, 3, 4].map(
              (e) => (
                <CardSmall key={e} text={"oni"} />
              )
            )}
          </div>
        </SectionApp>
        <SectionApp
          title={t("best_universities.title")}
          className="container mx-auto"
        >
          <div className="overflow-x-auto whitespace-nowrap p-4 hidden-scrollbar space-x-4 my10">
          {
              data && data.turkish_universities && data.turkish_universities.map((item: UniversityType)=> {
                return (
                  <div
                  key={item.id}
                  className="inline-block !w-128 hover:scale-105 duration-300 cursor-pointer my-4"
                >
                  <div className="w-80 md:w-[23rem]">
                    <CardUniversity university={item} />
                  </div>
                </div>
                )
              })
            }
          </div>
        </SectionApp>
        <SectionApp
          title={t("best_universitiesTwo.title")}
          className="container mx-auto"
        >
          <div className="overflow-x-auto whitespace-nowrap p-4 hidden-scrollbar space-x-4 my10">
            {
              data && data.qyprus_universities && data.qyprus_universities.map((item: UniversityType)=> {
                return (
                  <div
                  key={item.id}
                  className="inline-block !w-128 hover:scale-105 duration-300 cursor-pointer my-4"
                >
                  <div className="w-80 md:w-[23rem]">
                    <CardUniversity university={item} />
                  </div>
                </div>
                )
              })
            }
          </div>
        </SectionApp>
        {data && data.settings && <WhyItqan data={data.settings} t={t} />}

        <section className="flex md:h-[70vh] mt-10 px-4 md:px-0 bg-white">
          <div className="md:w-9/12 flex justify-center items-center w-full py-8">
            <div className="md:w-2/4 ">
              <FormBooking lng={lng} />
            </div>
          </div>
          <div className="hidden md:block md:w-3/12">
            <Image
              src={img1}
              alt="form"
              className="h-full w-full"
              width={500}
              height={500}
            />
          </div>
        </section>

        <SectionApp
          title={t("WhatService.title")}
          className="container mx-auto px-4"
        >
          <div>
            <div className="overflow-x-auto whitespace-nowrap p-4 hidden-scrollbar space-x-4 my10">
              {
                data && data.services && data.services.length > 0 && data.services.map((e: any) => (
                  <CardSmall key={e.id} imageUrl={e.image} text={e.name} />
                ))
              }
              {/* {[1, 2, 7, 8, 9, 66, 114, 245, 87, 5454, 54256429, 3, 4].map(
                (e) => (
                  <CardSmall key={e} text={"هي الحياة نص تجريبي"} />
                )
              )} */}
            </div>
            <div className="flex justify-end">
              <Button color="primary">{t("WhatService.read_more")}</Button>
            </div>
          </div>
        </SectionApp>
      </div>
    </main>
  );
}
