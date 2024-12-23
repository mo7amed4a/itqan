import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { IoIosWifi } from "react-icons/io";
import { MdReduceCapacity } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";
import { MdNoMeals } from "react-icons/md";

import { MdFace } from "react-icons/md";
import { LiaBedSolid } from "react-icons/lia";

const HousingList = ({ housings, t }: { housings: any; t: any }) => {
  return (
    <>
      {housings.map((housing: any) => (
        <Card
          key={housing.id}
          className="flex flex-col md:flex-row 2xl:h-96 rounded-xl shadow-none border-none hover:shadow-md"
        >
          <CardHeader className="md:w-2/4 px-8 py-12 order-2 md:order-1 md:space-y-10">
            <div className="flex gap-4 text-start">
              <div className="space-y-2 text-gray-500">
                <h3 className="text-lg font-[600]">{housing.name}</h3>
                {/* <span className="text-base text-secondary ">
                  {housing.city}
                </span> */}
              </div>
            </div>
            {/* <div className="text-gray-500">
              <p
                dangerouslySetInnerHTML={{ __html: housing.description }}
              ></p>
            </div> */}
            <div className="text-sm grid grid-cols-3 md:flex items-end flex-wrap lg:mt-5 text-center gap-3 md:gap-4 justify-center font-[600]">
              <div className="bg-gray-50 flex flex-col items-center p-2 md:p-3 space-y-2 rounded-lg">
                <LiaBedSolid className="size-6 fill-primary" />

                <span className="text-primary border-b text-xs md:text-base text-nowrap">{t("beds")}</span>
                <p className="text-secondary py-2 text-xs md:text-base">{housing.beds}</p>
              </div>
              <div className="bg-gray-50 flex flex-col items-center p-2 md:p-3 space-y-2 rounded-lg">
                <MdNoMeals className="size-6 fill-primary" />

                <span className="text-primary border-b text-xs md:text-base text-nowrap">
                  {t("meals")}
                </span>
                <p className="text-secondary py-2 text-xs md:text-base">{housing.meals}</p>
              </div>
              <div className="bg-gray-50 flex flex-col items-center p-2 md:p-3 space-y-2 rounded-lg">
                <MdFace className="size-6 fill-primary" />

                <span className="text-primary border-b text-xs md:text-base text-nowrap">{t("type")}</span>
                <p className="text-secondary py-2 text-xs md:text-base">
                  {housing.type === "male_housing" ? t("male") : t("female")}
                </p>
              </div>
              <div className="bg-gray-50 flex flex-col items-center p-2 md:p-3 space-y-2 rounded-lg">
                <FaMoneyBills className="size-6 fill-primary" />

                <span className="text-primary border-b text-xs md:text-base text-nowrap">
                  {t("price")}
                </span>
                <p className="text-secondary py-2 text-xs md:text-base">{housing.price}</p>
              </div>
              <div className="bg-gray-50 flex flex-col items-center p-2 md:p-3 space-y-2 rounded-lg">
                <MdReduceCapacity className="size-6 fill-primary" />

                <span className="text-primary border-b text-xs md:text-base text-nowrap">
                  {t("capacity")}
                </span>
                <p className="text-secondary py-2 text-xs md:text-base">{housing.capacity}</p>
              </div>
              <div className="bg-gray-50 flex flex-col items-center p-2 md:p-3 space-y-2 rounded-lg">
                <IoIosWifi className="size-6 fill-primary" />
                <span className="text-primary border-b text-xs md:text-base text-nowrap">
                  {t("internet")}
                </span>
                <p className="text-secondary py-2 text-xs md:text-base">{housing.internet}</p>
              </div>
            </div>

            <div className="w-full md:w-3/4 mx-auto gap-2 md:gap-5 grid grid-cols-2">
              <Button className="hover:!scale-x-100 w-full md:!h-10 md:!px-4 md:!py-2" size="xs">{t("viewImage")}</Button>
              <Button className="bg-secondary hover:!scale-x-100 md:!h-10 md:!px-4 md:!py-2" size="xs">
                {t("register")}
              </Button>
            </div>
          </CardHeader>
          <CardContent className="md:w-2/4 p-4 md:order-2">
            <div className="h-72 md:h-full">
              {housing.images[0] ? (
                <Image
                  src={housing.images[0].split("http://").join("https://")}
                  alt={housing.name}
                  width={2500}
                  height={2500}
                  className="size-full rounded-xl"
                />
              ) : (
                // <img src={housing.images[0]} alt={housing.name} className="w-full h-40 object-cover rounded-md" />
                <div className="bg-gray-200 w-full h-full rounded-md flex items-center justify-center">
                  <span className="text-gray-500">{t("no_image")}</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default HousingList;
