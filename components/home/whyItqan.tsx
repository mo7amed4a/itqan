import Image from "next/image";
import React from "react";
import img1 from "../../public/images/77.png";
import { TFunction } from "i18next";
export default function WhyItqan({
  t,
  data,
}: {
  t: TFunction<"home", undefined>;
  data: any;
}) {
  return (
    <div className="bg-orange-50 h-auto relative">
      <div className="flex flex-col-reverse md:flex-row items-center md:gap-x-20 py-10 px-4 md:w-[85vw] mx-auto">
        <div className="space-y-4 lg:w-3/5 relative z-10 py-20">
          <h1 className="text-lg md:text-3xl md:text-center  text-primary font-bold md:mb-10">
            {data.why_title}
          </h1>
          <div
            className="custom-bullet [&>ul]:text-base [&>ul]:md:text-2xl [&>ul]:text-start [&>ul]:items-start [&>ul]:space-y-5 [&>ul]:md:ps-2"
            dangerouslySetInnerHTML={{ __html: data.why_details }}
          />
        </div>
        {/* <div> */}
          <Image
            src={img1}
            alt="why-choose-us"
            className="size-full absolute inset-0 z-0 hidden md:block"
            width={2000}
            height={2000}
          />
        {/* </div> */}
      </div>
    </div>
  );
}
