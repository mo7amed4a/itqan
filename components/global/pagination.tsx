"use client";

import { Pagination } from "flowbite-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "../../i18n/client";

export function PaginationApp({
  totalPages,
  currentPage,
  lng,
}: {
  totalPages: number;
  currentPage: number;
  lng: string;
}) {
  const { t: dataLang } = useTranslation(lng, "pagination");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onPageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    const url = `${pathname}?${params.toString()}`;
    router.push(url);
  };

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        previousLabel={dataLang("previous")}
        nextLabel={dataLang("next")}
        />
    </div>
  );
}
