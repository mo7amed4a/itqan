import React from "react";
import { useTranslation as getTranslation} from "../../../../../i18n";
import { getData } from "@/lib/data";


export async function generateMetadata({
  params,
}: {
  params: { lng: string, slug: string };
}) {
  const {lng, slug} = params
  const { t } = await getTranslation(lng, "university_details");
  
  let data;
  const response = await getData("/get_settings", params.lng);
  data = response?.data;

  let url = `/specialization/${slug}`;
  const specializationResponse = await getData(url, lng);

  return {
    title: specializationResponse?.data?.specialization?.name + " - " + t('tabs.majors') + " - " + data?.site_name,
  };
}


export default async function UniversitiesPage({
  params,
}: {
  params: { lng: string; slug: string };
}) {
  const lng = params.lng;
  const slug = params.slug;

  let data = null;
  let url = `/specialization/${slug}`;

  const response = await getData(url, lng);
  data = response?.data?.specialization;

  return (
    <div>
      <header className="bg-primary text-white text-center py-12">
        <h1 className="text-4xl font-bold my-5">{data?.name || params.slug}</h1>
      </header>
      <div className="container lg:max-w-[85vw] mx-auto px-4 lg:px-0 text-center pb-10">
        {data ? (
           <section className="text-start py-12 px-4">
           <p
             className="mt-4 text-gray-700 max-w-7xl mx-auto prose lg:prose-xl"
             dangerouslySetInnerHTML={{ __html: data.details }}
           ></p>
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
