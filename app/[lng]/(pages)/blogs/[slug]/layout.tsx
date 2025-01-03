import React from "react";

export default function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <div className="bg-[#F5F7F9] text-base text-start">
      {children}
    </div>
  );
}
