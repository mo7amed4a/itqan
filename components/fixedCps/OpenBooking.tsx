"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function OpenBooking({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onPageChange = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("booking", "open");
    const url = `${pathname}?${params.toString()}`;
    router.push(url);
  };

  return <div onClick={onPageChange}>{children}</div>;
}
