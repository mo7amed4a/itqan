import React from "react";
import { formatDate } from "../../../../../lib/moment";
import { useTranslation as getTranslation } from "../../../../../i18n";
import { api } from "../../../../../lib/axios";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getData } from "@/lib/data";

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
    console.log(resp.data.msg);
  } else {
    notFound();
  }
  const blog = resp?.data?.post || null;

  return (
    <article className="text-base relative isolate bg-white text-start">
      <header className="bg-primary text-white text-center py-12">
        <h1 className="text-4xl font-bold my-5">{t("title")}</h1>
      </header>
      <header className="mx-auto max-w-screen-xl text-center">
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
      </header>
      <div
        dangerouslySetInnerHTML={{ __html: blog.content }}
        className="max-w-screen-xl mx-auto mt-10 space-y-12 px-4 py-10 text-lg tracking-wide text-gray-700 prose lg:prose-xl"
      ></div>
    </article>
  );
}
