import { getData } from "@/lib/data";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { lng: string };
}) {
  let data;
  let site = await getData("/get_settings", params.lng);
  const response = await getData("page/about-us", params.lng);
  data = response?.data?.page;
  return {
    title: `${data?.meta_title || "About"} | ${
      site?.data?.site_name || "Itqan"
    }`,
    description: data?.meta_description,
    keywords: data?.meta_keywords,
  };
}

export default async function page({
  params,
  searchParams,
}: {
  params: { lng: string };
  searchParams: {
    category: string;
  };
}) {
  let data;
  const response = await getData("page/about-us", params.lng);
  data = response?.data?.page;
  return (
    data && (
      <div>
        <header className="bg-primary text-white text-center py-12">
          <h1 className="text-4xl font-bold my-5">{data.name}</h1>
        </header>
        <section className="text-start py-12 px-4">
          <p
            className="mt-4 text-gray-700 max-w-7xl mx-auto prose lg:prose-xl"
            dangerouslySetInnerHTML={{ __html: data.details }}
          ></p>
        </section>
      </div>
    )
  );
}
