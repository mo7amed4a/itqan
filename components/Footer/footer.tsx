import { Footer, FooterDivider, FooterIcon } from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsTiktok,
  BsTwitter,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import LinkApp from "../global/LinkApp";
import img1 from "../../public/logo/logo-footer.png";
import Image from "next/image";
import { useTranslation } from "../../i18n";
import { getData } from "@/lib/data";

export default async function FooterApp({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng, "Footer");
  const response = await getData("/get_settings", lng);
  const data = response?.data;

  return (
    data && (
      <Footer container className="bg-primary text-white rounded-none mt-32">
        <div className="w-full">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-3 flex flex-col md:items-center md:text-start text-sm md:text-base">
              <div className="flex flex-col text-start">
                <h2 className="text-lg text-start">{t("contactUs")}</h2>
                <ul className="space-y-2 text-white/80">
                  <li className="flex space-x-1 items-center">
                    <IoLocationSharp />
                    {/* <a href="">{t("address")}</a> */}
                    <a href="">{data.address}</a>
                  </li>
                  <li className="flex items-center space-x-1">
                    <MdEmail />
                    <a href={`mailto:${data.email}`}>{data.email}</a>
                  </li>
                  <li className="flex items-center space-x-1">
                    <IoIosCall />
                    <a href={`tel:${data.phone}`} dir="ltr">
                      {data.phone}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:items-center md:text-center text-sm md:text-base">
              <Image
                src={img1}
                alt="ITQAN Logo"
                width={200}
                height={200}
                className="h-16 w-2/4 md:w-auto bg-white"
              />
              {/* <p className="mt-4 w-3/4 md:text-center">{t("bio")}</p> */}
              <p className="mt-4 w-3/4 md:text-center">{data.footer_text}</p>
            </div>
            <div className="space-y-3 flex flex-col md:items-center md:text-start text-sm md:text-base">
              <div className="flex flex-col text-start">
                <h2 className="text-base md:text-lg">{t("LinkApps")}</h2>
                <ul className="text-sm md:text-base text-gray-300">
                  <li>
                    <LinkApp href="/" lng={lng}>
                      {t("home")}
                    </LinkApp>
                  </li>
                  <li>
                    <LinkApp href="/contact" lng={lng}>
                      {t("contactUs")}
                    </LinkApp>
                  </li>
                  <li>
                    <LinkApp href="/tos" lng={lng}>
                      {t("TOS")}
                    </LinkApp>
                  </li>
                  <li>
                    <LinkApp href="/agents" lng={lng}>
                      {t("agents")}
                    </LinkApp>
                  </li>
                  <li>
                    <LinkApp href="/privacy-policy" lng={lng}>
                      {t("privacyPolicy")}
                    </LinkApp>
                  </li>
                  <li>
                    <LinkApp href="/about" lng={lng}>
                      {t("aboutUs")}
                    </LinkApp>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <FooterDivider />
          <div className="mt-4 flex sm:mt-0 justify-center ">
            <div className="flex gap-6 [&>div>a]:text-white/90">
              <FooterIcon href={data.facebook} icon={BsFacebook} />
              <FooterIcon href={data.instagram} icon={BsInstagram} />
              <FooterIcon href={data.twitter} icon={BsTwitter} />
              <FooterIcon href={data.whatsapp} icon={BsWhatsapp} />
              <FooterIcon href={data.youtube} icon={BsYoutube} />
              <FooterIcon href={data.tiktok} icon={BsTiktok} />
              <FooterIcon href={`mailto:${data.email}`} icon={MdEmail} />
              <FooterIcon href={`tel:${data.phone}`} icon={IoIosCall} />
            </div>
          </div>
          <div className="w-full flex items-center text-sm md:text-lg justify-center text-white gap-x-1 mt-3">
            <span>{t("copyright")}</span>
            <a href="https://mo7amed4a.vercel.app" className="hover:underline">
              {/* {t("siteName")} */}
              {data.site_name}
            </a>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
          {/* <div className="w-full flex rtl:flex-row-reverse items-center text-xs md:text-sm justify-center text-gray-200 gap-x-1">
            <span>Powerd by</span>
            <a href="https://mo7amed4a.vercel.app" className="hover:underline">
              Mohamed
            </a>
          </div> */}
        </div>
      </Footer>
    )
  );
}
