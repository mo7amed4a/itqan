import React from "react";
import { formatDate } from "../../../../../lib/moment";
import { useTranslation as getTranslation } from "../../../../../i18n";
import { api } from "../../../../../lib/axios";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getData } from "@/lib/data";

export default async function page({
    params
}: {
    params: {
        slug: string
        lng: string
    }
}) {
    const lng = params.lng;
  const { t } = await getTranslation(lng, "blogs");

  const resp = await getData(`/post/${params.slug}`, lng);
  if (resp) {
    console.log(resp.data.msg);
  } else {
    notFound()
  }
  const blog = resp?.data?.post || null;


  return (
    <article className="text-base">
      <header className="mx-auto max-w-screen-xl pt-28 text-center">
        <p className="text-gray-500">Published {formatDate(blog.created_at)}</p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">
          {blog.title}
        </h1>
        {/* <p className="mt-6 text-lg text-gray-700">
          {post.}
        </p> */}
        {/* <div
          className="mt-6 flex flex-wrap justify-center gap-2"
          aria-label="Tags"
        >
          <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
            Marketing
          </button>
          <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
            Branding
          </button>
          <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
            Digital
          </button>
          <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
            Identity
          </button>
        </div> */}
        <Image width={500} height={500}
          className="sm:h-[34rem] mt-10 w-full object-contain"
          src={blog.image}
          alt="Featured Image"
        />
      </header>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} className="mx-auto mt-10 max-w-screen-md space-y-12 px-4 py-10 font-serif text-lg tracking-wide text-gray-700 prose lg:prose-xl"></div>
    </article>
  );
}
