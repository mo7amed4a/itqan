import { useTranslation } from "@/i18n";
import React from "react";
import StudyProgramsTabs from "../study-programs-tabs";
import FilterSelect from "@/components/home/Filter";

export default async function CardTableData({
  study_programs,
  lng,
}: {
  study_programs: any;
  lng: string;
}) {
  const { t } = await useTranslation(lng, "university_details");
  return (
    <div className="bg-white">
          <div className="container mx-auto lg:py-24 px-4">
            <h1 className="text-2xl font-bold mb-4 pt-8 md:pt-0">
              {t("tabs.studyPrograms")}
            </h1>
            <div className="flex justify-between items-center flex-col lg:flex-row">
              <StudyProgramsTabs
                studyPrograms={study_programs}
                lng={lng}
              />
              <div className="lg:w-1/4 w-full">
                <FilterSelect col lng={lng} />
              </div>
            </div>
          </div>
        </div>
  );
}
