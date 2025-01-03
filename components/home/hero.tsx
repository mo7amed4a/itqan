'use client';
import { Button } from "../ui/button";

import LinkApp from "../global/LinkApp";
import OpenBooking from "../fixedCps/OpenBooking";
import Image from "next/image";
import { useTranslation } from "@/i18n/client";
import { useEffect, useState } from "react";
import FilterSelectHero from "./FilterHero";

export default function HeroSection({
  locale,
  data
}: {
  locale: string;
  data: {
    slider_title: string;
    slider_title2: string;
    slider_bg_web: string;
    slider_image_web: string;
    slider_bg_mobile: string;
    slider_image_mobile: string;
  }
}) {
  const {t: dataLang} = useTranslation(locale, "home");
  // const data = {
  //   site_name: "Itqan Education",
  //   meta_tags: "Itqan Education",
  //   meta_description: "Itqan Education",
  //   facebook: "https://www.facebook.com/itqanstudy",
  //   instagram: "https://www.instagram.com/itqanstudy",
  //   twitter: "#",
  //   tiktok: "#",
  //   whatsapp: "https://wa.me/message/E57POZ566FLCP1",
  //   youtube: "#",
  //   phone: "+905069300007",
  //   email: "info@itqaneducation.com",
  //   slider_title: "Register now and get a free consultation",
  //   slider_title2: "About Turkish Universities",
  //   why_title:
  //     "How can we help you and what you need to know about the student's orientation?",
  //   why_details:
  //     "<ul>     <li>Etqan strives for academic excellence for students.</li>     <li>It offers educational programs tailored to each age group.</li>     <li>It uses the latest technological tools in education.</li>     <li>It provides education aligned with the job market's requirements.</li>     <li>It contributes to developing students' critical thinking skills.</li>     <li>It offers an interactive learning environment that encourages innovation and creativity.</li> </ul>",
  //   footer_text:
  //     "A leading academic consulting company in the field of student registration in Turkish universities, international schools and language institutes.",
  //   address: "Istanbul - Fatih - Findikzade Station",
  //   slider_image_web:
  //     "https://admin.itqaneducation.com/storage/settings/gUqz5VwadnrZmYMvgMAI3Yoxr0QMNxucuTaDyXZf.png",
  //   consult_url: "https://wa.me/message/E57POZ566FLCP1",
  //   slider_bg_mobile:
  //     "https://admin.itqaneducation.com/storage/settings/zKyLCvpb6XJfgLK4l45WfOiRnDIQatEL9TQBADWB.png",
  //   slider_bg_web:
  //     "https://admin.itqaneducation.com/storage/settings/sysTPAOYwUNeEAitKD1rNLzyvCIbcC7444pk0a9l.jpg",
  //   slider_image_mobile:
  //     "https://admin.itqaneducation.com/storage/settings/Xy16EsOfwWi8Ve9lTMD9NWrW0XknZeCD4aLdOBDN.png",
  // };
  // await getData("/get_settings", locale);

  const [deviceType, setDeviceType] = useState<string|null>(null);

  useEffect(() => {
    const getDeviceType = () => {
      const ua = navigator.userAgent;
      if (/mobile/i.test(ua)) {
        return "Mobile";
      } else if (/iPad|Android|Touch/i.test(ua)) {
        return "Tablet";
      } else {
        return "Desktop";
      }
    };

    setDeviceType(getDeviceType());
  }, []);

  

  return (
    <section>
      <div
        style={{ backgroundImage: deviceType === "Mobile" ? `url(${data?.slider_bg_mobile})` : `url(${data?.slider_bg_web})` }}
        className={`bg-hero px-6 overflow-y-hidden py-10 lg:py-0`}
      >
        <div
          className={`h-auto md:h-[85vh] max-w-[90vw] mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center`}
        >
          <div
            className={`w-full lg:w-3/4 flex flex-col items-center text-center space-y-6`}
          >
            <h1 className="text-xl md:text-3xl lg:text-[2.5rem] font-bold text-gray-700 text-opacity-80 !leading-[1.35]">
              {/* {dataLang("hero.title")} */}
              {data?.slider_title}
              {/* {JSON.stringify(data)} */}
            </h1>
            <h2 className="text-lg md:text-xl lg:text-[2.5rem] text-secondary font-bold">
              {/* {dataLang("hero.subtitle")} */}
              {data?.slider_title2}
            </h2>
            {deviceType === "Mobile" &&  data.slider_image_mobile &&
            <Image src={data.slider_image_mobile} className="size-64" alt="hero" width={2500} height={2500} />
          }
            <div className="space-y-4 flex flex-col w-2/3 md:w-2/4 px-0 py-0 text-[10px] md:px-2 md:py-1 md:text-base">
              <OpenBooking>
                <Button size={"xl"} variant={"secondary"} className="w-full">
                  {dataLang("hero.register_now")}
                </Button>
              </OpenBooking>
              <LinkApp href="/registration-rules" lng={locale}>
                <Button
                  size={"xl"}
                  variant={"outline"}
                  className="border border-primary text-primary w-full"
                >
                  {dataLang("hero.steps")}
                </Button>
              </LinkApp>
              <LinkApp href="/turkish-universities" lng={locale}>
                <Button size={"xl"} className="w-full">
                  {dataLang("hero.choose_study")}
                </Button>
              </LinkApp>
            </div>

            
          </div> 
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0 h-full ltr:-scale-x-100 flex items-end justify-end">
            {deviceType === "Desktop" && data.slider_image_web &&
            <Image src={data.slider_image_web} className="h-[78%] w-[85%] lg:w-[78%]" alt="hero" width={1000} height={1000} />
          }
          </div>
        </div>
      </div>
        <div className="w-full">
          <FilterSelectHero lng={locale} />
        </div>
    </section>
  );
}
