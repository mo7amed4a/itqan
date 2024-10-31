import LinkApp from "../../../../components/global/LinkApp";
import CardUniversity from "../../../../components/home/CardUniversity";

import { Button, Carousel } from 'flowbite-react'
import React from 'react'
import { useTranslation } from "../../../../i18n";
import Image from "next/image";
import img1 from "../../../../public/images/for-blog.png"
import CarouselApp, { CarouselItem } from "../../../../components/global/Carousel";


export default async function UniversitiesPage({
    params,
}: {
    params: { lng: string };
}) {
    const lng = params.lng;
    const { t } = await useTranslation(lng, 'blogs');
  return (
    <div className='my-10 container mx-auto space-y-20 p-4'>
        <div className='flex justify-center items-center text-center'>
            <h2 className='text-lg font-bold text-gray-500 md:text-2xl'>السكنات الطلابية</h2>
        </div>
        <div>
             <ul className='flex gap-4 [&>li]:pb-2 overflow-x-auto hidden-scrollbar'>
                <li className='border-b-2 border-red-500 text-red-500'>
                    <LinkApp lng={lng} href='/blogs'>سكن </LinkApp>
                </li>
                <li>
                    <LinkApp lng={lng} href='/blogs'>سكن</LinkApp>
                </li>
                <li>
                    <LinkApp lng={lng} href='/blogs'>سكن</LinkApp>
                </li>
                <li>
                    <LinkApp lng={lng} href='/blogs'>سكن</LinkApp>
                </li>
                <li>
                    <LinkApp lng={lng} href='/blogs'>سكن</LinkApp>
                </li>
                <li>
                    <LinkApp lng={lng} href='/blogs'>سكن</LinkApp>
                </li>
             </ul>
        </div>

        <div className='space-y-10'>
            <h1 className='text-lg font-bold text-gray-500 md:text-2xl'>الاكثر زيارة</h1>
            <CarouselApp locale={lng} className="h-[30rem] py-10">
          <div className=" bg-white rounded-xl grid grid-cols-1 gap-4 md:grid-cols-2 h-full shadow-xl p-3 ">
            <CarouselItem className="order-2 md:order-1 flex flex-col justify-center md:space-y-10 md:px-10">
              <h1 className="text-lg font-bold text-gray-500 md:text-2xl">
                {t('slide.university_accreditations')}
              </h1>
              <p className="text-sm text-gray-400">
              {t('slide.enhance_opportunities')}
              </p>
            </CarouselItem>
            <div className={`order-1 md:order-2 h-64 md:h-full bg-center bg-cover md:bg-cover rounded-xl`}>
              <Image src={img1} alt="img" width={300} height={300} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className=" bg-white rounded-xl grid grid-cols-1 gap-4 md:grid-cols-2 h-full shadow-xl p-3 ">
            <CarouselItem className="order-2 md:order-1 flex flex-col justify-center md:space-y-10 md:px-10">
              <h1 className="text-lg font-bold text-gray-500 md:text-2xl">
                {t('slide.university_accreditations')}
              </h1>
              <p className="text-sm text-gray-400">
              {t('slide.enhance_opportunities')}
              </p>
            </CarouselItem>
            <div className={`order-1 md:order-2 h-64 md:h-full bg-center bg-cover md:bg-cover rounded-xl`}>
              <Image src={img1} alt="img" width={300} height={300} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className=" bg-white rounded-xl grid grid-cols-1 gap-4 md:grid-cols-2 h-full shadow-xl p-3 ">
            <CarouselItem className="order-2 md:order-1 flex flex-col justify-center md:space-y-10 md:px-10">
              <h1 className="text-lg font-bold text-gray-500 md:text-2xl">
                {t('slide.university_accreditations')}
              </h1>
              <p className="text-sm text-gray-400">
              {t('slide.enhance_opportunities')}
              </p>
            </CarouselItem>
            <div className={`order-1 md:order-2 h-64 md:h-full bg-center bg-cover md:bg-cover rounded-xl`}>
              <Image src={img1} alt="img" width={300} height={300} className="w-full h-full object-cover" />
            </div>
          </div>
          
        </CarouselApp>
        </div>



        <section className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
            <CardUniversity />
            <CardUniversity />
            <CardUniversity />
            <CardUniversity />
            <CardUniversity />
            <CardUniversity />
            <CardUniversity />
            <CardUniversity />
            <CardUniversity />
            <CardUniversity />
            <CardUniversity />
            <CardUniversity />
            <CardUniversity />
            <CardUniversity />
            <CardUniversity />
            <CardUniversity />
            <CardUniversity />
            <CardUniversity />
            <CardUniversity />
        </section>
        <div className='flex justify-center'>
        <Button color='primary' className='w-64 py-2 font-bold'>
            المزيد
        </Button>
        </div>
    </div>
  )
}
