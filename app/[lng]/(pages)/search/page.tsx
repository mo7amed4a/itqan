import React from "react";
import LinkApp from "../../../../components/global/LinkApp";
import { useTranslation } from "../../../../i18n";
import CardUniversity, {
  UniversityType,
} from "../../../../components/home/CardUniversity";
import { getData } from "@/lib/data";
import { CustomCarousel } from "@/components/ui/CustomCarousel";
import ShowMoreBtn from "@/components/global/ShowMore";
import UniversitiesSliderItem from "@/components/universities/full/UniversitiesSliderItem";
import LinksCategory from "@/components/global/LinksCategory";

export default async function UniversitiesPage({
  params,
  searchParams,
}: {
  params: { lng: string };
  searchParams: {
    name: string;
    page: string;
  };
}) {
  const lng = params.lng;
  const { t } = await useTranslation(lng, "turkish_universities");

  let data = null;
  let url = "/search_university";
  if (searchParams.name) {
    url = `/search_university?name=${searchParams.name}`;
  }
  if (searchParams.page) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", searchParams.page);
    url += `?${params.toString()}`;
  }

  const response = await getData(url, lng);
  data = response?.universities;

  return (
    <div>
      <header className="bg-primary text-white text-center py-12">
        <h1 className="text-4xl font-bold my-5">{searchParams.name}</h1>
      </header>
      <div className="container lg:max-w-[85vw] mx-auto px-4 lg:px-0 text-center pb-10">
        {data ? (
          data.length > 0 ? (
            <div>
              <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-10">
                {data.map((item: UniversityType) => {
                  return (
                    <LinkApp
                      key={item.id}
                      lng={lng}
                      href={`/universities/${item.id}`}
                    >
                      <CardUniversity
                        major={t("topMajors")}
                        btnText={t("universityInfo.registerNow")}
                        university={item}
                      />
                    </LinkApp>
                  );
                })}
              </section>
              {/* {pagination && pagination.total > 1 && (
              <PaginationApp
                currentPage={pagination?.current_page}
                totalPages={pagination.total}
                lng={lng}
              />
            )} */}
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
