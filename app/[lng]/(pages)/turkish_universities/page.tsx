import { Button } from "flowbite-react";
import React from "react";
import Image from "next/image";
import img1 from "../../../../public/images/for-blog.png";
import LinkApp from "../../../../components/global/LinkApp";
import { useTranslation } from "../../../../i18n";
import CardUniversity, {
  UniversityType,
} from "../../../../components/home/CardUniversity";
import { PaginationApp } from "../../../../components/global/pagination";
import { getData } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CustomCarousel } from "@/components/ui/CustomCarousel";

export default async function UniversitiesPage({
  params,
  searchParams,
}: {
  params: { lng: string };
  searchParams: {
    category: string;
  };
}) {
  const lng = params.lng;
  const { t } = await useTranslation(lng, "turkish_universities");

  let data = null;
  let url = "/tukey_universities";
  if (searchParams.category) {
    url = `/tukey_universities?category_id=${searchParams.category}`;
  }

  const response = await getData(url, lng);
  data = response?.data;

  const pagination = data?.paginated_universities?.pagination || null;

  return (
    <div className="my-10 container mx-auto space-y- p-4">
      <div className="flex justify-center items-center text-center">
        <h2 className="text-lg font-bold text-gray-500 md:text-2xl">
          {t("title")}
        </h2>
      </div>
      <div>
        <ul className="flex gap-4 [&>li]:pb-2 overflow-x-auto hidden-scrollbar text-base md:text-lg mb-5">
          {data &&
            data.categories &&
            data.categories.length > 0 &&
            data.categories?.map((item: any, index: number) => {
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
                  <LinkApp
                    href={`/turkish_universities?category=${item.id}`}
                    lng={lng}
                  >
                    {item.name}
                  </LinkApp>
                </li>
              );
            })}
        </ul>
      </div>

      <div className="space-y-10">
        <h1 className="text-lg font-bold text-gray-500 md:text-2xl">
          {t("mostRanked")}
        </h1>

        {data &&
            data.featured_universities && data.featured_universities.length > 0 &&<CustomCarousel lng={lng}>
          { data.featured_universities.map((item: UniversityType) => (
              <CarouselItem
                key={item.id}
                className="h-full group bg-white rounded-2xl hover:shadow-md"
              >
                <div className="grid lg:grid-cols-2 w-full">
                  <div className="space-y-3 text-lg text-gray-600 order-2 p-6">
                    <div className="flex gap-x-4 items-center">
                      <Image
                        src={item.logo}
                        alt="img"
                        width={300}
                        height={300}
                        className="w-24 h-24 rounded-full"
                      />
                      <h2 className="text-lg md:text-xl font-bold text-gray-500">
                        {/* {t("universityInfo.name")} */}
                        {item.name}
                      </h2>
                    </div>
                    <p
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></p>
                    {/* <p>{t("universityInfo.description")}</p> */}
                    <div className="flex gap-x-4 text-primary ">
                      <div className="flex gap-x-2">
                        <span>{t("universityInfo.establishmentYear")} :</span>
                        <span>{item.found_year}</span>
                      </div>
                      <div className="flex gap-x-2">
                        <span>{t("universityInfo.ranking")} :</span>
                        <span>{item.global_rank}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-secondary">{t("topMajors")} :</h2>
                      <ul className="flex flex-wrap gap-x-10 text-base text-gray-500">
                        {item?.first_programs && item?.first_programs.length > 0 && item?.first_programs.map(
                          (program: any, index: number) => {
                            return (
                              <li className="list" key={index}>
                                {program}
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                    <div className="flex gap-8">
                      <span className="text-secondary">
                        {t("universityInfo.startingPrices")} :{" "}
                      </span>
                      <span className="flex gap-x-2 text-sm">
                        <span>{t("universityInfo.priceRange.from")}</span>{" "}
                        <span>{item.min_annual_fees}</span>
                      </span>
                      <span className="flex gap-x-2 text-sm">
                        <span>{t("universityInfo.priceRange.to")}</span>{" "}
                        <span>{item.max_annual_fees}</span>
                      </span>
                    </div>
                    <div className="flex justify-center">
                      <Button
                        color="primary"
                        size={"xl"}
                        className="group-hover:bg-secondary group-hover:text-white"
                      >
                        {t("universityInfo.registerNow")}
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 w-full relative overflow-hidden order-1 lg:order-2">
                    <Image
                      src={img1}
                      alt="img"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
        </CustomCarousel>}
      </div>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {data &&
          data.paginated_universities &&
          data.paginated_universities.data &&
          data.paginated_universities.data.map((item: UniversityType) => {
            return (
              <LinkApp
                key={item.id}
                href={`/universities/${item.id}`}
                lng={lng}
              >
                <CardUniversity university={item} />
              </LinkApp>
            );
          })}
      </section>
      {/* <div>
        {pagination && pagination.total > 1 && (
          <PaginationApp
            currentPage={pagination?.current_page}
            totalPages={pagination.total}
            lng={lng}
          />
        )}
      </div> */}
      <div className="flex justify-center mt-10">
        <Button
          color="primary"
          className="w-64 py-2 font-bold bg-primary text-white hover:bg-white hover:text-primary"
        >
          {t("show_more")}
        </Button>
      </div>
    </div>
  );
}
