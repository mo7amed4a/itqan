import React from "react";
import LinkApp from "../../../../components/global/LinkApp";
import { useTranslation as getTranslation } from "../../../../i18n";
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
import BreadcrumbApp from "@/components/global/breadcrumb";
import CardUniversityTwo from "@/components/home/CardUniversityTwo";

export async function generateMetadata({
  params,
}: {
  params: { lng: string };
}) {
  const { lng } = params;
  const { t } = await getTranslation(lng, "Header");
  let data;
  const response = await getData("/get_settings", params.lng);
  data = response?.data;

  let dataTwo = null;
  let url = "/tukey_universities";
  const responseTwo = await getData(url, lng);
  dataTwo = responseTwo?.data;
  return {
    title: t("turkish_universities") + " - " + data?.site_name,
    description: dataTwo?.seo[0]?.meta_description,
  };
}

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
  const { t } = await getTranslation(lng, "turkish_universities");

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

  // const pagination = data?.paginated_universities?.pagination || null;

  return (
    <div className="mb-10 container lg:max-w-[85vw] mx-auto space-y- p-4">
      <BreadcrumbApp lng={lng} />
      <div className="flex justify-center items-center text-center">
        <h1 className="text-lg font-bold text-gray-500 md:text-2xl">
          {t("title")}
        </h1>
      </div>
      <div>
        <ul className="flex gap-4 [&>li]:pb-2 overflow-x-auto hidden-scrollbar text-base md:text-lg mb-5 mt-4 md:mt-0">
          {data && data.categories && data.categories.length > 0 && (
            <LinksCategory
              links={data.categories}
              searchParams={searchParams}
              href="/turkish-universities"
              allText={t("links.all")}
            />
          )}
        </ul>
      </div>

      {data &&
        data.featured_universities &&
        data.featured_universities.length > 0 && (
          <div className="space-y-5 md:mt-8 lg:px-16">
            <span className="text-lg font-bold text-gray-500 md:text-2xl lg:ps-4">
              {t("mostRanked")}
            </span>
            <div>
              <CustomCarousel lng={lng}>
                {data.featured_universities.map((item: UniversityType) => (
                  <UniversitiesSliderItem
                    key={item.id}
                    item={item}
                    lng={lng}
                    t={t}
                    url="turkish-universities"
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
              <ScrollArea
                className="w-full whitespace-nowrap md:overflow-auto md:whitespace-pre-wrap"
                dir={dir(lng)}
              >
                <div className="flex md:grid grid-cols-3 w-max md:w-full gap-4">
                  {data.paginated_universities.data.map(
                    (item: UniversityType) => {
                      return (
                        <LinkApp
                          className="w-64 md:w-auto"
                          key={item.id}
                          lng={lng}
                          href={`/turkish-universities/${item.slug}`}
                        >
                          <CardUniversityTwo
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
              <span className="text-lg md:text-2xl text-gray-500 font-bold">
                Not Found
              </span>
            </div>
          </div>
        )
      ) : (
        <div className="min-h-[40vh] w-full flex justify-center items-center">
          <div>
            <span className="text-lg md:text-2xl text-gray-500 font-bold">
              Server Error
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
