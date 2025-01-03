import React from "react";
import { formatDate } from "../../../../../lib/moment";
import { useTranslation as getTranslation } from "../../../../../i18n";
import { api } from "../../../../../lib/axios";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getData } from "@/lib/data";
import BreadcrumbApp from "@/components/global/breadcrumb";
import ConsultationCard from "./_components/ConsultationCard";
import CardUniversity from "@/components/home/CardUniversity";
import CardUniversityForBLog from "./_components/CardUniversityForBLog";
import CardBlog from "@/components/cards/CardBlog";

export default async function page({
  params,
}: {
  params: {
    slug: string;
    lng: string;
  };
}) {
  const lng = params.lng;
  const { t } = await getTranslation(lng, "blogDetails");

  const resp = await getData(`/post/${params.slug}`, lng);
  if (resp) {
    // console.log(resp.data.msg);
  } else {
    notFound();
  }
  const blog = resp?.data?.post || null;

  let data;
  const response = await getData("/get_settings", lng);
  data = response?.data;


  const blogData = [ 
    {
      "id": 29,
      "blog_category_id": 4,
    "slug": "university-of-kyrenia-in-cyprus",
    "image": "https://admin.itqaneducation.com/storage/universities/CFCYkM2iAri6pqho3Vgxj5AFflwaNURBBaSbXvYo.jpg",
    "logo": "https://admin.itqaneducation.com/storage/universities/M2NkcGRNyRPxwbkYiwNqp35U9sVj3vazxSfoW77j.png",
    "title": "عن كيرينيا في قبرص",
    "created_at": "10/04/2024",
    "content": "نص تجريب عن كارد المقالة تجريبي تجريبي",
  "is_slider": 4,
  "updated_at": "04/10/2024"
},
    {
      "id": 29,
      "blog_category_id": 4,
    "slug": "university-of-kyrenia-in-cyprus",
    "image": "https://admin.itqaneducation.com/storage/universities/CFCYkM2iAri6pqho3Vgxj5AFflwaNURBBaSbXvYo.jpg",
    "logo": "https://admin.itqaneducation.com/storage/universities/M2NkcGRNyRPxwbkYiwNqp35U9sVj3vazxSfoW77j.png",
    "title": "عن كيرينيا في قبرص",
    "created_at": "10/04/2024",
    "content": "نص تجريب عن كارد المقالة تجريبي تجريبي",
  "is_slider": 4,
  "updated_at": "04/10/2024"
},
]


  return (
    <article className="text-base relative isolate text-start -mt-10 pt-20 container md:max-w-[85%] px-4 md:px-0 mx-auto">
      <BreadcrumbApp lng={lng} last={blog.title}/>
      {/* <header className="mx-auto max-w-screen-xl text-center">
        <Image
          width={2000}
          height={2000}
          className="sm:h-[34rem] mt-10 w-full object-contain"
          src={blog.image.split("http://").join("https://")}
          alt="Featured Image"
        />
        <p className="text-gray-500 pt-5">
          {t("Published")} {formatDate(blog.created_at)}
        </p>
        <h1 className="mt-2 text-xl font-bold text-gray-500 sm:text-4xl">
          {blog.title}
        </h1>
      </header> */}
      <div className="flex flex-col md:flex-row gap-4">
        <main className="w-full">
          <section className="mt-7 flex flex-col md:flex-row justify-between text-gray-600">
            <h1 className="text-primary text-xl md:text-2xl">
            {blog.title}
            </h1>
            <div className="flex gap-4">
              <div className="bg-white flex items-center p-2 gap-3 rounded-md">
                <span>اسم المحرر</span>
                <span className="text-primary">اتقان</span>
              </div>
              <div className="bg-white flex items-center p-2 gap-3 rounded-md">
                <span>تارخ التحديث</span>
                <span className="text-primary">15 ديسمبر 2024</span>
              </div>
            </div> 
          </section>
          <section className="w-full">
          <Image
              width={2000}
              height={2000}
              className="sm:h-[34rem] mt-10 w-full rounded-xl"
              src={blog.image.split("http://").join("https://")}
              alt="Featured Image"
            />
          </section>
          <section>
            <div
              dangerouslySetInnerHTML={{ __html: blog.content }}
              className="mx-auto mt-10 space-y-12 px-4 py-10 text-lg tracking-wide text-gray-700 prose lg:prose-xl"
            ></div>
          </section>
          <section className="w-full">
          <Image
              width={2000}
              height={2000}
              className="sm:h-[34rem] mt-10 w-full rounded-xl"
              src={blog.image.split("http://").join("https://")}
              alt="Featured Image"
            />
          </section>
          <section className="px-4">
            <div
              dangerouslySetInnerHTML={{ __html: blog.content }}
              className="mx-auto mt-10 space-y-12 py-10 text-lg tracking-wide text-gray-700 prose lg:prose-xl"
            ></div>
            <div className="border-s-4 border-secondary ps-3 h-8 flex items-center">
              <div className="text-primary">شاهد المزيد من المقالات المرتبطة</div>
            </div>
            <div className="my-5">
              <span className="text-xl text-primary font-bold">جدول المحتويات</span>
            </div>
            <div className="border-s-4 border-secondary ps-3 h-8 flex items-center">
              <span className="text-gray-600">جامعة ايدن</span>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: blog.content }}
              className="mx-auto mt-10 space-y-12 py-10 text-lg tracking-wide text-gray-700 prose lg:prose-xl"
            ></div>
          </section>
        </main>
        <aside className="md:w-2/5 space-y-4">
          <ConsultationCard />
          {
            blogData.map((item) => {
              return (
                <CardBlog
                  key={item.id}
                  blog={item}
                  lng={lng}
                  textBtn={"قراءة المزيد"}
                />
              )
            })
          }          
        </aside>
      </div>

     

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": data?.site_name,
            author: data?.site_name,
            interactionStatistic: [
              {
                "@type": "InteractionCounter",
                interactionService: {
                  "@type": "WebSite",
                  name: "Twitter",
                  url: "http://www.twitter.com",
                },
                interactionType: "https://schema.org/ShareAction",
                userInteractionCount: "1203",
              },
              {
                "@type": "InteractionCounter",
                interactionType: "https://schema.org/CommentAction",
                userInteractionCount: "78",
              },
            ],
            name: blog.title,
          }),
        }}
      />
    </article>
  );
}
