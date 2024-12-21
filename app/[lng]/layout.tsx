import BookingFixed from "../../components/fixedCps/BookingFixed";
import FooterApp from "../../components/Footer/footer";
import { Toaster } from "react-hot-toast";
import { dir } from "i18next";
import { setAcceptLanguage } from "../../lib/axios";
import HeaderApp from "@/components/Header/header";
import { getData } from "@/lib/data";
import Image from "next/image";
import chatLogo from "../../public/logo/chat.png"
import BreadcrumbApp from "@/components/global/breadcrumb";
import Head from "next/head";
import { CustomFlowbiteTheme, Flowbite } from "flowbite-react";
import NextTopLoader from "nextjs-toploader";
// import TawkTo from "@/components/fixedCps/tawkTo";

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
    keywords: data?.meta_tags,
  };
}

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

  const customTheme: CustomFlowbiteTheme = {
    button: {
      color: {
        primary: "bg-primary text-white hover:bg-white hover:text-primary",
      },
    },
    carousel: {
      indicators: {
        active: {
          off: "bg-primary/50 hover:bg-primary dark:bg-gray-800/50 dark:hover:bg-gray-800",
          on: "bg-primary dark:bg-gray-800",
        },
        base: "h-3 w-3 rounded-full",
        wrapper: "absolute bottom-5 start-1/2 flex -translate-x-1/2 gap-x-3",
      },
      control: {
        base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
        icon: "h-5 w-5 text-primary dark:text-gray-800 sm:h-6 sm:w-6",
      },
    },
    pagination: {
      base: "text-base",
      layout: {
        table: {
          base: "text-sm text-gray-700 dark:text-gray-400",
          span: "font-semibold text-gray-900 dark:text-white",
        },
      },
      pages: {
        base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
        showIcon: "inline-flex",
        previous: {
          base: "ms-0 rounded-s-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
          icon: "h-5 w-5",
        },
        next: {
          base: "rounded-e-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
          icon: "h-5 w-5",
        },
        selector: {
          base: "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
          active:
            "bg-cyan-50 text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
          disabled: "cursor-not-allowed opacity-50",
        },
      },
    },
  };

  
  let data;
  const response = await getData("/get_settings", lng);
  data = response?.data;

  return (

    <html lang={lng} dir={dir(lng)} >
      <head>
        <link rel="icon" href="https://admin.itqaneducation.com/admin_assets/assets/images/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Corporation",
              "name": data?.site_name,
              "url": "https://newsite.itqaneducation.com",
              "logo": "https://admin.itqaneducation.com/admin_assets/assets/images/favicon.ico",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": data?.phone,
                "contactType": "customer service",
                "areaServed": "TR",
                "availableLanguage": ["العربية", "Turkish", "فارسى"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": data?.address,
                "addressLocality": data?.address,
                "addressCountry": "TR"
              }
            })
          }}
        />
      </head>
      <body>
        <NextTopLoader />
        <Flowbite theme={{ theme: customTheme }}>
          
    <div dir={dir(lng)}>
      <div className="relative z-[748811718787187841] text-sm">
        <Toaster />
      </div>
      <HeaderApp locale={lng} />
      {/* <BreadcrumbApp /> */}
      <BookingFixed lng={lng} />
      {children}
      <FooterApp lng={lng} />
      {/* <div className="fixed bottom-4 start-4">
        <Image src={chatLogo} className="w-24 h-20" width={400} height={400} alt="" />
      </div> */}
    </div></Flowbite>
      </body>
    </html>
  );
}
