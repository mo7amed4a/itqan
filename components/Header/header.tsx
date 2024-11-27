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
import logo from "../../public/logo/logo.png";
import { useTranslation } from "../../i18n";
import { api, setAcceptLanguage } from "../../lib/axios";
import LinkActive from "./LinkActive";
import BookingFixed from "../fixedCps/BookingFixed";

export default async function HeaderApp({ locale }: { locale: string }) {
  const { t } = await useTranslation(locale, "Header");
  setAcceptLanguage(locale);
  try {
    const response = await api.get("/get_settings");
    const data = response?.data?.data;
  } catch (error) {}

  return (
    <header className="flex flex-col sticky top-0 z-[20] bg-white">
      <div className="bg-primary ">
        <div className="flex flex-col md:flex-row justify-between py-2 px-4 md:px-10 gap-2 md:w-[90vw] mx-auto">
          <div className="flex justify-between md:justify-start gap-x-4">
            <div className="z-[7817874]">
            <BookingFixed lng={locale} child={
              <Button
                color="primary"
                className="border px-0 py-0 text-[10px] md:px-2 md:py-1 md:text-base"
              >
                {t("booking_btn")}
              </Button>
              } />
            </div>
            <div>
              <Button
                color="primary"
                className="border px-0 py-0 text-[10px] md:px-2 md:py-1 md:text-base"
              >
                {t("be_our_agent")}
              </Button>
            </div>
            <div>
              <Button
              as={Link}
              href={`/${locale}/followup_request`}
              className="bg-secondary text-white border border-white px-0 py-0 text-[10px] md:px-2 md:py-1 md:text-base"
            >
              {t("follow_up_on_the_registration_request")}
            </Button>
            
            </div>
          </div>
          <div className="flex justify-between md:justify-start gap-0.5 md:gap-x-2">
            <InputSearch placeholder={t("search_for_the_university")} />
            <LocalSwitcher lng={locale} />
          </div>
        </div>
      </div>
      <div
        className="px-3 md:px-10 md:w-[90vw] md:mx-auto"
      >
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
          <NavbarCollapse className="[&>ul>li>a]:text-xl [&>ul>li>a]:text-nowrap md:overflow-x-scroll 2xl:overflow-x-auto z-40 hidden-scrollbar">
            <LinkActive as={Link} locale={locale} text={t("home")} url="" />
            <LinkActive
              as={Link}
              locale={locale}
              text={t("blog")}
              url="blogs"
            />
            <LinkActive
              as={Link}
              locale={locale}
              text={t("about_us")}
              url="about"
            />
            <LinkActive
              as={Link}
              locale={locale}
              text={t("contact_us")}
              url="contact"
            />
            <LinkActive
              as={Link}
              locale={locale}
              text={t("turkish_universities")}
              url="turkish_universities"
            />
            <LinkActive
              as={Link}
              locale={locale}
              text={t("cyprus_universities")}
              url="cyprus_universities"
            />
            <LinkActive
              as={Link}
              locale={locale}
              text={t("student_accommodation")}
              url="student_accommodation"
            />
            <LinkActive
              as={Link}
              locale={locale}
              text={t("partial_scholarships")}
              url="partial_scholarships"
            />
            {/* <LinkActive
              as={Link}
              locale={locale}
              text={t("opportunities")}
              url="opportunities"
            /> */}
            <LinkActive
              as={Link}
              locale={locale}
              text={t("services")}
              url="services"
            />
          </NavbarCollapse>
        </Navbar>
      </div>
    </header>
  );
}
