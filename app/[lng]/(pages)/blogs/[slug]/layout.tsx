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
    <div className="bg-white text-base text-start">
      {children}
    </div>
  );
}
