"use client";

import { Select } from "flowbite-react";
import { dir } from "i18next";
import { useRouter, usePathname } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LocaleSwitcher({lng}: {lng: string}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname(); // get the current pathname
  const currentLocale = lng; // active locale

  if (typeof document != 'undefined') {
    document.documentElement.lang = currentLocale;
    document.documentElement.dir = dir(currentLocale);
  }

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      const newPath = pathname.replace(`/${currentLocale}`, `/${nextLocale}`);
      router.replace(newPath);
      document.documentElement.lang = nextLocale;
      document.documentElement.dir = dir(nextLocale);
    });
  };
  return (
    <div>
      <Select
        required
        defaultValue={currentLocale}
        className="bg-transparent rtl:w-16"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="ar">ع</option>
        <option value="en">EN</option>
      </Select>
    </div>
  );
}
