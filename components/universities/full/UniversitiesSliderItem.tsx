import LinkApp from "@/components/global/LinkApp";
import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import { TFunction } from "i18next";
import Image from "next/image";
import React from "react";
import img1 from "/public/images/for-blog.png";


export default function UniversitiesSliderItem({
    item,
    lng,
    t
}: {
    item: any;
    lng: string;
    t: TFunction<any, undefined>
}) {
  return (
    <CarouselItem key={item.id} className="px-4">
      <LinkApp href={`/universities/${item.id}`} lng={lng}>
        <div className="w-full h-full group !bg-white rounded-2xl hover:shadow-md text-start">
          <div className="grid lg:grid-cols-2 w-full">
            <div className="space-y-3 text-lg text-gray-600 order-2 p-6">
              <div className="flex gap-x-4 items-center">
                <Image
                  src={item.logo.split("http://").join("https://")}
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
              <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
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
                  {item?.first_programs &&
                    item?.first_programs.length > 0 &&
                    item?.first_programs.map((program: any, index: number) => {
                      return (
                        <li className="list" key={index}>
                          {program}
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className="flex gap-8">
                <span className="text-secondary">
                  {t("universityInfo.startingPrices")} :{" "}
                </span>
                <span className="flex gap-x-2 text-sm">
                  <span>{t("universityInfo.priceRange.from")}</span>{" "}
                  <span>{item.min_annual_fees}$</span>
                </span>
                <span className="flex gap-x-2 text-sm">
                  <span>{t("universityInfo.priceRange.to")}</span>{" "}
                  <span>{item.max_annual_fees}$</span>
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
            <div className="p-4 w-full relative flex items-center overflow-hidden order-1 lg:order-2">
              <Image
                src={item.image.split("http://").join("https://")}
                alt="img"
                width={300}
                height={300}
                className="w-full md:h-[27rem] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </LinkApp>
    </CarouselItem>
  );
}
