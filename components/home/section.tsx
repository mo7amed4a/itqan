import React from "react";

export default function SectionApp({
  children,
  title,
  title2,
  className,
}: {
  children: React.ReactElement;
  title: string;
  title2?: string;
  className: string;
}) {
  return (
    <div className="flex flex-col py-8 space-y-9">
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-gray-500 flex justify-center gap-x-2">
        <span className="text-secondary">{title2}</span>
        <span>{title}</span>
      </h1>
      <div className={className}>{children}</div>
    </div>
  );
}
