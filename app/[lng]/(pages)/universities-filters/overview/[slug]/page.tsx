import { useTranslation } from "@/i18n";
import { getData } from "@/lib/data";
import React from "react";
import { Button } from "@/components/ui/button";
import LinkApp from "@/components/global/LinkApp";

export async function generateMetadata({
  params,
}: {
  params: { lng: string, slug: string };
}) {
  const {lng} = params
  let data;
  const response = await getData("/get_settings", params.lng);
  data = response?.data;

  let uniData: any = null;
  const uniResponse = await getData(`/universities/${params.slug}/details`, lng);
  uniData = uniResponse?.data;

  return {
    title: uniData?.university?.name + " - " + data?.site_name,
  };
}

export default async function Page({
  params,
}: {
  params: { lng: string, slug: string };
}) {
  const lng = params.lng;
  const {t} = await useTranslation(lng, 'program')
  const {t:DataLang } = await useTranslation(lng, "university_details");

  let uniData: any = null;
  const uniResponse = await getData(`/universities/${params.slug}/details`, lng);
  uniData = uniResponse?.data;

  if (!uniData) {
    return (
      <div className="flex justify-center py-10">
        <h1 className="text-lg md:text-2xl text-center font-bold text-gray-500">Data not found</h1>
      </div>
    );
  }
  
  return (
    <section className="container md:max-w-[85%] mx-auto px-4 py-10 md:px-0">
      <div className="flex justify-center py-10">
        <h1 className="text-lg md:text-2xl text-center font-bold text-gray-500">{t('title')}</h1>
      </div>
      <div className="pb-10 flex gap-4">
        <LinkApp href="/universities-filters" lng={lng}><Button variant={"outline"} className="bg-transparent text-gray-600 rounded-full">{t('title')}</Button></LinkApp>
        <Button variant={"outline"} className="bg-secondary rounded-full text-white">{t('overview')}</Button>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-4">
        <h2 className="text-lg text-primary font-bold">{DataLang("university.info")} {uniData?.university?.name}</h2>
      </div>
    </section>
  ) ;
}
