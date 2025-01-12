import { Button } from "flowbite-react";
import { Button as ButtonApp } from "@/components/ui/button";
import React from "react";
import LinkApp from "../../../../components/global/LinkApp";
import CardBlog, { BlogItemType } from "../../../../components/cards/CardBlog";
import img1 from "../../../../public/images/for-blog.png";
import background from "../../../../public/images/blog.jpeg";
import Image from "next/image";
import { useTranslation as getTranslation } from "../../../../i18n";
import { getData } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ShowMoreBtn from "@/components/global/ShowMore";
import BreadcrumbApp from "@/components/global/breadcrumb";
import NavbarBlog from "./_components/NavbarForBlog";
import LinksCategory from "@/components/global/LinksCategory";
import InputSearchBlog from "./_components/inputSearchBlog";

export async function generateMetadata({
  params,
}: {
  params: { lng: string };
}) {
  const { lng } = params;
  const { t } = await getTranslation(lng, "Header");
  let data;
  const response = await getData("/get_settings", params.lng);
  data = response?.data;
  return {
    title: t("blog") + " - " + data?.site_name,
    description: data?.meta_description || "",
  };
}

export default async function Blogs({
  params,
  searchParams,
}: {
  params: { lng: string };
  searchParams: {
    category: string;
    page: string;
  };
}) {
  const lng = params.lng;
  const { t } = await getTranslation(lng, "blogs");

  let url = "/blog";
  if (searchParams.category) {
    url = `/blog_cat/${searchParams.category}`;
  }
  if (searchParams.page) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", searchParams.page);
    url += `?${params.toString()}`;
  }

  let blogs = null;
  const resp = await getData(url, lng);
  blogs = resp?.data?.posts?.data || null;
  const links = resp?.data?.cats || null;
  const sliders = resp?.data?.sliders || null;

  return (
    <div>
      <div className="relative flex items-center">
        <Image
          className="h-full w-full absolute inset-x-0 object-cover"
          src={background}
          width={2000}
          height={1000}
          alt=""
        />
        <div className="relative z-10 my-20 container lg:max-w-[85vw] mx-auto space-y-10 p-4">
          <div className="flex justify-start items-center text-start -mb-4">
            <h1 className="text-lg font-bold text-gray-500 md:text-2xl">
              {t("title")}
            </h1>
          </div>
          <BreadcrumbApp
            lng={lng}
            last="المدونة - اخر الاخبار"
            className="md:!-ms-4 pt-4"
          />
        </div>
      </div>
      <div className="mb-10 container lg:max-w-[85vw] mx-auto space-y-10 p-4">
        <div>
          <ul className="flex w-full gap-4 [&>li]:pb-2 overflow-x-auto hidden-scrollbar text-base md:text-lg mb-5 mt-4 md:mt-0">
            {links && links.length > 0 && (
              <LinksCategory
                links={links}
                searchParams={searchParams}
                href="/blogs"
                allText={t("links.all")}
              />
            )}
            <div className="ms-auto w-64">
              <InputSearchBlog placeholder={"بحث"} />
            </div>
          </ul>
        </div>

        {sliders && sliders.length > 0 && (
          <div className="space-y-10">
            <h2 className="text-lg text-start font-bold text-gray-500 md:text-2xl">
              {t("most_visited")}
            </h2>
            <div className="lg:px-24">
              <Carousel>
                <CarouselContent className="p-4 gap-x-4">
                  {sliders?.map((item: any) => (
                    <CarouselItem
                      key={item.id}
                      className="h-auto bg-white rounded-xl hover:shadow-md"
                    >
                      <LinkApp
                        lng={lng}
                        href={`/blogs/${item.slug}`}
                        className="w-full"
                      >
                        <div className="w-full h-full grid md:grid-cols-2">
                          <div className="h-full flex items-center order-2 p-4">
                            <div className="space-y-4 text-start lg:w-11/12 mx-auto py-4">
                              <h3 className="text-lg font-bold text-gray-500 md:text-2xl">
                                {item.title}
                              </h3>
                              <span
                                className="block text-sm md:text-base text-gray-500 line-clamp-2"
                                dangerouslySetInnerHTML={{
                                  __html: item.short,
                                }}
                              ></span>
                              <div className="w-full flex justify-center items-center">
                                <ButtonApp variant="outline" className="text-gray-600">قراءة المزيد</ButtonApp>
                              </div>
                            </div>
                          </div>
                          <div className="p-4 ps-0 md:ps-4 order-1 md:order-2">
                            <Image
                              src={img1}
                              alt="img"
                              width={2300}
                              height={2300}
                              className="w-full md:h-[300px] object-cover rounded-xl"
                            />
                          </div>
                        </div>
                      </LinkApp>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        )}

        <section className="grid grid-cols-1">
          <Carousel>
            <CarouselContent className="px-10 md:px-0">
              {blogs &&
                blogs.map((item: BlogItemType) => (
                  <CarouselItem
                    className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pb-8"
                    key={item.id}
                  >
                    <CardBlog
                      key={item.id}
                      blog={item}
                      lng={lng}
                      textBtn={t("read_more")}
                    />
                  </CarouselItem>
                ))}
            </CarouselContent>
          </Carousel>
        </section>
        <div className="flex justify-center">
          <ShowMoreBtn page={searchParams.page} text={t("show_more")} />
        </div>
      </div>
    </div>
  );
}
