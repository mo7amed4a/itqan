"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import React from "react";
import { useTranslation } from "@/i18n/client";

export default function BreadcrumbApp({ lng,className }: { lng: string, className?: string }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => segment !== lng && segment !== "");
  const {t} = useTranslation(lng, 'breadcrumb')
  return (
    <Breadcrumb className={`text-sm mt-10 px-4 md:px-0 ${className}`}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={"/"+lng}>{t("Home")}</BreadcrumbLink>
        </BreadcrumbItem>
        {segments.map((segment: string, index) => {
          const href = `/${segments.slice(0, index + 1).join("/")}`;
          const isLast = index === segments.length - 1;
          return (
            <React.Fragment key={href}>
              <BreadcrumbSeparator />
              <BreadcrumbItem
                className={`ml-2 ${
                  isLast
                    ? "text-primary font-semibold"
                    : "text-gray-500 hover:text-primary transition-colors"
                }`}
                aria-current={isLast ? "page" : undefined}
              >
                <BreadcrumbLink href={"/"+ lng + href}>
                  {/* @ts-ignore */}
                  {t(segment)}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
