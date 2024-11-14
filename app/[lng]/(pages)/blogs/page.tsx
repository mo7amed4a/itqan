import { Button } from "flowbite-react";
import React from "react";
import LinkApp from "../../../../components/global/LinkApp";
import CarouselApp, {
  CarouselItem,
} from "../../../../components/global/Carousel";
import CardBlog, { BlogItemType } from "../../../../components/cards/CardBlog";
import img1 from "../../../../public/images/for-blog.png";
import Image from "next/image";
import { useTranslation } from "../../../../i18n";
import { api } from "../../../../lib/axios";

export default async function Blogs({ params, searchParams }: { params: { lng: string }, searchParams: {
  category: string
} }) {  
  const lng = params.lng;
  const { t } = await useTranslation(lng, "blogs");
  const resp = await api.get("/blog");
  let blogs = null
  if (searchParams.category) {
    const response = await api.get(`/blog_cat/${searchParams.category}`);
    blogs = response?.data?.data?.posts || null;
  }
  else {
    blogs = resp?.data?.data?.posts || null;
  }
  const links = resp?.data?.data?.cats || null;
  const sliders = resp?.data?.data?.sliders || null;

  return (
    <div className="my-10 container mx-auto space-y-20 p-4">
      <div className="flex justify-center items-center text-center">
        <h2 className="text-lg font-bold text-gray-500 md:text-2xl">
          {t("title")}
        </h2>
      </div>
      <div>
        <ul className="flex gap-4 [&>li]:pb-2 overflow-x-auto hidden-scrollbar text-base md:text-lg">
          {links &&
            links?.map((item: any) => {
              return (
                <li key={item.id} className={searchParams.category === item.slug ? "border-b-2 border-red-500 text-red-500" : ""}>
                  {/* <LinkApp href="/blogs" lng={lng}>{t('links.study_in_turkey')}</LinkApp> */}
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

        <CarouselApp locale={lng} className="h-[30rem] py-10">
          {sliders &&
            sliders?.map((item: any) => (
              <div key={item.id} className=" bg-white rounded-xl grid grid-cols-1 gap-4 md:grid-cols-2 h-full shadow-xl p-3 ">
                <CarouselItem className="order-2 md:order-1 flex flex-col justify-center md:space-y-10 md:px-10">
                  <h1 className="text-lg font-bold text-gray-500 md:text-2xl">
                    {item.title}
                  </h1>
                  <p className="text-sm text-gray-400">
                    {item.content}
                  </p>
                </CarouselItem>
                <div
                  className={`order-1 md:order-2 h-64 md:h-full bg-center bg-cover md:bg-cover rounded-xl`}
                >
                  <Image
                    src={img1}
                    alt="img"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
        </CarouselApp>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        {blogs && blogs.map((item: BlogItemType) => <CardBlog
          key={item.id} blog={item} lng={lng}
        />)}
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
