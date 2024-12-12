import { useTranslation } from "@/i18n";
import React from "react";
import { FaqsComponent } from "../TabApp";

export default async function CardFaqs({
  faqs,
  student_housings,
  study_programs,
  lng,
}: {
  faqs: any;
  student_housings: any;
  study_programs: any;
  lng: string;
}) {
  const { t } = await useTranslation(lng, "university_details");
  return (
    <div className="container lg:max-w-[85vw] mx-auto px-4 lg:px-0 py-10 mt-10 space-y-6">
      <h1 className="text-lg md:text-xl font-bold">{t("university.faqs")}</h1>
      <div className="lg:w-3/5">
        <FaqsComponent
          lng={lng}
          studyPrograms={study_programs}
          studentHousings={student_housings}
          faqs={faqs}
        />
      </div>
    </div>
  );
}
