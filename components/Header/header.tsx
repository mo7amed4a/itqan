import Link from "next/link";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import InputSearch from "./inputSearch";
import LocalSwitcher from "./local-switcher";
import Image from "next/image";
import logo from '../../public/logo/logo.png'
import { useTranslation } from "../../i18n";
import { api, setAcceptLanguage } from "../../lib/axios";

export default async function HeaderApp({ locale}: {  locale: string}) {
  const {t} = await useTranslation(locale, "Header");
  setAcceptLanguage(locale);
  try {
    const response = await api.get("/get_settings");
    const data = response?.data?.data
    
  } catch (error) {
    
  }

  return (
    <header className="flex flex-col sticky top-0 z-[84]">
      <div className=" bg-primary flex flex-col md:flex-row justify-between py-2 px-4 md:px-10 gap-2">
        <div className="flex justify-between md:justify-start gap-x-4">
          <div>
            <Button color="primary"  className="border px-0 py-0 text-[10px] md:px-2 md:py-1 md:text-base" >
              {t("booking_btn")}
            </Button>
          </div>
          <div>
            <Button color="primary" className="border px-0 py-0 text-[10px] md:px-2 md:py-1 md:text-base" >{t('be_our_agent')}</Button>
          </div>
          <div>
            <Button as={Link} href={`/${locale}/followup_request`} color="failure" className="border px-0 py-0 text-[10px] md:px-2 md:py-1 md:text-base">{t('follow_up_on_the_registration_request')}</Button>
          </div>
        </div>
        <div className="flex justify-between md:justify-start gap-0.5 md:gap-x-2">
          <InputSearch placeholder={t('search_for_the_university')} />
          <LocalSwitcher lng={locale} />
        </div>
      </div>
      <div className="px-3 md:px-10 bg-white">
        <Navbar fluid rounded>
          <NavbarBrand as={Link} href="/">
            <Image
              src={logo}
              className="w-24 md:w-36 h-10 md:h-full bg-contain"
              alt="app Logo"
              width={"200"}
              height={"200"}
            />
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse className="[&>ul>li>a]:text-base md:overflow-x-scroll xl:overflow-x-auto z-40 hidden-scrollbar">
            <NavbarLink as={Link} href={`/${locale}/`}>{t('home')}</NavbarLink>
            <NavbarLink as={Link} href={`/${locale}/blogs`}>{t('blog')}</NavbarLink>
            <NavbarLink as={Link} href={`/${locale}/about`}>{t('about_us')}</NavbarLink>
            <NavbarLink as={Link} href={`/${locale}/contact`}>{t('contact_us')}</NavbarLink>
            <NavbarLink as={Link} href={`/${locale}/turkish_universities`}>{t('turkish_universities')}</NavbarLink>
            <NavbarLink as={Link} href={`/${locale}/cyprus_universities`}>{t('cyprus_universities')}</NavbarLink>
            <NavbarLink as={Link} href={`/${locale}/student_accommodation`}>{t('student_accommodation')}</NavbarLink>
            <NavbarLink as={Link} href={`/${locale}/partial_scholarships`}>{t('partial_scholarships')}</NavbarLink>
            <NavbarLink as={Link} href={`/${locale}/opportunities`}>{t('opportunities')}</NavbarLink>
            <NavbarLink as={Link} href={`/${locale}/services`}>{t('services')}</NavbarLink>
          </NavbarCollapse>
        </Navbar>
      </div>
    </header>
  );
}
