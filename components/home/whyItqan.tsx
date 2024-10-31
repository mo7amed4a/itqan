import Image from "next/image";
import React from "react";
import img1 from "../../public/logo/why.png";
import { TFunction } from "i18next";
export default function WhyItqan({
  t,
}: {
  t: TFunction<"home", undefined>;
}) {
  return (
    <div className="bg-orange-50 h-auto">
      <div className="flex flex-col-reverse md:flex-row items-center md:gap-x-20 py-10 px-4 container mx-auto">
        <div className="space-y-4 lg:w-3/5">
          <h1 className="text-lg md:text-2xl md:text-end  text-primary font-bold">
            {t("whyItqan.title")}
          </h1>
          <ul className="custom-bullet text-sm md:text-xl text-start items-start space-y-1">
            <li>{t("whyItqan.p1")}</li>
            <li>{t("whyItqan.p2")}</li>
            <li>{t("whyItqan.p3")}</li>
            <li>{t("whyItqan.p4")}</li>
          </ul>
        </div>
        <div>
          <Image
            src={img1}
            alt="why-choose-us"
            className="hiblock"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
