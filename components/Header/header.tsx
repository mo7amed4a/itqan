
import Link from "next/link";
import {
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
import LinkApp from "../global/LinkApp";
import { Button } from "../ui/button";
import OpenBooking from "../fixedCps/OpenBooking";

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
        <div className="flex flex-row justify-between py-2 px-4 md:px-10 gap-2 md:w-[90vw] mx-auto">
          <div className="flex justify-between items-center md:justify-start gap-2 md:gap-4">
            <div className="z-[7817874]">
              <OpenBooking>
                <Button
                  color="primary"
                  className="border text-nowrap px-1 hover:!scale-x-100 h-8 md:h-9 py-0 text-[11px] md:px-4 md:text-base"
                >
                  {t("booking_btn")}
                </Button>
              </OpenBooking>
            </div>
            <div>
              <Button
                color="primary"
                className="border bg-secondary md:bg-primary hover:!scale-x-100 text-nowrap md:px-6 lg:px-10 py-0 text-[9px] px-1 md:text-base h-8 md:h-9"
              >
                {t("be_our_agent")}
              </Button>
            </div>
            <div>
              <LinkApp href={`/followup_request`} lng={locale}>
                <Button className="text-nowrap md:bg-secondary hover:!scale-x-100 text-white border border-white py-0 text-[9px] px-1 md:px-2 md:text-base h-8 md:h-9">
                  {t("follow_up_on_the_registration_request")}
                </Button>
              </LinkApp>
            </div>
          </div>
          <div className="flex justify-between md:justify-start gap-4">
           <div className="hidden md:block">
           <InputSearch placeholder={t("search_for_the_university")} />
           </div>
            <LocalSwitcher lng={locale} />
          </div>
        </div>
      </div>
      <div className="px-3 md:px-6 md:w-[90vw] md:mx-auto">
        <Navbar fluid rounded className="">
          <NavbarBrand as={"div"}>
            <LinkApp href="/" lng={locale}>
              <Image
                src={logo}
                className="w-32 lg:w-44 h-12 lg:h-full bg-contain"
                alt="app Logo"
                width={"200"}
                height={"200"}
              />
            </LinkApp>
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse className="md:!w-9/12 4xl:!w-auto [&>ul>li>a]:text-base lg:[&>ul>li>a]:text-lg xl:[&>ul>li>a]:text-xl [&>ul>li>a]:text-nowrap rtl:xl:[&>ul>li]:ps-2 md:overflow-x-scroll 2xl:overflow-x-auto z-40 hidden-scrollbar">
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
