import InputSearch from "@/components/Header/inputSearch";
import { Input } from "@/components/ui/input";
import { useTranslation } from "@/i18n";
import InputSearchBlog from "./inputSearchBlog";

const NavbarBlog = async ({ lng, name }: { lng: string, name?: string }) => {
    const { t } = await useTranslation(lng, "university_details");
  
    return (
      <nav className="flex justify-start gap-x-4 p-4 mt-4 container lg:max-w-[85vw] mx-auto whitespace-nowrap text-lg md:text-lg overflow-x-scroll hidden-scrollbar">
        <a 
          href="#university"
          className="rounded-full bg-secondary text-white px-3 py-1"
        >
          الدراسة في تركيا
        </a>
        <a href="#photos" className="rounded-full border !border-gray-400 text-gray-500 px-3 py-1">
          المعيشة في تركيا
        </a>
        <a
          href="#recognitions"
          className="rounded-full border !border-gray-400 text-gray-500 px-3 py-1"
        >
          التخصصات الجامعية
        </a>
        <a
          href="#numbers"
          className="rounded-full border !border-gray-400 text-gray-500 px-3 py-1"
        >
          الدراسة عن بعد
        </a>
        <a
          href="#specializations"
          className="rounded-full border !border-gray-400 text-gray-500 px-3 py-1"
        >
          المنح التركية
        </a>
        <a
          href="#languages"
          className="rounded-full border !border-gray-400 text-gray-500 px-3 py-1"
        >
          تطوير الذات
        </a>
        <a
          href="#terms"
          className="rounded-full border !border-gray-400 text-gray-500 px-3 py-1"
        >
          الكل
        </a>
        
      </nav>
    );
  };

  export default NavbarBlog