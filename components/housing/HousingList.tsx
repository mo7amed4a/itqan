import React from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';

const HousingList = ({ housings, t }:{
  housings: any,
  t: any
}) => {
  return (
    <>
        { housings.map((housing: any) => (<Card key={housing.id} className="flex flex-col md:flex-row md:h-96 rounded-xl shadow-none border-none hover:shadow-md">
          <CardHeader className="md:w-2/4 px-8 py-12 order-2 md:order-1 space-y-10">
            <div className="flex gap-4">
              <div className="space-y-2 text-gray-500">
                <h1 className="text-lg font-[600]">{housing.name}</h1>
                <span className="text-base text-secondary ">{housing.city}</span>
              </div>
            </div>
            {/* <div className="text-gray-500">
              <p
                dangerouslySetInnerHTML={{ __html: housing.description }}
              ></p>
            </div> */}
            <div className="text-sm flex items-end flex-wrap mt-5 text-center gap-4 justify-center font-[600]">
              <div className="bg-gray-50 flex flex-col items-center p-3 space-y-2 rounded-lg">
                <svg className="size-7 fill-primary" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 315 315" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 315 315"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="m292.617,146.484h-3.105v-51.322c0-17.997-14.642-32.639-32.638-32.639h-198.748c-17.996,0-32.638,14.642-32.638,32.639v51.322h-3.106c-12.341,0-22.382,10.041-22.382,22.383v33.162c0,12.342 10.041,22.383 22.383,22.383h27.672v21.064c0,3.866 3.134,7 7,7s7-3.134 7-7v-21.064h186.891v21.064c0,3.866 3.134,7 7,7 3.866,0 7-3.134 7-7v-21.064h27.672c12.342,0 22.383-10.041 22.383-22.383v-33.162c-0.001-12.342-10.042-22.383-22.384-22.383zm-253.129-51.322c0-10.277 8.36-18.639 18.638-18.639h198.748c10.277,0 18.638,8.361 18.638,18.639v51.322h-8.974v-14.057c0-8.964-7.292-16.256-16.255-16.256h-71.754c-8.965,0-16.258,7.292-16.258,16.256v14.057h-9.543v-14.057c0-8.964-7.293-16.256-16.258-16.256h-71.753c-8.963,0-16.255,7.292-16.255,16.256v14.057h-8.974v-51.322zm136.783,51.322v-14.057c0-1.223 1.034-2.256 2.258-2.256h71.754c1.223,0 2.255,1.033 2.255,2.256v14.057h-76.267zm-113.809,0v-14.057c0-1.223 1.032-2.256 2.255-2.256h71.754c1.224,0 2.258,1.033 2.258,2.256v14.057h-76.267zm238.538,55.545c0,4.622-3.761,8.383-8.383,8.383h-270.234c-4.622,0-8.383-3.761-8.383-8.383v-33.162c0-4.622 3.761-8.383 8.383-8.383h270.234c4.622,0 8.383,3.761 8.383,8.383v33.162z" /> </g></svg>
                <h2 className="text-primary border-b text-base">{t('beds')}</h2>
                <p className="text-secondary py-2">{housing.beds}</p>
              </div>
              <div className="bg-gray-50 flex flex-col items-center p-3 space-y-2 rounded-lg">
                <svg className="size-7 fill-primary" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 315 315" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 315 315"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="m292.617,146.484h-3.105v-51.322c0-17.997-14.642-32.639-32.638-32.639h-198.748c-17.996,0-32.638,14.642-32.638,32.639v51.322h-3.106c-12.341,0-22.382,10.041-22.382,22.383v33.162c0,12.342 10.041,22.383 22.383,22.383h27.672v21.064c0,3.866 3.134,7 7,7s7-3.134 7-7v-21.064h186.891v21.064c0,3.866 3.134,7 7,7 3.866,0 7-3.134 7-7v-21.064h27.672c12.342,0 22.383-10.041 22.383-22.383v-33.162c-0.001-12.342-10.042-22.383-22.384-22.383zm-253.129-51.322c0-10.277 8.36-18.639 18.638-18.639h198.748c10.277,0 18.638,8.361 18.638,18.639v51.322h-8.974v-14.057c0-8.964-7.292-16.256-16.255-16.256h-71.754c-8.965,0-16.258,7.292-16.258,16.256v14.057h-9.543v-14.057c0-8.964-7.293-16.256-16.258-16.256h-71.753c-8.963,0-16.255,7.292-16.255,16.256v14.057h-8.974v-51.322zm136.783,51.322v-14.057c0-1.223 1.034-2.256 2.258-2.256h71.754c1.223,0 2.255,1.033 2.255,2.256v14.057h-76.267zm-113.809,0v-14.057c0-1.223 1.032-2.256 2.255-2.256h71.754c1.224,0 2.258,1.033 2.258,2.256v14.057h-76.267zm238.538,55.545c0,4.622-3.761,8.383-8.383,8.383h-270.234c-4.622,0-8.383-3.761-8.383-8.383v-33.162c0-4.622 3.761-8.383 8.383-8.383h270.234c4.622,0 8.383,3.761 8.383,8.383v33.162z" /> </g></svg>
                <h2 className="text-primary  border-b text-base">{t('meals')}</h2>
                <p className="text-secondary py-2">{housing.meals}</p>
              </div>
              <div className="bg-gray-50 flex flex-col items-center p-3 space-y-2 rounded-lg">
                <svg className="size-7 fill-primary" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 315 315" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 315 315"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="m292.617,146.484h-3.105v-51.322c0-17.997-14.642-32.639-32.638-32.639h-198.748c-17.996,0-32.638,14.642-32.638,32.639v51.322h-3.106c-12.341,0-22.382,10.041-22.382,22.383v33.162c0,12.342 10.041,22.383 22.383,22.383h27.672v21.064c0,3.866 3.134,7 7,7s7-3.134 7-7v-21.064h186.891v21.064c0,3.866 3.134,7 7,7 3.866,0 7-3.134 7-7v-21.064h27.672c12.342,0 22.383-10.041 22.383-22.383v-33.162c-0.001-12.342-10.042-22.383-22.384-22.383zm-253.129-51.322c0-10.277 8.36-18.639 18.638-18.639h198.748c10.277,0 18.638,8.361 18.638,18.639v51.322h-8.974v-14.057c0-8.964-7.292-16.256-16.255-16.256h-71.754c-8.965,0-16.258,7.292-16.258,16.256v14.057h-9.543v-14.057c0-8.964-7.293-16.256-16.258-16.256h-71.753c-8.963,0-16.255,7.292-16.255,16.256v14.057h-8.974v-51.322zm136.783,51.322v-14.057c0-1.223 1.034-2.256 2.258-2.256h71.754c1.223,0 2.255,1.033 2.255,2.256v14.057h-76.267zm-113.809,0v-14.057c0-1.223 1.032-2.256 2.255-2.256h71.754c1.224,0 2.258,1.033 2.258,2.256v14.057h-76.267zm238.538,55.545c0,4.622-3.761,8.383-8.383,8.383h-270.234c-4.622,0-8.383-3.761-8.383-8.383v-33.162c0-4.622 3.761-8.383 8.383-8.383h270.234c4.622,0 8.383,3.761 8.383,8.383v33.162z" /> </g></svg>
                <h2 className="text-primary border-b text-base">{t('type')}</h2>
                <p className="text-secondary py-2">{housing.type === "male_housing" ? t('male') : t("female")}</p>
              </div>
              <div className="bg-gray-50 flex flex-col items-center p-3 space-y-2 rounded-lg">
                <svg className="size-7 fill-primary" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 315 315" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 315 315"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="m292.617,146.484h-3.105v-51.322c0-17.997-14.642-32.639-32.638-32.639h-198.748c-17.996,0-32.638,14.642-32.638,32.639v51.322h-3.106c-12.341,0-22.382,10.041-22.382,22.383v33.162c0,12.342 10.041,22.383 22.383,22.383h27.672v21.064c0,3.866 3.134,7 7,7s7-3.134 7-7v-21.064h186.891v21.064c0,3.866 3.134,7 7,7 3.866,0 7-3.134 7-7v-21.064h27.672c12.342,0 22.383-10.041 22.383-22.383v-33.162c-0.001-12.342-10.042-22.383-22.384-22.383zm-253.129-51.322c0-10.277 8.36-18.639 18.638-18.639h198.748c10.277,0 18.638,8.361 18.638,18.639v51.322h-8.974v-14.057c0-8.964-7.292-16.256-16.255-16.256h-71.754c-8.965,0-16.258,7.292-16.258,16.256v14.057h-9.543v-14.057c0-8.964-7.293-16.256-16.258-16.256h-71.753c-8.963,0-16.255,7.292-16.255,16.256v14.057h-8.974v-51.322zm136.783,51.322v-14.057c0-1.223 1.034-2.256 2.258-2.256h71.754c1.223,0 2.255,1.033 2.255,2.256v14.057h-76.267zm-113.809,0v-14.057c0-1.223 1.032-2.256 2.255-2.256h71.754c1.224,0 2.258,1.033 2.258,2.256v14.057h-76.267zm238.538,55.545c0,4.622-3.761,8.383-8.383,8.383h-270.234c-4.622,0-8.383-3.761-8.383-8.383v-33.162c0-4.622 3.761-8.383 8.383-8.383h270.234c4.622,0 8.383,3.761 8.383,8.383v33.162z" /> </g></svg>
                <h2 className="text-primary border-b text-base">{t('price')}</h2>
                <p className="text-secondary py-2">{housing.price}</p>
              </div>
              <div className="bg-gray-50 flex flex-col items-center p-3 space-y-2 rounded-lg">
                <svg className="size-7 fill-primary" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 315 315" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 315 315"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="m292.617,146.484h-3.105v-51.322c0-17.997-14.642-32.639-32.638-32.639h-198.748c-17.996,0-32.638,14.642-32.638,32.639v51.322h-3.106c-12.341,0-22.382,10.041-22.382,22.383v33.162c0,12.342 10.041,22.383 22.383,22.383h27.672v21.064c0,3.866 3.134,7 7,7s7-3.134 7-7v-21.064h186.891v21.064c0,3.866 3.134,7 7,7 3.866,0 7-3.134 7-7v-21.064h27.672c12.342,0 22.383-10.041 22.383-22.383v-33.162c-0.001-12.342-10.042-22.383-22.384-22.383zm-253.129-51.322c0-10.277 8.36-18.639 18.638-18.639h198.748c10.277,0 18.638,8.361 18.638,18.639v51.322h-8.974v-14.057c0-8.964-7.292-16.256-16.255-16.256h-71.754c-8.965,0-16.258,7.292-16.258,16.256v14.057h-9.543v-14.057c0-8.964-7.293-16.256-16.258-16.256h-71.753c-8.963,0-16.255,7.292-16.255,16.256v14.057h-8.974v-51.322zm136.783,51.322v-14.057c0-1.223 1.034-2.256 2.258-2.256h71.754c1.223,0 2.255,1.033 2.255,2.256v14.057h-76.267zm-113.809,0v-14.057c0-1.223 1.032-2.256 2.255-2.256h71.754c1.224,0 2.258,1.033 2.258,2.256v14.057h-76.267zm238.538,55.545c0,4.622-3.761,8.383-8.383,8.383h-270.234c-4.622,0-8.383-3.761-8.383-8.383v-33.162c0-4.622 3.761-8.383 8.383-8.383h270.234c4.622,0 8.383,3.761 8.383,8.383v33.162z" /> </g></svg>
                <h2 className="text-primary border-b text-base">{t('capacity')}</h2>
                <p className="text-secondary py-2">{housing.capacity}</p>
              </div>
              <div className="bg-gray-50 flex flex-col items-center p-3 space-y-2 rounded-lg">
                <svg className="size-7 fill-primary" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 315 315" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 315 315"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="m292.617,146.484h-3.105v-51.322c0-17.997-14.642-32.639-32.638-32.639h-198.748c-17.996,0-32.638,14.642-32.638,32.639v51.322h-3.106c-12.341,0-22.382,10.041-22.382,22.383v33.162c0,12.342 10.041,22.383 22.383,22.383h27.672v21.064c0,3.866 3.134,7 7,7s7-3.134 7-7v-21.064h186.891v21.064c0,3.866 3.134,7 7,7 3.866,0 7-3.134 7-7v-21.064h27.672c12.342,0 22.383-10.041 22.383-22.383v-33.162c-0.001-12.342-10.042-22.383-22.384-22.383zm-253.129-51.322c0-10.277 8.36-18.639 18.638-18.639h198.748c10.277,0 18.638,8.361 18.638,18.639v51.322h-8.974v-14.057c0-8.964-7.292-16.256-16.255-16.256h-71.754c-8.965,0-16.258,7.292-16.258,16.256v14.057h-9.543v-14.057c0-8.964-7.293-16.256-16.258-16.256h-71.753c-8.963,0-16.255,7.292-16.255,16.256v14.057h-8.974v-51.322zm136.783,51.322v-14.057c0-1.223 1.034-2.256 2.258-2.256h71.754c1.223,0 2.255,1.033 2.255,2.256v14.057h-76.267zm-113.809,0v-14.057c0-1.223 1.032-2.256 2.255-2.256h71.754c1.224,0 2.258,1.033 2.258,2.256v14.057h-76.267zm238.538,55.545c0,4.622-3.761,8.383-8.383,8.383h-270.234c-4.622,0-8.383-3.761-8.383-8.383v-33.162c0-4.622 3.761-8.383 8.383-8.383h270.234c4.622,0 8.383,3.761 8.383,8.383v33.162z" /> </g></svg>
                <h2 className="text-primary border-b text-base">{t('internet')}</h2>
                <p className="text-secondary py-2">{housing.internet}</p>
              </div>
            </div>

            <div className='md:w-3/4 mx-auto gap-5 grid grid-cols-2'>
              <Button>
               {t('viewImage')}
              </Button>
              <Button className='bg-secondary'>
              {t('register')}
              </Button>
            </div>
            
            {/* <div className="text-sm flex text-center gap-4 justify-center">
              <div className="bg-gray-50 py-3 px-5 space-y-2 rounded-lg">
                <h2 className="text-primary text-base">الترتيب العالمي</h2>
                <p className="text-secondary">{university.global_rank}</p>
              </div>
              <div className="bg-gray-50 py-3 px-5 space-y-2 rounded-lg">
                <h2 className="text-primary text-base">الترتيب المحلي</h2>
                <p className="text-secondary">{university.local_rate}</p>
              </div>
              <div className="bg-gray-50 py-3 px-5 space-y-2 rounded-lg">
                <h2 className="text-primary text-base">عدد الطلاب</h2>
                <p className="text-secondary">{university.student_count}</p>
              </div>
            </div> */}
          </CardHeader>
          <CardContent className="md:w-2/4 p-4 md:order-2">
            <div className="h-full">
            {housing.images[0] ? (
            <Image
              src={housing.images[0].split("http://").join("https://")}
              alt={housing.name}
              width={500}
              height={500}
              className="size-full rounded-xl"
            />
              // <img src={housing.images[0]} alt={housing.name} className="w-full h-40 object-cover rounded-md" />
            ) : (
              <div className="bg-gray-200 w-full h-full rounded-md flex items-center justify-center">
                <span className="text-gray-500">{t('no_image')}</span>
              </div>
            )}
          </div>
          </CardContent>
        </Card>))}
   
    </>
  );
};

export default HousingList;
