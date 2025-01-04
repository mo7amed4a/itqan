import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";

type NumbersType = {
  count: string;
  text: string;
}[];
export default function Numbers({
  data = [
    {
      count: "41K+",
      text: "عدد طلاب اتقان",
    },
    {
      count: "41K+",
      text: "عدد طلاب اتقان",
    },
    {
      count: "41K+",
      text: "عدد طلاب اتقان",
    },
    {
      count: "41K+",
      text: "عدد طلاب اتقان",
    },
    {
      count: "41K+",
      text: "عدد طلاب اتقان",
    }
  ],
}: {
  data?: NumbersType;
}) {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-5 w-full gap-4 px-4 md:px-0 hover:cursor-pointer">
        {data.map((item, index) => (
          <Card key={index} className="border-none hover:shadow-2xl group flex flex-col items-center w-56 text-center py-7 rounded-2xl">
            <CardHeader dir="ltr" className="text-primary text-3xl font-bold group-hover:text-secondary">
              {item.count}
            </CardHeader>
            <CardContent className="text-gray-500">{item.text}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
