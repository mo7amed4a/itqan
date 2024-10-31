import Image from 'next/image'
import React from 'react'
import img1 from "../../public/images/romantic-fall-scenery-countryside-road-in-foggy-autumn-morning-free-image.webp"
export default function CardUniversity() {
  return (
    <div className="shadow-xl rounded-2xl p-3 hover:!scale-[1.02] duration-300">
    <div className="relative">
      <Image alt='alt' width={500} height={500} className="rounded-2xl w-full" src={img1} />
      <Image alt='alt' width={500} height={500} className="w-28 h-28 md:w-32 md:h-32 rounded-full absolute end-4 -bottom-16 border-4" src={img1} />
    </div>
    <div className="p-4 mt-16">
      <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-primary"> جامعة بيلكنك</h2>
      <h6 className="text-red-500 text-base md:text-lg">أهم التخصصات</h6>
      <ul className="grid grid-cols-2 mt-4 text-xs md:text-lg text-start custom-bullet">
        <li>تخصص الحاسوب</li>
        <li>تخصص الحاسوب</li>
        <li>تخصص الحاسوب</li>
        <li>تخصص الحاسوب</li>
      </ul>
    </div>
  </div>
  )
}
