import UniversitiesPage from "@/components/universities/view/UniversitiesPage";
import { useTranslation as getTranslation } from "@/i18n";
import { getData } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: { lng: string, slug: string };
}) {
  const {lng} = params
  const { t } = await getTranslation(lng, "Header");
  let data;
  const response = await getData("/get_settings", params.lng);
  data = response?.data;

  let uniData: any = null;
  const uniResponse = await getData(`/universities/${params.slug}/details`, lng);
  uniData = uniResponse?.data;

  return {
    title: uniData?.university?.name + " - "  + t('cyprus_universities') + " - " + data?.site_name,
  };
}

export default async function UniversityInfo({
  params,
}: {
  params: { lng: string; slug: string };
}) {
  return <UniversitiesPage params={params}/>
}
