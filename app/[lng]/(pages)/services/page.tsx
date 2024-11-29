import React from "react";
import { useTranslation } from "../../../../i18n";
import LinkApp from "../../../../components/global/LinkApp";
import CardSmall from "../../../../components/cards/card-small";
import Image from "next/image";
import img1 from "../../../../public/images/services_page.png";
import FormBooking from "../../../../components/home/form-booking";
import { getData } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export default async function Page({
  params,
  searchParams,
}: {
  params: { lng: string };
  searchParams: {
    category: string;
  };
}) {
  const lng = params.lng;
  const { t } = await useTranslation(lng, "services");

  let data = null;
  let url = "/services";

  const response = await getData(url, lng);
  data = response?.data;
  // const pagination = data?.paginated_universities?.pagination || null

  const res = await getData("/housings", lng);
  const dataHousings = res?.data;

  return (
    <div className="mt-10 space-y-10 text-start">
      <h1 className="text-center text-xl md:text-2xl font-bold text-gray-500 capitalize">
        {t("titlePage")}
      </h1>
      <section className="container mx-auto  px-4">
        <div className="flex flex-col space-y-7 mt-10">
          <div>
            <ul className="flex gap-4 [&>li]:pb-2 overflow-x-auto hidden-scrollbar text-base">
              {data &&
                data.cats &&
                data.cats.length > 0 &&
                data.cats?.map((item: any, index: number) => {
                  return (
                    <li
                      key={item.id}
                      className={
                        searchParams.category === `${item.id}`
                          ? "border-b-2 border-red-500 text-red-500"
                          : !searchParams.category && index === 0
                          ? "border-b-2 border-red-500 text-red-500"
                          : ""
                      }
                    >
                      {/* <LinkApp href="/blogs" lng={lng}>{t('links.study_in_turkey')}</LinkApp> */}
                      <LinkApp href={`/services?category=${item.id}`} lng={lng}>
                        {item.name}
                      </LinkApp>
                    </li>
                  );
                })}
            </ul>
          </div>

          {/* <XScroll>
              {
                data && data.services && data.services.map((e: any) => (
                  <CardSmall key={e.id} imageUrl={e.image} text={e.name} />
                  ))
                  }
                  </XScroll> */}
          {data &&
          data.services &&
          data.services.length > 0 &&
          searchParams.category ? (
            <div className="space-y-10">
              <h1 className="text-lg font-bold text-gray-500 md:text-xl">
                {
                  data.services.find(
                    (service: any) =>
                      service.id === parseInt(searchParams.category)
                  ).name
                }
              </h1>

              <Carousel>
                <CarouselContent className="h-auto">
                  {data.services
                    .find(
                      (service: any) =>
                        service.id === parseInt(searchParams.category)
                    )
                    .services.map((item: any) => (
                      <CarouselItem
                        className="basis-1/2 md:basis-1/5 pb-8"
                        key={item.id}
                      >
                        <CardSmall
                          services
                          imageUrl={item.image}
                          text={item.name}
                        />
                      </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          ) : (
            <div className="space-y-10">
              <h1 className="text-lg font-bold text-gray-500 md:text-xl">
                {data?.services[0]?.name}
              </h1>

              <Carousel>
                <CarouselContent className="h-auto">
                  {data?.services[0]?.services?.map((item: any) => (
                    <CarouselItem
                      className="basis-1/2 md:basis-1/5 pb-8"
                      key={item.id}
                    >
                      <CardSmall
                        services
                        imageUrl={item.image}
                        text={item.name}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          )}
        </div>
      </section>
      <section>
        <div className="bg-white h-96 flex flex-col space-y-10 justify-center items-center  text-center px-7">
          <h1 className="text-lg md:text-2xl font-bold text-gray-500">
            {t("sectionText")}
          </h1>
          <Button
            size="lg"
            className="bg-primary text-white hover:bg-white hover:text-primary"
          >
            {t("sectionButton")}
          </Button>
        </div>
      </section>
      <section className="container mx-auto  px-4">
        <h1 className="my-10 text-lg md:text-2xl font-bold text-gray-500">
          {t("post_admission_services")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dataHousings &&
            dataHousings?.housings &&
            dataHousings?.housings?.length > 0 &&
            dataHousings?.housings?.map((housing: any) => (
              <div
                key={housing.id}
                className="bg-white group hover:shadow-xl hover:scale-105 duration-300 transition-all rounded-xl flex flex-col md:flex-row items-center gap-8 text-center md:text-start overflow-hidden p-4"
              >
                {housing?.images[0] ? (
                  <Image
                    src={
                      housing?.images[0]?.image
                        .split("http://")
                        .join("https://") || ""
                    }
                    className="w-full h-64 md:w-32 md:h-28 group-hover:scale-105 duration-300 transition-all"
                    alt="alt"
                    width={700}
                    height={700}
                  />
                ) : (
                  <div className="bg-gray-200 w-full h-64 md:w-32 md:h-28 rounded-md group-hover:scale-105 duration-300 transition-all"></div>
                )}
                <div className="space-y-2 py-8">
                  <h3 className="text-lg md:text-xl font-bold group-hover:text-primary">
                    {housing.name}
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{ __html: housing.description }}
                    className="text-sm md:text-base  text-gray-500 prose lg:prose-xl"
                  ></p>
                </div>
              </div>
            ))}
        </div>
      </section>
      <section className="relative bg-primary">
        <div className="relative z-10 h-96 bg-transparent flex flex-col space-y-10 justify-center items-center px-7 text-center">
          <h1 className="text-lg md:text-3xl font-bold text-white">
            {t("sectionText2")}
          </h1>
          <Button
            size="lg"
            className="bg-secondary text-white hover:bg-white hover:text-red-500"
          >
            {t("sectionButton")}
          </Button>
        </div>
        <Image 
          alt="alt"
          width={2500}
          height={2500}
          src={img1}
          className="absolute inset-0 size-full z-0 opacity-35"
        />
      </section>

      <section className="bg-white py-10">
        <div>
          <h1 className="text-lg md:text-3xl text-gray-500 font-bold text-center">
            {t("contactUs.title")}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 container mx-auto px-4">
          <div>
            <div className="hover:shadow-md">
              <FormBooking lng={lng} />
            </div>
          </div>
          <div className="p-4 md:p-8">
            <h2 className="text-base md:text-3xl font-bold text-primary lg:w-3/5 !leading-[1.35]">
              {t("contactUs.subtitle")}
              <span className="text-red-500"> {t("contactUs.hour")}</span>
            </h2>
            <ul className="mt-8 text-base md:text-xl text-gray-500 space-y-3 !leading-[1.45]">
              <li className="list">{t("contactUs.points.a")}</li>
              <li className="list">{t("contactUs.points.b")}</li>
              <li className="list">{t("contactUs.points.c")}</li>
              <li className="list">{t("contactUs.points.d")}</li>
              <li className="list">{t("contactUs.points.e")}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
