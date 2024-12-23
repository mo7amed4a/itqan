import { getData } from "@/lib/data";
import CardUniOne from "@/components/universities/template/CardUniOne";
import CardVideo from "@/components/universities/template/CardVedio";
import CardConfessions from "@/components/universities/template/CardConfessions";
import CardRank from "@/components/universities/template/CardRank";
import CardTableData from "@/components/universities/template/CardTableData";
import CardLanguage from "@/components/universities/template/CardLanguage";
import CardConditionsAndRegistration from "@/components/universities/template/CardConditionsAndRegistration";
import CardFaqs from "@/components/universities/template/CardFaqs";
import CardDetails from "@/components/universities/template/CardDetails";
import CardHouse from "@/components/universities/template/CardHouse";
import { useTranslation } from "@/i18n";
import Navbar from "@/components/universities/template/NavbarForUniversity";
import CardAlbum from "@/components/universities/template/CardAlbum";
import CardFeatures from "@/components/universities/template/CardFeatures";
import BreadcrumbApp from "@/components/global/breadcrumb";

export default async function UniversitiesPage({
  params,
}: {
  params: { lng: string; slug: string };
}) {
  const { lng, slug } = params;
  const { t } = await useTranslation(lng, "university_details");
  let data: any = null;
  const response = await getData(`/universities/${slug}/details`, lng);
  data = response?.data;

  let settings;
  const responseSettings = await getData("/get_settings", params.lng);
  settings = responseSettings?.data;

  if (data && data?.university) {
    const { university, faqs, study_programs, student_housings } = data;
    return (
      <div className="text-start text-base text-gray-500 scroll-smooth">
        <div className="container lg:max-w-[85%] mx-auto">
          <BreadcrumbApp lng={lng} />
        </div>
        <section className="my-12 px-4 lg:px-0">
          <h1 className="text-xl md:text-2xl font-bold text-gray-500 text-center">
            {university.name}
          </h1>
        </section>
        <Navbar lng={lng} name={university.name} />
        <div className="container lg:max-w-[85vw] mx-auto px-4 py-5">
          <h2 className="text-lg md:text-xl font-bold text-gray-500">
            {t("university.info")} {university.name}
          </h2>
        </div>
        <CardUniOne university={university} lng={lng} />
        <div id="photos">
          <CardVideo university={university} lng={lng} />
          <CardAlbum university={university} lng={lng} />
        </div>

        {data.specifications && (
          <CardFeatures
            university={university}
            specifications={data.specifications}
            lng={lng}
          />
        )}
        {university && (
          <div id="recognitions" className="scroll-mt-96">
            <CardConfessions university={university} lng={lng} />
          </div>
        )}
        {university && (
          <div id="numbers" className="scroll-mt-96">
            <CardRank university={university} lng={lng} />
          </div>
        )}
        {study_programs && study_programs.length > 0 && (
          <div id="specializations" className="scroll-mt-96">
            <CardTableData study_programs={data.study_programs} lng={lng} />
          </div>
        )}
        {university && (
          <div id="languages" className="scroll-mt-96">
            <CardLanguage university={university} lng={lng} />
          </div>
        )}

        {data && (
          <div id="terms" className="scroll-mt-96">
            <CardConditionsAndRegistration data={data} lng={lng} />
          </div>
        )}
        {university.description && (
          <div id="details" className="scroll-mt-96">
            <CardDetails university={university} lng={lng} />
          </div>
        )}
        {faqs && student_housings && study_programs && (
          <div id="faqs" className="scroll-mt-96">
            <CardFaqs
              faqs={faqs}
              student_housings={student_housings}
              study_programs={study_programs}
              lng={lng}
            />
          </div>
        )}
        {student_housings && (
          <CardHouse student_housings={student_housings} lng={lng} />
        )}



<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": settings?.site_name,
            author: settings?.site_name,
            interactionStatistic: [
              {
                "@type": "InteractionCounter",
                interactionService: {
                  "@type": "WebSite",
                  name: "Twitter",
                  url: "http://www.twitter.com",
                },
                interactionType: "https://schema.org/ShareAction",
                userInteractionCount: "1203",
              },
              {
                "@type": "InteractionCounter",
                interactionType: "https://schema.org/CommentAction",
                userInteractionCount: "78",
              },
            ],
            name: university.name,
          }),
        }}
      />
      
      </div>
    );
  } else
    return (
      <div className="h-[50vh] flex justify-center items-center">
        <h1 className="text-2xl text-gray-500 font-bold">
          University Not Found
        </h1>
      </div>
    );
}
