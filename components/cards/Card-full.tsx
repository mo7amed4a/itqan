import { Button } from 'flowbite-react';
import Image from 'next/image'
import React from 'react'
import { FaMapSigns } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { TFunction } from "i18next";
import img1 from "../../public/logo/logo-3.png"


export default function CardFull({
  t
}: {
  t: TFunction<"partial_scholarships", undefined>
}) {
  return (
    <div className='bg-white rounded-xl p-4 flex flex-col md:flex-row'>
        <div className='lg:w-1/4 p-4 hidden lg:block'>
            <Image src={img1} className='rounded-full w-52' alt="alt" width={100} height={100} />
        </div>
        <div className='lg:w-3/4 md:py-5 flex flex-col items-start space-y-4'>
        <div className='flex justify-between items-center w-full'>
          <h1 className='text-primary'>{t('university')}</h1>
          <Image src="/logo/logo-3.png" className='rounded-full w-20 lg:hidden' alt="alt" width={100} height={100} />
        </div>
          <div className='flex flex-col md:flex-row md:gap-x-4 md:items-center'>
            <h3 className='flex gap-x-2 text-primary text-base font-bold text-start'>
              <FaMapSigns/>
              {t('specialization.label')}: </h3>
            <ul className='flex flex-col md:flex-row gap-x-5 custom-bullet-red text-base text-gray-500'>
              <li className='list'>{t('specialization.option1')}</li>
              <li className='list'>{t('specialization.option2')}</li>
              <li className='list'>{t('specialization.option3')}</li>
              <li className='list'>{t('specialization.option4')}</li>
            </ul>
          </div>
          <div className='flex flex-col md:flex-row md:gap-x-4 md:items-center'>
            <h3 className='flex gap-x-2 text-primary text-base font-bold text-start'>
              <FaLanguage/>
              {t('language.label')}: </h3>
            <ul className='flex flex-col md:flex-row gap-x-5 custom-bullet-red text-base text-gray-500'>
              <li className='list'>{t('language.value')}</li>
            </ul>
          </div>
          <div className='flex flex-col md:flex-row md:gap-x-4 md:items-center'>
            <h3 className='flex gap-x-2 text-primary text-base font-bold text-start'>
              <FaTag/>
              {t('fees.label')}: </h3>
            <ul className='flex flex-col md:flex-row gap-x-5 custom-bullet-red text-base text-gray-500'>
              <li className='text-red-500'>{t('fees.value')}$</li>
            </ul>
          </div>
          <div className='flex gap-x-4 w-full mt-4'>
            <Button color='primary' className='md:w-1/4 bg-primary text-white hover:bg-white hover:text-primary'>{t('buttons.register_scholarship')}</Button>
            <Button color='failure' className='md:w-1/4'>{t('buttons.view_university')}</Button>
          </div>
        </div>

        
    </div>
  )
}
