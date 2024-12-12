import { useTranslation } from "@/i18n";
import React from "react";
import TabConditions from "../TabConditions";
import TabRegistrationDates from "../TabRegistrationDates";

export default async function CardConditionsAndRegistration({
  data,
  lng,
}: {
  data: any;
  lng: string;
}) {
  const { t } = await useTranslation(lng, "university_details");
  return (data.conditions && data.conditions.length > 0 ) || (data.registration_dates && data.registration_dates.length > 0 ) && (
    <section className="px-4 py-10 mt-10 bg-red-500 rounded-md">
          {data.conditions && data.conditions.length > 0 && (
            <div className="container lg:max-w-[85vw] mx-auto text-start space-y-5">
              <h1 className="text-lg md:text-2xl font-bold">
                {t("howTo")} {data.university.name}
              </h1>
              <TabConditions conditions={data.conditions} />
            </div>
          )}
          {data.registration_dates && data.registration_dates.length > 0 && (
            <div className="container mx-auto text-start space-y-5">
              <h1 className="text-lg md:text-2xl font-bold">
                {t("Time")} {data.university.name}
              </h1>
              <TabRegistrationDates conditions={data.registration_dates} />
            </div>
          )}
        </section>
  );
}
