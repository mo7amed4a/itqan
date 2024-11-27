import { Button } from "flowbite-react";
import React from "react";
import LinkApp from "../../../../components/global/LinkApp";
import CardBlog, { BlogItemType } from "../../../../components/cards/CardBlog";
import img1 from "../../../../public/images/for-blog.png";
import Image from "next/image";
import { useTranslation } from "../../../../i18n";
import { getData } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function Blogs({
  params,
  searchParams,
}: {
  params: { lng: string };
  searchParams: {
    category: string;
  };
}) {
  const lng = params.lng;
  const { t } = await useTranslation(lng, "blogs");

  let url = "/blog";
  if (searchParams.category) {
    url = `/blog_cat/${searchParams.category}`;
  }

  let blogs = null;
  const resp = await getData(url, lng);
  blogs = resp?.data?.posts || null;
  const links = resp?.data?.cats || null;
  const sliders = resp?.data?.sliders || null;

  return (
    <div className="my-10 container mx-auto space-y-10 p-4">
      <div className="flex justify-center items-center text-center">
        <h2 className="text-lg font-bold text-gray-500 md:text-2xl">
          {t("title")}
        </h2>
      </div>
      <div>
        <ul className="flex gap-4 [&>li]:pb-2 overflow-x-auto hidden-scrollbar text-base md:text-lg">
          {links &&
            links?.map((item: any, index: number) => {
              return (
                <li
                  key={item.id}
                  className={
                    searchParams.category === item.slug
                      ? "border-b-2 border-red-500 text-red-500"
                      : index === 0 ? "border-b-2 border-red-500 text-red-500" : ""
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

      <div className="space-y-10">
        <h1 className="text-lg text-start font-bold text-gray-500 md:text-2xl">
          {t("most_visited")}
        </h1>
        <Carousel>
          <CarouselContent className="p-4 gap-x-4">
            {sliders &&
              sliders?.map((item: any) => (
                <CarouselItem
                  key={item.id}
                  className="grid md:grid-cols-2 h-full bg-white rounded-xl hover:shadow-md"
                >
                  <div className="h-full flex items-center order-2 p-4">
                    <div className="space-y-5">
                      <h1 className="text-lg font-bold text-gray-500 md:text-2xl">
                        {item.title}
                      </h1>
                      <p
                        className="text-sm text-gray-400"
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      ></p>
                    </div>
                  </div>
                  <div className="p-4 order-1 md:order-2">
                    <Image
                      src={img1}
                      alt="img"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        {blogs &&
          blogs.map((item: BlogItemType) => (
            <CardBlog key={item.id} blog={item} lng={lng} textBtn={t('read_more')} />
          ))}
      </section>
      <div className="flex justify-center">
        <Button
          color="primary"
          className="w-64 py-2 font-bold bg-primary text-white"
        >
          {t("show_more")}
        </Button>
      </div>
    </div>
  );
}
