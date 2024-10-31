import Image from 'next/image'
import React from 'react'


import img1 from "../../public/images/for-blog.png"
export default function CardBlog({
  title="title",
  description="description",
}: {
  title?: string,
  description?: string
}) {
  return (
    <div className="shadow-xl rounded-2xl p-3 hover:!scale-[1.02] duration-300">
    <div className="relative">
      <Image alt='alt' width={500} height={500} className="rounded-2xl w-full" src={img1} />
      <span className="rounded-md bg-primary/60 font-bold text-white text-sm p-2 absolute end-4 bottom-4 " >
        04.07.2024
      </span>
    </div>
    <div className="p-4 space-y-2 text-start">
      <h2 className="font-bold text-base md:text-lg xl:text-xl lg:text-2xl text-gray-500">{title}</h2>
      {/* <h6 className="text-red-500 md:text-lg">أهم التخصصات</h6> */}
      {/* <ul className="grid grid-cols-2 mt-4 md:text-lg custom-bullet">
        <li>هندسة الحاسوب</li>
        <li>هندسة الحاسوب</li>
        <li>هندسة الحاسوب</li>
        <li>هندسة الحاسوب</li>
      </ul> */}
      <p className='text-sm md:text-base text-gray-400'>{description}</p>

    </div>
  </div>
  )
}
