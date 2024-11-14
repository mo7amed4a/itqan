import Image from "next/image";
import React from "react";
import img1 from "../../public/logo/why.png";
import { TFunction } from "i18next";
export default function WhyItqan({
  t,
  data
}: {
  t: TFunction<"home", undefined>;
  data: any
}) {
  return (
    <div className="bg-orange-50 h-auto">
      <div className="flex flex-col-reverse md:flex-row items-center md:gap-x-20 py-10 px-4 container mx-auto">
        <div className="space-y-4 lg:w-3/5">
          <h1 className="text-lg md:text-2xl md:text-start  text-primary font-bold">
            {/* {t("whyItqan.title")} */}
            {data.why_title}
          </h1>
          <div className="custom-bullet [&>ul]:text-sm [&>ul]:md:text-xl [&>ul]:text-start [&>ul]:items-start [&>ul]:space-y-1 [&>ul]:md:ps-2"
      dangerouslySetInnerHTML={{ __html: data.why_details }}
    />
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
