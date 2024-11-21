import React from "react";
import { useTranslation } from "../../../../i18n";
import LinkApp from "../../../../components/global/LinkApp";
import CardSmall from "../../../../components/cards/card-small";
import { Button } from "flowbite-react";
import Image from "next/image";
import img1 from "../../../../public/images/for-blog.png";
import FormBooking from "../../../../components/home/form-booking";
import { getData } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    <div className="my-10 space-y-10 text-start">
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
                data.cats?.map((item: any) => {
                  return (
                    <li
                      key={item.id}
                      className={
                        searchParams.category === `${item.id}`
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
                        <CardSmall imageUrl={item.image} text={item.name} />
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
                {data.services[0].name}
              </h1>

              <Carousel>
                <CarouselContent className="h-auto">
                  {data.services[0].services.map((item: any) => (
                    <CarouselItem
                      className="basis-1/2 md:basis-1/5 pb-8"
                      key={item.id}
                    >
                      <CardSmall imageUrl={item.image} text={item.name} />
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
        <div className="bg-primary h-96 flex flex-col space-y-10 justify-center items-center  text-center px-7">
          <h1 className="text-lg md:text-2xl font-bold text-gray-100">
            {t("sectionText")}
          </h1>
          <Button
            color="primary"
            size="lg"
            className="bg-primary text-white hover:bg-white hover:text-primary"
          >
            {t("sectionButton")}
          </Button>
        </div>
      </section>
      <section className="container mx-auto  px-4">
        <h1 className="my-10 text-lg md:text-2xl font-bold text-gray-500">
          {t('post_admission_services')}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dataHousings &&
            dataHousings?.housings &&
            dataHousings?.housings?.length > 0 &&
            dataHousings?.housings?.map((housing: any) => (<div
                key={housing.id}
                className="bg-white rounded-xl flex flex-col md:flex-row items-center gap-8 text-center md:text-start overflow-hidden"
              >
                <Image
                  src={housing.images[0]||''}
                  className="w-full md:w-auto h-40 md:h-auto"
                  alt="alt"
                  width={150}
                  height={150}
                />
                <div className="space-y-2 py-8">
                  <h3 className="text-lg md:text-xl font-bold">
                    {housing.name}
                  </h3>
                  <p dangerouslySetInnerHTML={{ __html: housing.description }} className="text-sm md:text-base  text-gray-500 prose lg:prose-xl"></p>
                </div>
              </div>
            ))}
        </div>
      </section>
      <section>
        <div className="bg-primary/80 h-96 flex flex-col space-y-10 justify-center items-center px-7 text-center">
          <h1 className="text-lg md:text-3xl font-bold text-primary">
            {t("sectionText2")}
          </h1>
          <Button
            color="primary"
            size="lg"
            className="bg-red-500 text-white hover:bg-white hover:text-red-500"
          >
            {t("sectionButton")}
          </Button>
        </div>
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
            <h2 className="text-base md:text-2xl font-bold text-primary">
              {t("contactUs.subtitle")}
              <span className="text-red-500"> {t("contactUs.hour")}</span>
            </h2>

            <ul className="mt-8 text-base md:text-lg text-gray-500">
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
