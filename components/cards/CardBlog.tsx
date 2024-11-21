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
export default function CardBlog({ blog , lng}: { blog: BlogItemType , lng: string}) {
  return (
    <LinkApp lng={lng} href={`/blogs/${blog.slug}`}>
      <div className="shadow-xl rounded-2xl p-3 hover:!scale-[1.02] duration-300">
        <div className="relative">
          <Image
            alt="alt"
            width={500}
            height={500}
            className="rounded-2xl w-full"
            src={blog.image}
          />
          <span className="rounded-md bg-primary/60 font-bold text-white text-sm p-2 absolute end-4 bottom-4 ">
            {formatDate(blog.created_at)}
          </span>
        </div>
        <div className="p-4 space-y-2 text-start">
          <h2 className="font-bold text-base md:text-lg xl:text-xl lg:text-2xl text-gray-500">
            {blog.title}
          </h2>
          {/* <h6 className="text-red-500 md:text-lg">أهم التخصصات</h6> */}
          {/* <ul className="grid grid-cols-2 mt-4 md:text-lg custom-bullet">
          <li>هندسة الحاسوب</li>
          <li>هندسة الحاسوب</li>
          <li>هندسة الحاسوب</li>
          <li>هندسة الحاسوب</li>
        </ul> */}
          <p className="text-sm md:text-base text-gray-400" dangerouslySetInnerHTML={{ __html: blog.content }}></p>
        </div>
      </div>
    </LinkApp>
  );
}
