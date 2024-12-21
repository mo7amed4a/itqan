import { Button } from "flowbite-react";
import React from "react";
import LinkApp from "../../../../components/global/LinkApp";
import CardBlog, { BlogItemType } from "../../../../components/cards/CardBlog";
import img1 from "../../../../public/images/for-blog.png";
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

export async function generateMetadata({
  params,
}: {
  params: { lng: string };
}) {
  const {lng} = params
  const { t } = await getTranslation(lng, "Header");
  let data;
  const response = await getData("/get_settings", params.lng);
  data = response?.data;
  return {
    title: t('blog') + " - " + data?.site_name,
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
  blogs = resp?.data?.posts || null;
  const links = resp?.data?.cats || null;
  const sliders = resp?.data?.sliders || null;

  return (
    <div className="my-10 container lg:max-w-[85vw] mx-auto space-y-10 p-4">
      <div className="flex justify-center items-center text-center">
        <h1 className="text-lg font-bold text-gray-500 md:text-2xl">
          {t("title")}
        </h1>
      </div>
      <div>
        <ul className="flex gap-4 [&>li]:pb-2 overflow-x-auto hidden-scrollbar text-base md:text-lg">
          <li
            className={
              !searchParams.category
                ? "border-b-2 border-secondary text-secondary"
                : ""
            }
          >
            <LinkApp className="text-nowrap" href={`/blogs`} lng={lng}>
              {t("links.all")}
            </LinkApp>
          </li>
          {links &&
            links?.map((item: any, index: number) => {
              return (
                <li
                  key={item.id}
                  className={
                    searchParams.category === item.slug
                      ? "border-b-2 border-secondary text-secondary"
                      : ""
                  }
                >
                  <LinkApp href={`/blogs?category=${item.slug}`} lng={lng}>
                    {item.name}
                  </LinkApp>
                </li>
              );
            })}
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
                          <div className="space-y-5 text-start lg:!space-y-16 lg:w-11/12 mx-auto">
                            <h3 className="text-lg font-bold text-gray-500 md:text-3xl">
                              {item.title}
                            </h3>
                            <span
                              className="block text-sm md:text-base text-gray-500 line-clamp-2"
                              dangerouslySetInnerHTML={{
                                __html: item.content.slice(0, 200),
                              }}
                            ></span>
                          </div>
                        </div>
                        <div className="p-4 ps-0 md:ps-4 order-1 md:order-2">
                          <Image
                            src={img1}
                            alt="img"
                            width={2300}
                            height={2300}
                            className="w-full md:h-[400px] object-cover rounded-xl"
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
        {/* {blogs &&
          blogs.map((item: BlogItemType) => (
            <CardBlog
              key={item.id}
              blog={item}
              lng={lng}
              textBtn={t("read_more")}
            />
          ))} */}
      </section>
      <div className="flex justify-center">
        <ShowMoreBtn page={searchParams.page} text={t("show_more")} />
      </div>
    </div>
  );
}
