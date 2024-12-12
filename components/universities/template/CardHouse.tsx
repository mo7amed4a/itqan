import { useTranslation } from "@/i18n";
import React from "react";
import { FaqsComponent } from "../TabApp";
import HousingList from "@/components/housing/HousingList";

export default async function CardHouse({
  student_housings,
  lng,
}: {
  student_housings: any;
  lng: string;
}) {
  const { t } = await useTranslation(lng, "university_details");
  const { t: tHousing } = await useTranslation(lng, "housing");

  return (
    <div id="jj" className="container lg:max-w-[85vw] mx-auto px-4 lg:px-0 py-10 rounded-md">
          <h1 className="text-lg md:text-xl font-bold mb-4">
            {t("university.studentHousings")}
          </h1>
          <div className="grid gap-4">
            {student_housings && student_housings?.length > 0 && (
              <HousingList t={tHousing} housings={student_housings} />
            )}
          </div>
        </div>
  );
}
