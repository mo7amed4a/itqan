import "./global.css";

import { dir } from "i18next";
import HeaderApp from "../../components/Header/header";
import BookingFixed from "../../components/fixedCps/BookingFixed";
import FooterApp from "../../components/Footer/footer";
import { fallbackLng, languages } from "../../i18n/settings";
import { useTranslation } from "../../i18n";
import { Toaster } from "react-hot-toast";
import { api, setAcceptLanguage } from "../../lib/axios";
import TawkTo from "../../components/fixedCps/tawkTo";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

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
  const response = await api.get("/get_settings");
  const data = response?.data?.data

  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="relative z-[54187198429748928972928] text-sm">
          <Toaster />
        </div>
        <HeaderApp data={data} locale={lng} />
        <BookingFixed lng={lng} />
        {children}
        <FooterApp data={data} lng={lng} />
        {/* <TawkTo /> */}
      </body>
    </html>
  );
}
