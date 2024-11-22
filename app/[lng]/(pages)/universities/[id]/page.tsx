import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsComponent } from "@/components/universities/TabApp";
import { useTranslation } from "@/i18n";
import { getData } from "@/lib/data";

// This is a mock of the data. In a real application, you'd fetch this data from an API.
const universityData = {
  success: true,
  data: {
    university: {
      id: 15,
      name: "Istanbul Aydin University",
      logo: "http://admin.itqaneducation.com/storage/universities/c0zsrXLjfKX3fk2PX0iaRVKXVDgKWYCedUGqQMsH.png",
      image:
        "http://admin.itqaneducation.com/storage/universities/PLDXxusKEA17qwX6SiyFFtjItsZJy2RsUSv7VTUl.jpg",
      description:
        "<p>Istanbul Aydin University<br />\r\nEstablishment of Istanbul Aydin University and its prestigious position</p>\r\n\r\n<p>&nbsp;</p>",
      languages: [{ name: "Turkish" }, { name: "English" }],
      found_year: 1000,
      global_rank: 1000,
    },
    faqs: [
      {
        id: 6,
        question: "why register with us?",
        answer:
          "<p>loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;</p>",
      },
      {
        id: 7,
        question: "can start study immediatly?",
        answer:
          "<p>loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;</p>",
      },
    ],
    study_programs: [
      {
        level_id: 4,
        level_name: "Master",
        programs: [
          {
            id: 6,
            specialization_name: "Medicine",
            study_years: 544,
            study_language: "arabic",
            fees: "54.00",
            annual_fees: 45,
            has_grant: 1,
          },
          // ... other programs
        ],
      },
    ],
    student_housings: [
      {
        id: 13,
        capacity: 200,
        type: "female_housing",
        price: "345.00",
        city: "1",
        beds: 3,
        meals: 3,
        internet: 100,
        name: "housing 1",
        description:
          "<p>housing 1housing 1housing 1housing 1housing 1housing 1housing 1</p>",
        images: [
          "http://admin.itqaneducation.com/storage/universities/MQi7I6luw5biDcgPRJpSfZL0xgqSQVTo2Ud5AmmD.png",
          // ... other images
        ],
      },
      // ... other housings
    ],
    specifications: [
      {
        id: 82,
        name: "The university offers the possibility of studying more than 60 specializations in various fields for bachelor's and master's degrees.",
      },
    ],
  },
};

export default async function UniversityInfo({
  params,
}: {
  params: { lng: string; id: string };
}) {
  const { lng, id } = params;

  const { t } = await useTranslation(lng, "university_details");
  let data = null;
  const response = await getData(`/universities/${id}/details`, lng);
  data = response?.data;

  if (data && data?.university) {
    const {
      university,
      faqs,
      study_programs,
      student_housings,
      specifications,
    } = data;
    return (
      <div className="container mx-auto p-4 text-start">
        <Card className="mb-8 border-none">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Image
                src={university.logo.split("http://").join("https://")}
                alt={university.name}
                width={100}
                height={100}
                className="rounded-full"
              />
              <div className="space-y-1"> 
                <CardTitle>{university.name}</CardTitle>
                <CardDescription>
                  {t("university.foundedIn")} {university.found_year} •{" "}
                  {t("university.globalRank")}: {university.global_rank}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Image
              src={university.image.split("http://").join("https://")}
              alt={university.name}
              width={800}
              height={400}
              className="w-full rounded-lg mb-4"
            />
            <div dangerouslySetInnerHTML={{ __html: university.description }} />
            <div className="mt-4">
              <strong>{t("university.languages")}:</strong>{" "}
              {university.languages.map((lang: any) => lang.name).join(", ")}
            </div>
          </CardContent>
        </Card>

        <TabsComponent
          lng={lng}
          studyPrograms={study_programs}
          studentHousings={student_housings}
          faqs={faqs}
        />

        <Card>
          <CardHeader>
            <CardTitle>{t("specifications.title")}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              {specifications && specifications.length > 0 && 
              Object.keys(specifications).map((key: any) => (
                <li key={specifications[key].id}>
                  {specifications[key].name}
                </li>
              ))
              }
            </ul>
          </CardContent>
        </Card>
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
