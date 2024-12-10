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
            ? "border-b-2 border-secondary text-secondary"
            : ""
        }
      >
        <LinkApp href={`${href}`} lng={params.lng}>
          {allText}
        </LinkApp>
      </li>}
      {links.map((item: any, index: number) => {
        return (
          <li
            key={item.id}
            className={
              searchParams.category === `${item.id}`
                ? "border-b-2 border-secondary text-secondary"
                : ""
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
