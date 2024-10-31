"use client";

import { Select } from "flowbite-react";
import { useRouter, usePathname } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LocaleSwitcher({lng}: {lng: string}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname(); // get the current pathname
  const currentLocale = lng; // active locale

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    startTransition(() => {
      // Replace the current locale with the new one in the URL
      const newPath = pathname.replace(`/${currentLocale}`, `/${nextLocale}`);
      router.replace(newPath);
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
