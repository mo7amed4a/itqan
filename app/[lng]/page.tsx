import HeroSection from "../../components/home/hero";
import SectionApp from "../../components/home/section";
import CardSmall from "../../components/cards/card-small";
import FormBooking from "../../components/home/form-booking";
import CardUniversity, {
  UniversityType,
} from "../../components/home/CardUniversity";
import WhyItqan from "../../components/home/whyItqan";
import { useTranslation } from "../../i18n";
import Image from "next/image";
import img1 from "../../public/images/form-logo.png";
import img2 from "../../public/images/bg-form.png";
import imgSection from "../../public/screen/section.jpeg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getData } from "@/lib/data";
import LinkApp from "@/components/global/LinkApp";
import VideoTwo from "@/components/home/videoTwo";
import { Button } from "@/components/ui/button";
import Numbers from "@/components/home/numbers";
import Photos from "@/components/home/photos";
import RegistrationCompleteStep from "@/components/home/registration-complete-step";
import Videos from "@/components/home/videos";
import BlogForHome from "@/components/home/blogForHome";
import CardUniversityTwo from "@/components/home/CardUniversityTwo";


export default async function Page({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  const { t } = await useTranslation(lng, "home");
  const response = await getData("/get_home", lng);
  const res_Settings = await getData("/get_settings", lng);

  const data = response?.data;
  const settings = res_Settings?.data;

  return (
    <main className="space-y-">
      {settings && <HeroSection locale={lng} data={settings}/>}
      <section className="bg-white py-8">
        <VideoTwo
          url={settings?.consult_url}
          text={t("videoCall.text")}
          btn={t("videoCall.booking_now")}
          lng={lng}
        />
        {/* <VideoCall dataVideoCall={t} locale={lng} /> */}
      </section>
      <div className="bg-[#f5f7f9] mt-10">
        {/* ماذا تقدم */}
        <SectionApp
          title={t("WhatService.title2")}
          title2={t("WhatService.title")}
          className="container lg:max-w-[85vw] mx-auto"
        >
          <div>
            <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-4 px-4 md:px-0">
              {data &&
                data.services &&
                data.services.length > 0 &&
                data.services.slice(0, 4).map((e: any) => (
                  <div className="pb-8" key={e.id}>
                    <CardSmall services imageUrl={e.image} text={e.name} />
                  </div>
                ))}
            </div>

            <LinkApp
              href="/services"
              lng={lng}
              className="flex justify-center mt-7"
            >
              <Button
                color="primary"
                size="xl"
                className="bg-primary px-10 lg:!px-28 hover:!scale-x-100 hover:bg-secondary hover:text-white"
              >
                {t("WhatService.read_more")}
              </Button>
            </LinkApp>
          </div>
        </SectionApp>
        {/* اهم التخصصات */}
        <SectionApp
          title={t("specialties.title")}
          className="container lg:max-w-[85vw] mx-auto"
        >
          <>
            <Carousel>
              <CarouselContent className="md:h-80">
                {data &&
                  data.specializations &&
                  data.specializations.length > 0 &&
                  data.specializations.map((e: any) => (
                    <CarouselItem
                      className="basis-1/2 md:basis-1/5 pb-8"
                      key={e.id}
                    >
                      <LinkApp href={`/programs/${e.slug}`} lng={lng}>
                        <CardSmall university_count={e.university_count} imageUrl={e.image} text={e.name} />
                      </LinkApp>
                    </CarouselItem>
                  ))}
              </CarouselContent>
            </Carousel>
            <LinkApp
              href="/programs"
              lng={lng}
              className="flex justify-center mt-7"
            >
              <Button
                color="primary"
                size="xl"
                className="bg-primary px-10 lg:!px-28 hover:!scale-x-100 hover:bg-secondary hover:text-white"
              >
                {t("WhatService.read_more")}
              </Button>
            </LinkApp>
          </>
        </SectionApp>
        {/* ارقام واحصائيات */}
        <SectionApp
          title="اتقان التعليمية"
          title2={"ارقام واحصائيات"}
          className="container lg:max-w-[85vw] mx-auto"
        >
          <>
          <Numbers />
          </>
        </SectionApp>
        {/* موثوقون معتمدون */}
        <SectionApp
          title="من افضل الجامعات"
          title2={"موثوقون معتمدون"}
          className="container lg:max-w-[85vw] mx-auto"
        >
          <>
          <Photos data={data?.university_logos}/>
          </>
        </SectionApp>
        <SectionApp
          title={t("best_universities.title")}
          className="container lg:max-w-[85vw] mx-auto"
        >
          <Carousel>
            <CarouselContent className="px-10 md:px-0">
              {data &&
                data.turkish_universities &&
                data.turkish_universities.map((item: UniversityType) => (
                  <CarouselItem
                    className="md:basis-1/2 lg:basis-1/3 pb-8"
                    key={item.id}
                  >
                    <LinkApp href={`/turkish-universities//${item.id}`} lng={lng}>
                      <CardUniversityTwo
                        major={t("topMajors")}
                        btnText={t("form_booking.submit")}
                        university={item}
                      />
                    </LinkApp>
                  </CarouselItem>
                ))}
            </CarouselContent>
          </Carousel>
        </SectionApp>
        <SectionApp
          title={t("best_universitiesTwo.title")}
          className="container lg:max-w-[85vw] mx-auto"
        >
          <Carousel>
            <CarouselContent className="px-10 md:px-0">
              {data &&
                data.qyprus_universities &&
                data.qyprus_universities.map((item: UniversityType) => (
                  <CarouselItem
                    className="md:basis-1/2 lg:basis-1/3 pb-8"
                    key={item.id}
                  >
                    <LinkApp href={`/cyprus-universities/${item.id}`} lng={lng}>
                      <CardUniversity
                        major={t("topMajors")}
                        btnText={t("form_booking.submit")}
                        university={item}
                      />
                    </LinkApp>
                  </CarouselItem>
                ))}
            </CarouselContent>
          </Carousel>
        </SectionApp>
        <div className="bg-white py-10">
          <SectionApp
            title={"التسجيل بالجامعة"}
            title2="خطوات"
            className=""
          >
            <>
            <RegistrationCompleteStep />
            </>
          </SectionApp>
        </div>
        <div className="bg-white">
          <div className="container lg:max-w-[85vw] mx-auto">
            <Image src={imgSection} className="w-full h-auto" width={2000} height={2000} alt="section" />
          </div>
        </div>
        {/* videos */}
        <div className="mb-20 bg-white py-20">
          <Videos data={data.videos} />
        </div>

        <SectionApp
          title="المقالات ومركز المعلومات"
          className="container lg:max-w-[85vw] mx-auto"
        >
          <>
          <BlogForHome data={data.blog} lng={lng} />
          </>
        </SectionApp>

        {/* {data && data.settings && <WhyItqan data={data.settings} t={t} />} */}
        <section className="flex md:h-[70vh] px-4 md:px-0 bg-white">
          <div className="md:w-9/12 flex justify-center items-center w-full py-8 relative">
            <div className="w-full md:w-2/4 relative z-10">
              {settings && <FormBooking lng={lng} data={settings}/>}
            </div>
            <Image
              src={img2}
              alt="form"
              className="absolute size-full mx-auto opacity-60"
              width={2000}
              height={2000}
            />
          </div>
          <div className="hidden md:flex md:w-4/12 bg-primary items-center justify-center">
            <Image
              src={img1}
              alt="form"
              className="w-10/12 h-72 mx-auto"
              width={700}
              height={700}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
