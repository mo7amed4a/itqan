import './global.css'

import { dir } from 'i18next'
import HeaderApp from '../../components/Header/header'
import BookingFixed from '../../components/fixedCps/BookingFixed'
import FooterApp from '../../components/Footer/footer'
import { fallbackLng, languages } from '../../i18n/settings'
import { useTranslation } from '../../i18n'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export async function generateMetadata({ params: { lng } }: {
  params: {
    lng: string;
  };
}) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng)
  return {
    title: t('title'),
    description: 'A playground to explore new Next.js 13/14 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching.'
  }
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head >
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
      
      <HeaderApp locale={lng} />
      <BookingFixed lng={lng}/>
        {children}
        <FooterApp lng={lng}/>
      </body>
    </html>
  )
}
