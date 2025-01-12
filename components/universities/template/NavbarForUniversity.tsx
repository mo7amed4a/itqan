import { useTranslation } from "@/i18n";

const Navbar = async ({ lng, name }: { lng: string, name: string }) => {
    const { t } = await useTranslation(lng, "university_details");
  
    return (
      <nav className="flex justify-start gap-x-4 p-4 mt-4 container lg:max-w-[85vw] mx-auto whitespace-nowrap md:text-lg overflow-x-scroll hidden-scrollbar">
        <a 
          href="#university"
          className="rounded-full bg-secondary text-white px-3 py-1"
        >
          {name}
        </a>
        <a href="#photos" className="rounded-full border !border-gray-400 text-gray-500 px-3 py-1">
          {t("links.university_photos")}
        </a>
        <a
          href="#recognitions"
          className="rounded-full border !border-gray-400 text-gray-500 px-3 py-1"
        >
          {t("links.recognitions")}
        </a>
        <a
          href="#numbers"
          className="rounded-full border !border-gray-400 text-gray-500 px-3 py-1"
        >
          {t("links.university_numbers")}
        </a>
        <a
          href="#specializations"
          className="rounded-full border !border-gray-400 text-gray-500 px-3 py-1"
        >
          {t("links.university_specializations")}
        </a>
        <a
          href="#languages"
          className="rounded-full border !border-gray-400 text-gray-500 px-3 py-1"
        >
          {t("links.university_languages")}
        </a>
        <a
          href="#terms"
          className="rounded-full border !border-gray-400 text-gray-500 px-3 py-1"
        >
          {t("links.university_Terms")}
        </a>
        <a
          href="#details"
          className="rounded-full border !border-gray-400 text-gray-500 px-3 py-1"
        >
          {t("links.university_details")}
        </a>
        <a
          href="#faqs"
          className="rounded-full border !border-gray-400 text-gray-500 px-3 py-1"
        >
          {t("links.university_faqs")}
        </a>
      </nav>
    );
  };

  export default Navbar