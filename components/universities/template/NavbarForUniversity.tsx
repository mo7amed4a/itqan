import { useTranslation } from "@/i18n";

const Navbar = async ({ lng, name }: { lng: string, name: string }) => {
    const { t } = await useTranslation(lng, "university_details");
  
    return (
      <nav className="flex justify-start gap-x-4 p-4 container lg:max-w-[85vw] mx-auto whitespace-nowrap md:text-lg overflow-x-scroll hidden-scrollbar">
        <a
          href="#university"
          className="text-secondary border-b-2 border-b-secondary transition"
        >
          {name}
        </a>
        <a href="#photos" className="text-gray-500 hover:text-secondary transition">
          {t("links.university_photos")}
        </a>
        <a
          href="#recognitions"
          className="text-gray-500 hover:text-secondary transition"
        >
          {t("links.recognitions")}
        </a>
        <a
          href="#numbers"
          className="text-gray-500 hover:text-secondary transition"
        >
          {t("links.university_numbers")}
        </a>
        <a
          href="#specializations"
          className="text-gray-500 hover:text-secondary transition"
        >
          {t("links.university_specializations")}
        </a>
        <a
          href="#languages"
          className="text-gray-500 hover:text-secondary transition"
        >
          {t("links.university_languages")}
        </a>
        <a
          href="#terms"
          className="text-gray-500 hover:text-secondary transition"
        >
          {t("links.university_Terms")}
        </a>
        <a
          href="#details"
          className="text-gray-500 hover:text-secondary transition"
        >
          {t("links.university_details")}
        </a>
        <a
          href="#faqs"
          className="text-gray-500 hover:text-secondary transition"
        >
          {t("links.university_faqs")}
        </a>
      </nav>
    );
  };

  export default Navbar