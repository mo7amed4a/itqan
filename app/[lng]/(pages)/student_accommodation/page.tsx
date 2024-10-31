import LinkApp from '@/components/global/LinkApp'
import CardUniversity from '@/components/home/CardUniversity'
import { Button, Carousel } from 'flowbite-react'
import React from 'react'


export default function UniversitiesPage() {
  return (
    <div className='my-10 container mx-auto space-y-20 p-4'>
        <div className='flex justify-center items-center text-center'>
            <h2 className='text-lg font-bold text-gray-500 md:text-2xl'>جامعاتنا التركية</h2>
        </div>
        <div>
             <ul className='flex gap-4 [&>li]:pb-2 overflow-x-auto hidden-scrollbar'>
                <li className='border-b-2 border-red-500 text-red-500'>
                    <LinkApp href='/blogs'>جامعات اسطنبول</LinkApp>
                </li>
                <li>
                    <LinkApp href='/blogs'>جامعات</LinkApp>
                </li>
                <li>
                    <LinkApp href='/blogs'>جامعات</LinkApp>
                </li>
                <li>
                    <LinkApp href='/blogs'>جامعات</LinkApp>
                </li>
                <li>
                    <LinkApp href='/blogs'>جامعات</LinkApp>
                </li>
                <li>
                    <LinkApp href='/blogs'>جامعات</LinkApp>
                </li>
             </ul>
        </div>

        <div className='space-y-10'>
            <h1 className='text-lg font-bold text-gray-500 md:text-2xl'>الاكثر زيارة</h1>

            <Carousel className='h-[65vh] md:h-96 md:px-20'>
            <div className='rounded-xl grid grid-cols-1 gap-4 md:grid-cols-2 h-full shadow-2xl p-3 bg-white'>
                <div className='scale-y-5 flex flex-col justify-center space-y-10 md:px-10'>
                    <h1 className='text-lg font-bold text-gray-500 md:text-2xl'>الاكثر زيارة</h1>
                    <p className='text-sm text-gray-400'>الاكثر زيارة الاكثر زيارة الاكثر زيارة الاكثر زيارة الاكثر زيارة الاكثر زيارة الاكثر زيارةالاكثر زيارة الاكثر زيارة الاكثر زيارة الاكثر زيارة الاكثر زيارة الاكثر زيارة </p>   
                </div>
                <div className='h-64 md:h-full bg-[url(/images/for-universities.png)] bg-center bg-cover md:bg-cover rounded-xl'></div>
            </div>
            <div className='rounded-xl grid grid-cols-1 gap-4 md:grid-cols-2 h-full shadow-2xl p-3 bg-white'>
                <div className='scale-y-5 flex flex-col justify-center space-y-10 md:px-10'>
                    <h1 className='text-lg font-bold text-gray-500 md:text-2xl'>الاكثر زيارة</h1>
                    <p className='text-sm text-gray-400'>الاكثر زيارة الاكثر زيارة الاكثر زيارة الاكثر زيارة الاكثر زيارة الاكثر زيارة الاكثر زيارةالاكثر زيارة الاكثر زيارة الاكثر زيارة الاكثر زيارة الاكثر زيارة الاكثر زيارة </p>   
                </div>
                <div className='h-64 md:h-full bg-[url(/images/for-universities.png)] bg-center bg-cover md:bg-cover rounded-xl'></div>
            </div>
            <div className='rounded-xl grid grid-cols-1 gap-4 md:grid-cols-2 h-full shadow-2xl p-3 bg-white'>
                <div className='scale-y-5 flex flex-col justify-center space-y-10 md:px-10'>
                    <h1 className='text-lg font-bold text-gray-500 md:text-2xl'>الاكثر زيارة</h1>
                    <p className='text-sm text-gray-400'>الاكثر زيارة الاكثر زيارة الاكثر زيارة الاكثر زيارة الاكثر زيارة الاكثر زيارة الاكثر زيارةالاكثر زيارة الاكثر زيارة الاكثر زيارة الاكثر زيارة الاكثر زيارة الاكثر زيارة </p>   
                </div>
                <div className='h-64 md:h-full bg-[url(/images/for-universities.png)] bg-center bg-cover md:bg-cover rounded-xl'></div>
            </div>
            </Carousel>
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
