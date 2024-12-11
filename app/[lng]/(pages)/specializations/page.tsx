import React from "react";
import LinkApp from "@/components/global/LinkApp";
import { getData } from "@/lib/data";
import ShowMoreBtn from "@/components/global/ShowMore";
import CardSmall from "@/components/cards/card-small";
import { useTranslation } from "@/i18n";

export default async function UniversitiesPage({
  params,
  searchParams
}: {
  params: { lng: string};
  searchParams: {
    page: string;
  }
}) {
  const lng = params.lng;
  const { t } = await useTranslation(lng, "turkish_universities");
  const { t:dataLang } = await useTranslation(lng, "university_details");

  let data = null;
  let url = "/specializations";
  if (searchParams.page) {
    url = `/specializations?page=${searchParams.page}`;
  }

  const response = await getData(url, lng);
  data = response?.data?.specializations;

  return (
    <div>
      <header className="bg-primary text-white text-center py-12">
        <h1 className="text-4xl font-bold my-5">{dataLang("tabs.majors")}</h1>
      </header>
      <div className="container lg:max-w-[85vw] mx-auto px-4 lg:px-0 text-center pb-10">
        {data ? (
          data.length > 0 ? (
            <div>
              <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-10">
                {data.map((item: any) => {
                  return (
                    <LinkApp
                      key={item.id}
                      lng={lng}
                      href={`/specializations/${item.slug}`}
                    >
                      <CardSmall
                      imageUrl={item.image}
                        text={item.name}
                      />
                    </LinkApp>
                  );
                })}
              </section>
              <div className="flex justify-center mt-10">
                <ShowMoreBtn page={searchParams.page} text={t("show_more")} />
              </div>
             
            </div>
          ) : (
            <div className="min-h-[40vh] w-full flex justify-center items-center">
              <div>
                <h1 className="text-lg md:text-2xl text-gray-500 font-bold">
                  Not Found
                </h1>
              </div>
            </div>
          )
        ) : (
          <div className="min-h-[40vh] w-full flex justify-center items-center">
            <div>
              <h1 className="text-lg md:text-2xl text-gray-500 font-bold">
                Server Error
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
