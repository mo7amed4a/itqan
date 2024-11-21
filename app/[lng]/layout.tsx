import BookingFixed from "../../components/fixedCps/BookingFixed";
import FooterApp from "../../components/Footer/footer";
import { Toaster } from "react-hot-toast";
import { dir } from "i18next";
import { setAcceptLanguage } from "../../lib/axios";
import HeaderApp from "@/components/Header/header";
import { getData } from "@/lib/data";
import TawkTo from "@/components/fixedCps/tawkTo";

export async function generateMetadata({
  params,
}: {
  params: { lng: string };
}) {
  let data;
  const response = await getData("/get_settings", params.lng);
  data = response?.data;
  return {
    title: data?.site_name,
    description: data?.meta_description || "",
  };
}

// export async function generateStaticParams() {
//   return languages.map((lng) => ({ lng }));
// }

// export async function generateMetadata({
//   params: { lng },
// }: {
//   params: {
//     lng: string;
//   };
// }) {
//   if (languages.indexOf(lng) < 0) lng = fallbackLng;
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const { t } = await useTranslation(lng);
//   // setAcceptLanguage(lng);
//   const response = await api.get("/get_settings");
//   const data = response?.data?.data
//   return {
//     title: data?.site_name || "itqan",
//     description:
//       data?.meta_description || "",
//   };
// }

export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  setAcceptLanguage(lng);

  return (
    <main dir={dir(lng)}>
      <div className="relative z-[748811718787187841] text-sm">
        <Toaster />
      </div>
      <HeaderApp locale={lng} />
      <BookingFixed lng={lng} />
      {children}
      <FooterApp lng={lng} />
      <TawkTo />
    </main>
  );
}
