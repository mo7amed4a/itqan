"use client";
import React from "react";
import LinkApp from "./LinkApp";
import { useParams } from "next/navigation";

export default function LinksCategory({ links,searchParams, href , allText, service=false}: { links: any, searchParams: any, href: string, allText: string, service?: boolean}) {  
  const params = useParams() as any;

  return (
    <>
      {!service && <li
        className={
          !searchParams.category
            ? "rounded-full bg-secondary text-white px-3 py-1.5"
            : "rounded-full border !border-gray-400 text-gray-500 px-3 py-1.5"
        }
      >
        <LinkApp href={`${href}`} lng={params.lng}>
          {allText}
        </LinkApp>
      </li>}
      {links.map((item: any, index: number) => {
        if (item.slug) {
          item.id = item.slug
        }
        return (
          <li
            key={item.id}
            className={
              searchParams.category === `${item.id}`
                ? "rounded-full bg-secondary text-white px-3 py-1.5"
                : "rounded-full bg-gray-200 border !border-gray-400 text-gray-500 px-3 py-1.5"
            }
          >
            <LinkApp
            className="text-nowrap "
              href={`${href}?category=${item.id}`}
              lng={params.lng}
            >
              {item.name}
            </LinkApp>
          </li>
        );
      })}
    </>
  );
}
