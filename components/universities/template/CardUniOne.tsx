import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useTranslation } from "@/i18n";
import Image from "next/image";
import React from "react";

export default async function CardUniOne({
  university,
  lng,
}: {
  university: any;
  lng: string;
}) {
  const {t} = await useTranslation(lng, "university_details");
  return (
    <section className="container lg:max-w-[85vw] mx-auto px-4 mb-5">
      <Card className="flex flex-col w-full md:flex-row md:h-96 rounded-xl shadow-none border-none hover:shadow-md">
        <CardHeader className="md:w-2/4 p-5 py-12 order-2 md:order-1">
          <div className="flex gap-4">
            <Avatar className="size-24">
              <AvatarImage className="p-4" src={university.logo.split("http://").join("https://")} alt={university.name} />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            {/* <div>
              <Image
                src={university.logo.split("http://").join("https://")}
                alt=""
                width={700}
                height={700}
                className="h-20 w-24 rounded-xl"
              />
            </div> */}
            <div className="space-y-2 flex flex-col justify-center text-gray-500">
              <span className="text-lg font-[600]">{university.name}</span>
              {/* <p className="text-sm text-primary">turkish - jkn</p>
              <span className="text-sm text-secondary">komkm</span> */}
            </div>
          </div>
          <div className="text-gray-500 pt-3 pb-4 md:ps-4">
            <p
              className="line-clamp-4"
              dangerouslySetInnerHTML={{
                __html: university.short_description,
              }}
            ></p>
          </div>
          <div className="text-sm flex text-center gap-4 justify-center">
            <div className="bg-gray-50 py-3 px-5 space-y-2 rounded-lg">
              <span className="text-primary text-base">
                {t("university.globalRank")}
              </span>
              <p className="text-secondary">{university.global_rank}</p>
            </div>
            <div className="bg-gray-50 py-3 px-5 space-y-2 rounded-lg">
              <span className="text-primary text-base">
                {t("university.localRank")}
              </span>
              <p className="text-secondary">{university.local_rate}</p>
            </div>
            <div className="bg-gray-50 py-3 px-5 space-y-2 rounded-lg">
              <span className="text-primary text-base">
                {t("university.studentsCount")}
              </span>
              <p className="text-secondary">{university.student_count}</p>
            </div>
          </div>
          {/* <div className="bg-gray-400/10 text-gray-800 flex justify-between w-full gap-4 rounded-lg text-sm p-3 ">
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-4 items-center">
                  <svg className="size-4" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <title>tag_round [#1174]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-260.000000, -2959.000000)" fill="#20837F"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M207.977728,2804.02015 L207.977728,2804.02015 C207.977728,2803.44427 208.445082,2802.97689 209.020929,2802.97689 C209.596777,2802.97689 210.064131,2803.44427 210.064131,2804.02015 C210.064131,2804.59603 209.596777,2805.0634 209.020929,2805.0634 C208.445082,2805.0634 207.977728,2804.59603 207.977728,2804.02015 L207.977728,2804.02015 Z M215.274923,2816.17617 L206.239754,2807.14053 C206.141693,2807.04246 206.087446,2806.90997 206.087446,2806.77121 L206.087446,2802.12977 C206.087446,2801.55285 206.553757,2801.08547 207.130648,2801.08547 L211.771852,2801.08547 C211.910598,2801.08547 212.043084,2801.14076 212.141145,2801.23883 L221.176314,2810.27447 C221.583163,2810.68238 221.583163,2811.34276 221.176314,2811.74963 L216.75001,2816.17617 C216.343161,2816.58304 215.682815,2816.58304 215.274923,2816.17617 L215.274923,2816.17617 Z M219.933861,2806.08162 L219.933861,2806.08162 C219.76069,2805.9074 212.984052,2799.13145 213.158267,2799.30463 C212.962145,2799.10954 212.697172,2799 212.420723,2799 L206.087446,2799 C204.934709,2799 204,2799.93371 204,2801.08547 L204,2807.42012 C204,2807.69658 204.110579,2807.96157 204.305658,2808.1577 L214.537379,2818.38891 C215.35212,2819.2037 216.672813,2819.2037 217.487553,2818.38891 L217.487553,2818.38891 C217.673243,2818.20321 223.454666,2812.42253 223.388945,2812.48721 C224.203685,2811.67243 224.203685,2810.35167 223.388945,2809.53689 L219.933861,2806.08162 Z" id="tag_round-[#1174]"> </path> </g> </g> </g> </g></svg>
                  <span>{t("fees.label")}</span>
              </div>
                <span className="text-secondary">{university.total_fees}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-4 items-center">
              <svg className="size-5" viewBox="0 -4 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <title>money_round [#1181]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-380.000000, -2923.000000)" fill="#20837F"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M332,2769 C332,2767.895 332.895,2767 334,2767 C335.105,2767 336,2767.895 336,2769 C336,2770.105 335.105,2771 334,2771 C332.895,2771 332,2770.105 332,2769 L332,2769 Z M340.343,2765 C341.972,2765 342,2765.384 342,2766.657 L340.343,2765 Z M340.343,2773 L342,2771.343 C342,2772.97 341.62,2773 340.343,2773 L340.343,2773 Z M326,2771.343 L327.657,2773 C326.03,2773 326,2772.62 326,2771.343 L326,2771.343 Z M327.657,2765 L326,2766.657 C326,2765.028 326.384,2765 327.657,2765 L327.657,2765 Z M337.515,2765 L341.515,2769 L337.515,2773 L330.485,2773 L326.485,2769 L330.485,2765 L337.515,2765 Z M342,2763 L326,2763 C324.895,2763 324,2763.895 324,2765 L324,2773 C324,2774.105 324.895,2775 326,2775 L342,2775 C343.105,2775 344,2774.105 344,2773 L344,2765 C344,2763.895 343.105,2763 342,2763 L342,2763 Z" id="money_round-[#1181]"> </path> </g> </g> </g> </g></svg>
              <span>{t("fees.label")}</span>
              </div>
                <span className="text-secondary">{university.total_fees}</span>
            </div>
          </div> */}
        </CardHeader>
        <CardContent className="md:w-2/4 p-4 md:order-2">
          <Image
            src={university.image.split("http://").join("https://")}
            alt=""
            width={500}
            height={500}
            className="size-full rounded-xl"
          />
        </CardContent>
      </Card>
    </section>
  );
}
