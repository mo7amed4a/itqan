
import {
  Footer,
  FooterDivider,
  FooterIcon,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import LinkApp from "../global/LinkApp";
import img1 from "../../public/logo/logo-footer.png"
import Image from "next/image";
import { useTranslation } from "../../i18n";

export default async function FooterApp({lng}: {lng: string}) {
  const { t } = await useTranslation(lng, "Footer");
  return (
    <Footer container className="bg-primary text-white rounded-none mt-32">
      <div className="w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-around gap-y-7">
          <div className="space-y-3 text-sm md:text-base">
            <h2 className="text-lg">{t("contactUs")}</h2>
            <ul className="space-y-2 text-white/80">
              <li className="flex space-x-1 items-center">
                <IoLocationSharp />
                <a href="">{t("address")}</a>
              </li>
              <li className="flex items-center space-x-1">
                <MdEmail />
                <a href="mailto:info@itqaneducation.com">
                  info@itqaneducation.com
                </a>
              </li>
              <li className="flex items-center space-x-1">
                <IoIosCall />
                <a href="tel:05515566888" dir="ltr">0551 55 66 888</a>
              </li>
            </ul>
          </div>
            <div className="flex flex-col md:items-center md:text-center text-sm md:text-base">
              <Image
                src={img1}
                alt="ITQAN Logo"
                width={200}
                height={200}
                className="h-16 w-2/4 md:w-auto bg-white"
              />
            <p className="mt-4 w-3/4 md:text-center">{t("bio")}</p>
            </div>
          <div className="space-y-3">
            <h2 className="text-base md:text-lg">{t("LinkApps")}</h2>
            <ul className="text-sm md:text-base">
              <li>
                <LinkApp href="/" lng={lng}>{t("home")}</LinkApp>
              </li>
              <li>
                <LinkApp href="/contact-us" lng={lng}>{t("contactUs")}</LinkApp>
              </li>
              <li>
                <LinkApp href="/about" lng={lng}>{t("aboutUs")}</LinkApp>
              </li>
            </ul>
          </div>
        </div>

        <FooterDivider />
          <div className="mt-4 flex sm:mt-0 justify-center ">
          <div className="flex gap-6 [&>div>a]:text-white/90">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsGithub} />
            <FooterIcon href="#" icon={BsDribbble} />
          </div>
        </div>
        <div className="w-full flex items-center text-sm md:text-lg justify-center text-white gap-x-1 mt-3">
          <span>{t("copyright")}</span>
          <a href="https://mo7amed4a.vercel.app" className="hover:underline">
            {t("siteName")}
          </a>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </Footer>
  );
}
