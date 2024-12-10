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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { dir } from "i18next";

export default async function UniversitiesPage({
  params,
  searchParams,
}: {
  params: { lng: string };
  searchParams: {
    category: string;
    page: string;
  };
}) {
  const lng = params.lng;
  const { t } = await useTranslation(lng, "turkish_universities");

  let data = null;
  let url = "/tukey_universities";
  if (searchParams.category) {
    url = `/tukey_universities?category_id=${searchParams.category}`;
  }
  if (searchParams.page) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", searchParams.page);
    url += `?${params.toString()}`;
  }

  const response = await getData(url, lng);
  data = response?.data;

  const pagination = data?.paginated_universities?.pagination || null;

  return (
    <div className="my-10 container lg:max-w-[85vw] mx-auto space-y- p-4">
      <div className="flex justify-center items-center text-center">
        <h2 className="text-lg font-bold text-gray-500 md:text-2xl">
          {t("title")}
        </h2>
      </div>
      <div>
        <ul className="flex gap-4 [&>li]:pb-2 overflow-x-auto hidden-scrollbar text-base md:text-lg mb-5 mt-4 md:mt-0">
          {data && data.categories && data.categories.length > 0 && (
            <LinksCategory
              links={data.categories}
              searchParams={searchParams}
              href="/turkish_universities"
              allText={t("links.all")}
            />
          )}
        </ul>
      </div>

      {data &&
        data.featured_universities &&
        data.featured_universities.length > 0 && (
          <div className="space-y-5 md:mt-8 lg:px-16">
            <h1 className="text-lg font-bold text-gray-500 md:text-2xl lg:ps-4">
              {t("mostRanked")}
            </h1>
            <div>
              <CustomCarousel lng={lng}>
                {data.featured_universities.map((item: UniversityType) => (
                  <UniversitiesSliderItem
                    key={item.id}
                    item={item}
                    lng={lng}
                    t={t}
                  />
                ))}
              </CustomCarousel>
            </div>
          </div>
        )}

      {data &&
      data.paginated_universities &&
      data.paginated_universities.data ? (
        data.paginated_universities.data.length > 0 ? (
          <div>
            <section className="mt-10">
              <ScrollArea className="w-full whitespace-nowrap md:overflow-auto md:whitespace-pre-wrap" dir={dir(lng)}>
                <div className="flex md:grid grid-cols-3 w-max md:w-full gap-4">
                  {data.paginated_universities.data.map(
                    (item: UniversityType) => {
                      return (
                        <LinkApp className="w-64 md:w-auto"
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
                    }
                  )}
                </div>
                <ScrollBar orientation="horizontal" className="hidden" />
              </ScrollArea>
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
  );
}
