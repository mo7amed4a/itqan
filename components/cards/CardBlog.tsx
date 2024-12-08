import Image from "next/image";
import React from "react";

export interface BlogItemType {
  id: number;
  blog_category_id: number;
  slug: string;
  is_slider: number;
  image: string;
  created_at: string;
  updated_at: string;
  title: string;
  content: string;
}

// import img1 from "../../public/images/for-blog.png";
import LinkApp from "../global/LinkApp";
import { formatDate } from "../../lib/moment";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
export default function CardBlog({
  blog,
  lng,
  textBtn
}: {
  blog: BlogItemType;
  lng: string;
  textBtn: string
}) {
  return (
    <LinkApp lng={lng} href={`/blogs/${blog.slug}`}>
      <Card className="flex w-full border-none rounded-3xl shadow-none hover:shadow-xl h-full px-3 duration-300 cursor-pointer md:my-4 group flex-col justify-center">
          {/* <div className="bg-[#21837F]/50 rounded-xl size-full absolute inset-0 z-0"></div> */}
        <CardHeader className="h-40 md:h-64 relative p-0 rounded-3xl group-hover:before:bg-transparent before:bg-[#21837F]/40 before:absolute before:inset-0 before:transition-all before:duration-300 before:size-full before:z-10 overflow-hidden">
          <Image
            src={`${blog.image.split("http://").join("https://")}`}
            alt="alt"
            width={500}
            height={500}
            className="size-full rounded-3xl"
          />
          <Badge className="rounded-md font-bold text-white bg-blue-200/40 backdrop-blur-md absolute end-4 bottom-5 z-10">
            {formatDate(blog.created_at).split('/').join('.')}
          </Badge>
        </CardHeader>
        <CardContent className="space-y-4 px-0 py-6">
          <CardTitle className="text-sm md:text-2xl font-bold text-gray-500 group-hover:text-primary text-wrap w-full">
            {blog.title}
          </CardTitle>
          <p
            className="text-xs md:text-base text-gray-400 line-clamp-2 py-"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></p>
          <div className="flex justify-center">
            <Button
              color="primary"
              className="w-40 h-8 md:!h-auto md:py-3 group-hover:bg-secondary font-bold bg-primary text-white"
            >
              {textBtn}
            </Button>
          </div>
        </CardContent>
      </Card>
    </LinkApp>
  );
}
