"use client";
import { NavbarLink } from "flowbite-react";
import { usePathname } from "next/navigation";
import React from "react";

export default function LinkActive({
  as,
  locale,
  text,
  url
}: {
  as: React.ElementType;
  locale: string;
  text: string;
  url: string
}) {
  const pathname = usePathname();
  const isActive = (url: string): boolean => {
    return pathname.endsWith(`${url}`) ? true : false;
  };

  const activeClass = "!border-b-2 border-red-500 text-red-500";

  return (
    <NavbarLink
      as={as}
      href={`/${locale}/${url}`}
      className={isActive(`/${locale}/${url}`) ? activeClass : (url===""&& pathname.endsWith(`/${locale}`) ? activeClass : '')}
    >
      {text}
    </NavbarLink>
  );
}