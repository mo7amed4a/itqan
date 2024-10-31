import React from "react";
import { useTranslation } from "../../../../i18n";
import LinkApp from "../../../../components/global/LinkApp";
import CardSmall from "../../../../components/cards/card-small";
import XScroll from "../../../../components/global/xScroll";
import { Button } from "flowbite-react";
import Image from "next/image";
import img1 from "../../../../public/images/for-blog.png";
import FormBooking from "../../../../components/home/form-booking";

export default async function Page({ params }: { params: { lng: string } }) {
  const lng = params.lng;
  const { t } = await useTranslation(lng);

  return (
    <div className="my-10 space-y-10 text-start">
      <h1 className="text-center text-xl md:text-2xl font-bold text-gray-500 capitalize">
        خدماتنا
      </h1>
      <section className="container mx-auto  px-4">
        <div className="flex flex-col space-y-7 mt-10">
          <div>
            <ul className="flex gap-4 [&>li]:pb-2 overflow-x-auto hidden-scrollbar text-base">
              <li className="border-b-2 border-red-500 text-red-500">
                <LinkApp href="/blogs" lng={lng}>
                  خدمات طلابية
                </LinkApp>
              </li>
              <li>
                <LinkApp href="/blogs" lng={lng}>
                  خدمات ما بعد القبول
                </LinkApp>
              </li>
              <li>
                <LinkApp href="/blogs" lng={lng}>
                  باقاتنا
                </LinkApp>
              </li>
            </ul>
          </div>

          <div className="space-y-10">
            <h1 className="text-lg font-bold text-gray-500 md:text-xl">
              خدمات طلابية
            </h1>
            <XScroll>
              <CardSmall text="lorem oi oid okqdmokqdm qjnqwd on jnj djnjqw qnd qwdi" />
              <CardSmall text="lorem oi oid okqdmokqdm qjnqwd on jnj djnjqw qnd qwdi" />
              <CardSmall text="lorem oi oid okqdmokqdm qjnqwd on jnj djnjqw qnd qwdi" />
              <CardSmall text="lorem oi oid okqdmokqdm qjnqwd on jnj djnjqw qnd qwdi" />
              <CardSmall text="lorem oi oid okqdmokqdm qjnqwd on jnj djnjqw qnd qwdi" />
              <CardSmall text="lorem oi oid okqdmokqdm qjnqwd on jnj djnjqw qnd qwdi" />
              <CardSmall text="lorem oi oid okqdmokqdm qjnqwd on jnj djnjqw qnd qwdi" />
              <CardSmall text="lorem oi oid okqdmokqdm qjnqwd on jnj djnjqw qnd qwdi" />
              <CardSmall text="lorem oi oid okqdmokqdm qjnqwd on jnj djnjqw qnd qwdi" />
              <CardSmall text="lorem oi oid okqdmokqdm qjnqwd on jnj djnjqw qnd qwdi" />
            </XScroll>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-white h-96 flex flex-col space-y-10 justify-center items-center  text-center px-7">
          <h1 className="text-lg md:text-2xl font-bold text-gray-500">
            احصل علي خصومات حصرية وخاصة في حال تم التسجيل من خلالنا
          </h1>
          <Button
            color="primary"
            size="lg"
            className="bg-primary text-white hover:bg-white hover:text-primary"
          >
            سجل معنا
          </Button>
        </div>
      </section>
      <section className="container mx-auto  px-4">
        <h1 className="my-10 text-lg md:text-2xl font-bold text-gray-500">
          خدمات ما بعد القبول
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl flex flex-col md:flex-row items-center gap-8 text-center md:text-start overflow-hidden">
            <Image
              src={img1}
              className="w-full md:w-auto h-40 md:h-auto"
              alt="alt"
              width={150}
              height={150}
            />
            <div className="space-y-2 py-8">
              <h3 className="text-lg md:text-xl font-bold">
                تأمين السكنات الطلابية
              </h3>
              <p className="text-sm md:text-base  text-gray-500">
                يقوم فريقنا المتخصص في شؤون السكن بالتواصل
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl flex flex-col md:flex-row items-center gap-8 text-center md:text-start overflow-hidden">
            <Image
              src={img1}
              className="w-full md:w-auto h-40 md:h-auto"
              alt="alt"
              width={150}
              height={150}
            />
            <div className="space-y-2 py-8">
              <h3 className="text-lg md:text-xl font-bold">
                تأمين السكنات الطلابية
              </h3>
              <p className="text-sm md:text-base  text-gray-500">
                يقوم فريقنا المتخصص في شؤون السكن بالتواصل
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl flex flex-col md:flex-row items-center gap-8 text-center md:text-start overflow-hidden">
            <Image
              src={img1}
              className="w-full md:w-auto h-40 md:h-auto"
              alt="alt"
              width={150}
              height={150}
            />
            <div className="space-y-2 py-8">
              <h3 className="text-lg md:text-xl font-bold">
                تأمين السكنات الطلابية
              </h3>
              <p className="text-sm md:text-base  text-gray-500">
                يقوم فريقنا المتخصص في شؤون السكن بالتواصل
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl flex flex-col md:flex-row items-center gap-8 text-center md:text-start overflow-hidden">
            <Image
              src={img1}
              className="w-full md:w-auto h-40 md:h-auto"
              alt="alt"
              width={150}
              height={150}
            />
            <div className="space-y-2 py-8">
              <h3 className="text-lg md:text-xl font-bold">
                تأمين السكنات الطلابية
              </h3>
              <p className="text-sm md:text-base  text-gray-500">
                يقوم فريقنا المتخصص في شؤون السكن بالتواصل
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl flex flex-col md:flex-row items-center gap-8 text-center md:text-start overflow-hidden">
            <Image
              src={img1}
              className="w-full md:w-auto h-40 md:h-auto"
              alt="alt"
              width={150}
              height={150}
            />
            <div className="space-y-2 py-8">
              <h3 className="text-lg md:text-xl font-bold">
                تأمين السكنات الطلابية
              </h3>
              <p className="text-sm md:text-base  text-gray-500">
                يقوم فريقنا المتخصص في شؤون السكن بالتواصل
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl flex flex-col md:flex-row items-center gap-8 text-center md:text-start overflow-hidden">
            <Image
              src={img1}
              className="w-full md:w-auto h-40 md:h-auto"
              alt="alt"
              width={150}
              height={150}
            />
            <div className="space-y-2 py-8">
              <h3 className="text-lg md:text-xl font-bold">
                تأمين السكنات الطلابية
              </h3>
              <p className="text-sm md:text-base  text-gray-500">
                يقوم فريقنا المتخصص في شؤون السكن بالتواصل
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl flex flex-col md:flex-row items-center gap-8 text-center md:text-start overflow-hidden">
            <Image
              src={img1}
              className="w-full md:w-auto h-40 md:h-auto"
              alt="alt"
              width={150}
              height={150}
            />
            <div className="space-y-2 py-8">
              <h3 className="text-lg md:text-xl font-bold">
                تأمين السكنات الطلابية
              </h3>
              <p className="text-sm md:text-base  text-gray-500">
                يقوم فريقنا المتخصص في شؤون السكن بالتواصل
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl flex flex-col md:flex-row items-center gap-8 text-center md:text-start overflow-hidden">
            <Image
              src={img1}
              className="w-full md:w-auto h-40 md:h-auto"
              alt="alt"
              width={150}
              height={150}
            />
            <div className="space-y-2 py-8">
              <h3 className="text-lg md:text-xl font-bold">
                تأمين السكنات الطلابية
              </h3>
              <p className="text-sm md:text-base  text-gray-500">
                يقوم فريقنا المتخصص في شؤون السكن بالتواصل
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl flex flex-col md:flex-row items-center gap-8 text-center md:text-start overflow-hidden">
            <Image
              src={img1}
              className="w-full md:w-auto h-40 md:h-auto"
              alt="alt"
              width={150}
              height={150}
            />
            <div className="space-y-2 py-8">
              <h3 className="text-lg md:text-xl font-bold">
                تأمين السكنات الطلابية
              </h3>
              <p className="text-sm md:text-base  text-gray-500">
                يقوم فريقنا المتخصص في شؤون السكن بالتواصل
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl flex flex-col md:flex-row items-center gap-8 text-center md:text-start overflow-hidden">
            <Image
              src={img1}
              className="w-full md:w-auto h-40 md:h-auto"
              alt="alt"
              width={150}
              height={150}
            />
            <div className="space-y-2 py-8">
              <h3 className="text-lg md:text-xl font-bold">
                تأمين السكنات الطلابية
              </h3>
              <p className="text-sm md:text-base  text-gray-500">
                يقوم فريقنا المتخصص في شؤون السكن بالتواصل
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl flex flex-col md:flex-row items-center gap-8 text-center md:text-start overflow-hidden">
            <Image
              src={img1}
              className="w-full md:w-auto h-40 md:h-auto"
              alt="alt"
              width={150}
              height={150}
            />
            <div className="space-y-2 py-8">
              <h3 className="text-lg md:text-xl font-bold">
                تأمين السكنات الطلابية
              </h3>
              <p className="text-sm md:text-base  text-gray-500">
                يقوم فريقنا المتخصص في شؤون السكن بالتواصل
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-primary/80 h-96 flex flex-col space-y-10 justify-center items-center px-7 text-center">
          <h1 className="text-lg md:text-3xl font-bold text-white">
            احصل علي قبولك في الجامعات الخاصة مجانا وخلال 24 ساعة فقط
          </h1>
          <Button
            color="primary"
            size="lg"
            className="bg-red-500 text-white hover:bg-white hover:text-red-500"
          >
            سجل معنا
          </Button>
        </div>
      </section>

      <section className="bg-white py-10">
        <div>
          <h1 className="text-lg md:text-3xl text-gray-500 font-bold text-center">
            سجل معنا الان
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 container mx-auto px-4">
          <div>
            <div className="hover:shadow-md">
              <FormBooking lng={lng} />
            </div>
          </div>
          <div className="p-4 md:p-8">
            <h2 className="text-base md:text-2xl font-bold text-primary">
              دعنا نتواصل معك
            </h2>
            <h2 className="text-base md:text-2xl font-bold text-primary">
              نحن متواجدون علي
              <span className="text-red-500"> مدار الساعة</span>
            </h2>

            <ul className="mt-8 text-base md:text-lg text-gray-500">
              <li className="list">
                يكفيك الاستعانة بأحد أعضاء فريقنا لتبدأ مشوارك الأكاديمي بنجاح
              </li>
              <li className="list">مهما كان استفسارك تأكد من أننا سنقدم لك الاستشارة مجاناً</li>
              <li className="list">نضمن القبول في أفضل الجامعات التركية</li>
              <li className="list">ملتزمون بتقديم خدماتنا لك بأفضل طريقة</li>
              <li className="list">نرسم مستقبلك الأكاديمي وندعمك حتى الاستقرار</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
