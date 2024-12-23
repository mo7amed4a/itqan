import React from "react";
import {
  useTranslation as getTranslation,
  useTranslation,
} from "../../../../../i18n";
import { getData } from "@/lib/data";
import SectionApp from "@/components/home/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CardUniversity, {
  UniversityType,
} from "@/components/home/CardUniversity";
import LinkApp from "@/components/global/LinkApp";
import ReadMoreLines from "@/components/universities/ReadMoreLines";

export async function generateMetadata({
  params,
}: {
  params: { lng: string; slug: string };
}) {
  const { lng, slug } = params;
  const { t } = await getTranslation(lng, "university_details");

  let data;
  const response = await getData("/get_settings", params.lng);
  data = response?.data;

  let url = `/specialization/${slug}`;
  const specializationResponse = await getData(url, lng);

  return {
    title:
      specializationResponse?.data?.specialization?.name +
      " - " +
      t("tabs.majors") +
      " - " +
      data?.site_name,
      description: specializationResponse?.data?.specialization?.name || "",
  };
}

export default async function UniversitiesPage({
  params,
}: {
  params: { lng: string; slug: string };
}) {
  const lng = params.lng;
  const slug = params.slug;
  const { t } = await useTranslation(lng, "home");
  const { t: t2 } = await useTranslation(lng, "university_details");

  let data = null;
  let url = `/specialization/${slug}`;

  const response = await getData(url, lng);
  data = response?.data;

  return (
    <div>
      <header className="bg-primary text-white text-center py-12">
        <h1 className="text-4xl font-bold my-5">
          {data?.specialization?.name || params.slug}
        </h1>
      </header>
      <div className="container lg:max-w-[85vw] mx-auto px-4 lg:px-0 text-center pb-10">
        {data?.specialization ? (
          <section className="text-start py-12 px-4">
            <ReadMoreLines
              text={data?.specialization?.details}
              readMore={t2("readMore")}
              readLess={t2("readLess")}
            />

            <SectionApp
              // title={t("best_universities.title")}
              className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-4"
            >
              <>
                {data &&
                      data.universities &&
                      data.universities.map((item: UniversityType) => (
                          <LinkApp className="w-full" key={item.id} href={`/universities/${item.id}`} lng={lng}>
                            <CardUniversity
                              major={t("topMajors")}
                              btnText={t("form_booking.submit")}
                              university={item}
                            />
                          </LinkApp>
                      ))}
              </>
            </SectionApp>
          </section>
        ) : (
          <div className="min-h-[40vh] w-full flex justify-center items-center">
            <div>
              <h1 className="text-lg md:text-2xl text-gray-500 font-bold">
                Not Found
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
