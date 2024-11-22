import { Button } from "flowbite-react";
import React from "react";
import CarouselApp, {
  CarouselItem,
} from "../../../../components/global/Carousel";
import Image from "next/image";
import img1 from "../../../../public/images/for-blog.png";
import LinkApp from "../../../../components/global/LinkApp";
import { useTranslation } from "../../../../i18n";
import CardUniversity, {
  UniversityType,
} from "../../../../components/home/CardUniversity";
import { PaginationApp } from "../../../../components/global/pagination";
import { getData } from "@/lib/data";

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
    <div className="my-10 container mx-auto space-y-20 p-4">
      <div className="flex justify-center items-center text-center">
        <h2 className="text-lg font-bold text-gray-500 md:text-2xl">
          {t("title")}
        </h2>
      </div>
      <div>
        <ul className="flex gap-4 [&>li]:pb-2 overflow-x-auto hidden-scrollbar text-base md:text-lg">
          {data &&
            data.categories &&
            data.categories.length > 0 &&
            data.categories?.map((item: any) => {
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

        <CarouselApp locale={lng} className="h-[35rem] py-10">
          <div className=" bg-white rounded-xl grid grid-cols-1 gap-4 lg:grid-cols-2 h-full shadow-xl p-3 ">
            <CarouselItem className="order-2 lg:order-1 flex flex-col justify-center text-start text-base space-y-4 md:px-10">
              <div className="flex gap-x-4 items-center">
                <Image
                  src={img1}
                  alt="img"
                  width={300}
                  height={300}
                  className="w-24 h-24 rounded-full"
                />
                <h2 className="text-lg font-bold text-gray-500">
                  {t("universityInfo.name")}
                </h2>
              </div>
              <p>{t("universityInfo.description")}</p>
              <div className="flex gap-x-4 text-primary">
                <div className="flex gap-x-2">
                  <b>{t("universityInfo.establishmentYear")} :</b>
                  <span>{t("universityInfo.establishedYearValue")}</span>
                </div>
                <div className="flex gap-x-2">
                  <b>{t("universityInfo.ranking")} :</b>
                  <span>{t("universityInfo.rankingNumber")}</span>
                </div>
              </div>
              <div>
                <h2 className="font-bold text-red-500">{t("topMajors")} :</h2>
                <ul className="flex gap-x-4 text-base text-gray-500">
                  <li className="list">
                    {t("universityInfo.majors.humanSciences")}
                  </li>
                  <li className="list">
                    {t("universityInfo.majors.pharmacy")}
                  </li>
                  <li className="list">
                    {t("universityInfo.majors.computerEngineering")}
                  </li>
                  <li className="list">
                    {t("universityInfo.majors.medicine")}
                  </li>
                </ul>
              </div>
              <div className="flex gap-8">
                <b className="text-red-500">
                  {t("universityInfo.startingPrices")} :{" "}
                </b>
                <span className="flex gap-x-2 text-sm">
                  <span>{t("universityInfo.priceRange.from")}</span>{" "}
                  <span>100$</span>
                </span>
                <span className="flex gap-x-2 text-sm">
                  <span>{t("universityInfo.priceRange.to")}</span>{" "}
                  <span>1000$</span>
                </span>
              </div>
              <div className="flex justify-center">
                <Button
                  color="primary"
                  className="bg-primary text-white hover:bg-white hover:text-primary"
                >
                  {t("universityInfo.registerNow")}
                </Button>
              </div>
              {/* <h1 className="text-lg font-bold text-gray-500 md:text-2xl">
                {t('slide.university_accreditations')}
              </h1>
              <p className="text-sm text-gray-400">
              {t('slide.enhance_opportunities')}
              </p> */}
            </CarouselItem>
            <div
              className={`hidden lg:block order-1 lg:order-2 h-52 lg:h-full bg-center bg-cover lg:bg-cover`}
            >
              <Image
                src={img1}
                alt="img"
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className=" bg-white rounded-xl grid grid-cols-1 gap-4 lg:grid-cols-2 h-full shadow-xl p-3 ">
            <CarouselItem className="order-2 lg:order-1 flex flex-col justify-center text-start text-base space-y-4 md:px-10">
              <div className="flex gap-x-4 items-center">
                <Image
                  src={img1}
                  alt="img"
                  width={300}
                  height={300}
                  className="w-24 h-24 rounded-full"
                />
                <h2 className="text-lg font-bold text-gray-500">
                  {t("universityInfo.name")}
                </h2>
              </div>
              <p>{t("universityInfo.description")}</p>
              <div className="flex gap-x-4 text-primary">
                <div className="flex gap-x-2">
                  <b>{t("universityInfo.establishmentYear")} :</b>
                  <span>{t("universityInfo.establishedYearValue")}</span>
                </div>
                <div className="flex gap-x-2">
                  <b>{t("universityInfo.ranking")} :</b>
                  <span>{t("universityInfo.rankingNumber")}</span>
                </div>
              </div>
              <div>
                <h2 className="font-bold text-red-500">{t("topMajors")} :</h2>
                <ul className="flex gap-x-4 text-base text-gray-500">
                  <li className="list">
                    {t("universityInfo.majors.humanSciences")}
                  </li>
                  <li className="list">
                    {t("universityInfo.majors.pharmacy")}
                  </li>
                  <li className="list">
                    {t("universityInfo.majors.computerEngineering")}
                  </li>
                  <li className="list">
                    {t("universityInfo.majors.medicine")}
                  </li>
                </ul>
              </div>
              <div className="flex gap-8">
                <b className="text-red-500">
                  {t("universityInfo.startingPrices")} :{" "}
                </b>
                <span className="flex gap-x-2 text-sm">
                  <span>{t("universityInfo.priceRange.from")}</span>{" "}
                  <span>100$</span>
                </span>
                <span className="flex gap-x-2 text-sm">
                  <span>{t("universityInfo.priceRange.to")}</span>{" "}
                  <span>1000$</span>
                </span>
              </div>
              <div className="flex justify-center">
                <Button
                  color="primary"
                  className="bg-primary text-white hover:bg-white hover:text-primary"
                >
                  {t("universityInfo.registerNow")}
                </Button>
              </div>
              {/* <h1 className="text-lg font-bold text-gray-500 md:text-2xl">
                {t('slide.university_accreditations')}
              </h1>
              <p className="text-sm text-gray-400">
              {t('slide.enhance_opportunities')}
              </p> */}
            </CarouselItem>
            <div
              className={`hidden lg:block order-1 lg:order-2 h-52 lg:h-full bg-center bg-cover lg:bg-cover`}
            >
              <Image
                src={img1}
                alt="img"
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className=" bg-white rounded-xl grid grid-cols-1 gap-4 lg:grid-cols-2 h-full shadow-xl p-3 ">
            <CarouselItem className="order-2 lg:order-1 flex flex-col justify-center text-start text-base space-y-4 md:px-10">
              <div className="flex gap-x-4 items-center">
                <Image
                  src={img1}
                  alt="img"
                  width={300}
                  height={300}
                  className="w-24 h-24 rounded-full"
                />
                <h2 className="text-lg font-bold text-gray-500">
                  {t("universityInfo.name")}
                </h2>
              </div>
              <p>{t("universityInfo.description")}</p>
              <div className="flex gap-x-4 text-primary">
                <div className="flex gap-x-2">
                  <b>{t("universityInfo.establishmentYear")} :</b>
                  <span>{t("universityInfo.establishedYearValue")}</span>
                </div>
                <div className="flex gap-x-2">
                  <b>{t("universityInfo.ranking")} :</b>
                  <span>{t("universityInfo.rankingNumber")}</span>
                </div>
              </div>
              <div>
                <h2 className="font-bold text-red-500">{t("topMajors")} :</h2>
                <ul className="flex gap-x-4 text-base text-gray-500">
                  <li className="list">
                    {t("universityInfo.majors.humanSciences")}
                  </li>
                  <li className="list">
                    {t("universityInfo.majors.pharmacy")}
                  </li>
                  <li className="list">
                    {t("universityInfo.majors.computerEngineering")}
                  </li>
                  <li className="list">
                    {t("universityInfo.majors.medicine")}
                  </li>
                </ul>
              </div>
              <div className="flex gap-8">
                <b className="text-red-500">
                  {t("universityInfo.startingPrices")} :{" "}
                </b>
                <span className="flex gap-x-2 text-sm">
                  <span>{t("universityInfo.priceRange.from")}</span>{" "}
                  <span>100$</span>
                </span>
                <span className="flex gap-x-2 text-sm">
                  <span>{t("universityInfo.priceRange.to")}</span>{" "}
                  <span>1000$</span>
                </span>
              </div>
              <div className="flex justify-center">
                <Button
                  color="primary"
                  className="bg-primary text-white hover:bg-white hover:text-primary"
                >
                  {t("universityInfo.registerNow")}
                </Button>
              </div>
              {/* <h1 className="text-lg font-bold text-gray-500 md:text-2xl">
                {t('slide.university_accreditations')}
              </h1>
              <p className="text-sm text-gray-400">
              {t('slide.enhance_opportunities')}
              </p> */}
            </CarouselItem>
            <div
              className={`hidden lg:block order-1 lg:order-2 h-52 lg:h-full bg-center bg-cover lg:bg-cover`}
            >
              <Image
                src={img1}
                alt="img"
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className=" bg-white rounded-xl grid grid-cols-1 gap-4 lg:grid-cols-2 h-full shadow-xl p-3 ">
            <CarouselItem className="order-2 lg:order-1 flex flex-col justify-center text-start text-base space-y-4 md:px-10">
              <div className="flex gap-x-4 items-center">
                <Image
                  src={img1}
                  alt="img"
                  width={300}
                  height={300}
                  className="w-24 h-24 rounded-full"
                />
                <h2 className="text-lg font-bold text-gray-500">
                  {t("universityInfo.name")}
                </h2>
              </div>
              <p>{t("universityInfo.description")}</p>
              <div className="flex gap-x-4 text-primary">
                <div className="flex gap-x-2">
                  <b>{t("universityInfo.establishmentYear")} :</b>
                  <span>{t("universityInfo.establishedYearValue")}</span>
                </div>
                <div className="flex gap-x-2">
                  <b>{t("universityInfo.ranking")} :</b>
                  <span>{t("universityInfo.rankingNumber")}</span>
                </div>
              </div>
              <div>
                <h2 className="font-bold text-red-500">{t("topMajors")} :</h2>
                <ul className="flex gap-x-4 text-base text-gray-500">
                  <li className="list">
                    {t("universityInfo.majors.humanSciences")}
                  </li>
                  <li className="list">
                    {t("universityInfo.majors.pharmacy")}
                  </li>
                  <li className="list">
                    {t("universityInfo.majors.computerEngineering")}
                  </li>
                  <li className="list">
                    {t("universityInfo.majors.medicine")}
                  </li>
                </ul>
              </div>
              <div className="flex gap-8">
                <b className="text-red-500">
                  {t("universityInfo.startingPrices")} :{" "}
                </b>
                <span className="flex gap-x-2 text-sm">
                  <span>{t("universityInfo.priceRange.from")}</span>{" "}
                  <span>100$</span>
                </span>
                <span className="flex gap-x-2 text-sm">
                  <span>{t("universityInfo.priceRange.to")}</span>{" "}
                  <span>1000$</span>
                </span>
              </div>
              <div className="flex justify-center">
                <Button
                  color="primary"
                  className="bg-primary text-white hover:bg-white hover:text-primary"
                >
                  {t("universityInfo.registerNow")}
                </Button>
              </div>
              {/* <h1 className="text-lg font-bold text-gray-500 md:text-2xl">
                {t('slide.university_accreditations')}
              </h1>
              <p className="text-sm text-gray-400">
              {t('slide.enhance_opportunities')}
              </p> */}
            </CarouselItem>
            <div
              className={`hidden lg:block order-1 lg:order-2 h-52 lg:h-full bg-center bg-cover lg:bg-cover`}
            >
              <Image
                src={img1}
                alt="img"
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </CarouselApp>
      </div>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data &&
          data.paginated_universities &&
          data.paginated_universities.data &&
          data.paginated_universities.data.map((item: UniversityType) => {
            return (
              <LinkApp key={item.id} href={`/universities/${item.id}`} lng={lng}>
                <CardUniversity  university={item} />
              </LinkApp>
            );
          })}
      </section>
      <div>
        {pagination && pagination.total > 1 && (
          <PaginationApp
            currentPage={pagination?.current_page}
            totalPages={pagination.total}
            lng={lng}
          />
        )}
      </div>
      {/* <div className="flex justify-center">
        <Button
          color="primary"
          className="w-64 py-2 font-bold bg-primary text-white hover:bg-white hover:text-primary"
        >
          {t("show_more")}
        </Button>
      </div> */}
    </div>
  );
}
