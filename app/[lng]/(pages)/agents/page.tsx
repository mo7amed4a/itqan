import { getData } from "@/lib/data";
import React from "react";

export async function generateMetadata({ params } : { params: { lng: string } }) {
  let data;
  let site = await getData("/get_settings", params.lng);
  const response = await getData("page/agents", params.lng);    
  data = response?.data?.page; 
  return {
    title: `${data?.meta_title || 'agents'} | ${site?.data?.site_name|| "Itqan"}`  ,
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
  const response = await getData("page/agents", params.lng);  
  data = response?.data?.page; 
  return data && (
    <div>
      <header className="bg-primary text-white text-center py-12">
        <h1 className="text-4xl font-bold mt-16">{data.name}</h1>
      </header>
      <section className="text-center py-12 px-4">
        {/* <h2 className="text-2xl font-bold">Mission And Values</h2> */}
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: data.details }}></p>

        {/* <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">85+</h3>
            <p className="text-gray-700">Specialists</p>
          </div>
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">25+</h3>
            <p className="text-gray-700">Years of Experience</p>
          </div>
        </div> */}
      </section>
    </div>
  );
}
