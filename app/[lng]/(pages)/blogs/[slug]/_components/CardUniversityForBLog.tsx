import Image from "next/image";
import React from "react";
import { useTranslation } from "@/i18n";
import { Button } from "@/components/ui/button";
export type UniversityType = {
  id: number;
  slug: string;
  image: string;
  logo: string;
  name: string;
  study_programs: {
      id: number;
      name: string;
  }[];
}

export default async function CardUniversityForBLog({
  university,
  major,
  btnText,
  lng='ar'
}:{
  university?: UniversityType,
  major: string,
  btnText: string
  lng?: string
}) {  
  const { t } = await useTranslation(lng, "partial_scholarships");
  const { t:DataLang } = await useTranslation(lng, "turkish_universities");
  return university && (
    <div className="hover:shadow-xl bg-white rounded-2xl p-3 shadow-all duration-300 group">
      <div className="relative">
        <Image
          alt="alt"
          width={500}
          height={500}
          className="rounded-2xl h-36 md:h-52 w-full"
          src={university.image.split('http://').join('https://')}
        />
        <Image
          alt="alt"
          width={500}
          height={500}
          className="size-16 md:size-28 rounded-full absolute start-4 -bottom-10 md:-bottom-16 border-4 bg-white"
          src={university.logo.split('http://').join('https://')}
        />
      </div>
      <div className="p-4 mt-8 md:mt-16 text-start">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-base sm:text-xl md:text-2xl text-primary line-clamp-1">
            {university.name}
          </h2>
          <div className="ms-auto flex">
            <Image 
              src={"https://img.freeflagicons.com/thumb/round_icon/turkey/turkey_640.png"}
              alt="img"
              width={300}
              height={300}
              className="w-16 h-12 rounded-full"
            />
          </div>
        </div>

        {/* {
          university.description &&
        <p className="text-sm text-gray-500 line-clamp-2 pt-2 md:pt-4" dangerouslySetInnerHTML={{ __html: university.description.slice(0, 200) }}></p>
        }
        {
           university.translated_description &&
        <p className="text-sm text-gray-500 line-clamp-2 pt-2 md:pt-4" dangerouslySetInnerHTML={{ __html: university.translated_description.slice(0, 200) }}></p>
        }
        {university?.first_programs?.length > 0 && <>
          <span className="text-red-500 text-xs md:text-lg">{major}</span>
          <ul className="grid grid-cols-2 mt-4 text-xs gap-x-3 md:text-base text-gray-600 text-start custom-bullet-university">
            {
              university.first_programs.slice(0, 4).map((item, index) => (
                <li key={index}>{item}</li>
              ))
            }
          </ul>
        </>
        } */}

<section className="space-y-3 pt-3">
  <div className="w-full gap-2 md:items-center text-gray-800 text-xs md:text-sm grid grid-cols-3">
    <div className="bg-gray-400/10 rounded-lg p-3 flex flex-col items-center space-y-4">
      <svg
        viewBox="0 0 24 24"
        className="size-8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          <path
            d="M15 19L17 21L21 17M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H11.5M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V13.4M9 17H11.5M9 13H15M9 9H10"
            stroke="#20837F"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
      <span>بكارليوس</span>
    </div>
    <div className="bg-gray-400/10 rounded-lg p-3 flex flex-col items-center space-y-4">
      <svg className="size-8" fill="#20837F" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 431.667 431.667" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g> <path d="M359.584,415.671V8.083c0-4.161-3.177-7.577-7.237-7.961C351.908,0.048,351.46,0,351,0H80.667c-4.418,0-8,3.582-8,8 c0,0.014,0.002,0.028,0.002,0.042c0,0.014-0.002,0.028-0.002,0.042v407.583h-0.5c-4.418,0-8,3.582-8,8s3.582,8,8,8h120.011h47.979 H359.5c4.418,0,8-3.582,8-8C367.5,419.277,363.963,415.717,359.584,415.671z M88.667,16h254.917v399.667h-95.428v-55.958 c0-4.418-3.582-8-8-8h-47.979c-4.418,0-8,3.582-8,8v55.958H88.667V16z M200.178,415.667v-47.958h31.979v47.958H200.178z" /> <path d="M160.146,351.708h-47.979c-4.418,0-8,3.582-8,8v31.708c0,4.418,3.582,8,8,8h47.979c4.418,0,8-3.582,8-8v-31.708 C168.146,355.29,164.564,351.708,160.146,351.708z M152.146,383.417h-31.979v-15.708h31.979V383.417z" /> <path d="M272.167,399.417h47.979c4.418,0,8-3.582,8-8v-31.708c0-4.418-3.582-8-8-8h-47.979c-4.418,0-8,3.582-8,8v31.708 C264.167,395.835,267.749,399.417,272.167,399.417z M280.167,367.708h31.979v15.708h-31.979V367.708z" /> <path d="M160.146,287.958h-47.979c-4.418,0-8,3.582-8,8v31.708c0,4.418,3.582,8,8,8h47.979c4.418,0,8-3.582,8-8v-31.708 C168.146,291.54,164.564,287.958,160.146,287.958z M152.146,319.667h-31.979v-15.708h31.979V319.667z" /> <path d="M192.178,335.667h47.979c4.418,0,8-3.582,8-8v-31.708c0-4.418-3.582-8-8-8h-47.979c-4.418,0-8,3.582-8,8v31.708 C184.178,332.085,187.76,335.667,192.178,335.667z M200.178,303.958h31.979v15.708h-31.979V303.958z" /> <path d="M272.167,335.667h47.979c4.418,0,8-3.582,8-8v-31.708c0-4.418-3.582-8-8-8h-47.979c-4.418,0-8,3.582-8,8v31.708 C264.167,332.085,267.749,335.667,272.167,335.667z M280.167,303.958h31.979v15.708h-31.979V303.958z" /> <path d="M160.146,223.958h-47.979c-4.418,0-8,3.582-8,8v31.708c0,4.418,3.582,8,8,8h47.979c4.418,0,8-3.582,8-8v-31.708 C168.146,227.54,164.564,223.958,160.146,223.958z M152.146,255.667h-31.979v-15.708h31.979V255.667z" /> <path d="M192.178,271.667h47.979c4.418,0,8-3.582,8-8v-31.708c0-4.418-3.582-8-8-8h-47.979c-4.418,0-8,3.582-8,8v31.708 C184.178,268.085,187.76,271.667,192.178,271.667z M200.178,239.958h31.979v15.708h-31.979V239.958z" /> <path d="M272.167,271.667h47.979c4.418,0,8-3.582,8-8v-31.708c0-4.418-3.582-8-8-8h-47.979c-4.418,0-8,3.582-8,8v31.708 C264.167,268.085,267.749,271.667,272.167,271.667z M280.167,239.958h31.979v15.708h-31.979V239.958z" /> <path d="M160.146,160.208h-47.979c-4.418,0-8,3.582-8,8v31.708c0,4.418,3.582,8,8,8h47.979c4.418,0,8-3.582,8-8v-31.708 C168.146,163.79,164.564,160.208,160.146,160.208z M152.146,191.917h-31.979v-15.708h31.979V191.917z" /> <path d="M192.178,207.917h47.979c4.418,0,8-3.582,8-8v-31.708c0-4.418-3.582-8-8-8h-47.979c-4.418,0-8,3.582-8,8v31.708 C184.178,204.335,187.76,207.917,192.178,207.917z M200.178,176.208h31.979v15.708h-31.979V176.208z" /> <path d="M272.167,207.917h47.979c4.418,0,8-3.582,8-8v-31.708c0-4.418-3.582-8-8-8h-47.979c-4.418,0-8,3.582-8,8v31.708 C264.167,204.335,267.749,207.917,272.167,207.917z M280.167,176.208h31.979v15.708h-31.979V176.208z" /> <path d="M160.146,96.042h-47.979c-4.418,0-8,3.582-8,8v31.708c0,4.418,3.582,8,8,8h47.979c4.418,0,8-3.582,8-8v-31.708 C168.146,99.624,164.564,96.042,160.146,96.042z M152.146,127.75h-31.979v-15.708h31.979V127.75z" /> <path d="M192.178,143.75h47.979c4.418,0,8-3.582,8-8v-31.708c0-4.418-3.582-8-8-8h-47.979c-4.418,0-8,3.582-8,8v31.708 C184.178,140.169,187.76,143.75,192.178,143.75z M200.178,112.042h31.979v15.708h-31.979V112.042z" /> <path d="M272.167,143.75h47.979c4.418,0,8-3.582,8-8v-31.708c0-4.418-3.582-8-8-8h-47.979c-4.418,0-8,3.582-8,8v31.708 C264.167,140.169,267.749,143.75,272.167,143.75z M280.167,112.042h31.979v15.708h-31.979V112.042z" /> <path d="M160.146,32.292h-47.979c-4.418,0-8,3.582-8,8V72c0,4.418,3.582,8,8,8h47.979c4.418,0,8-3.582,8-8V40.292 C168.146,35.874,164.564,32.292,160.146,32.292z M152.146,64h-31.979V48.292h31.979V64z" /> <path d="M192.178,80h47.979c4.418,0,8-3.582,8-8V40.292c0-4.418-3.582-8-8-8h-47.979c-4.418,0-8,3.582-8,8V72 C184.178,76.418,187.76,80,192.178,80z M200.178,48.292h31.979V64h-31.979V48.292z" /> <path d="M272.167,80h47.979c4.418,0,8-3.582,8-8V40.292c0-4.418-3.582-8-8-8h-47.979c-4.418,0-8,3.582-8,8V72 C264.167,76.418,267.749,80,272.167,80z M280.167,48.292h31.979V64h-31.979V48.292z" /> </g> </g></svg>
      <span>اسطنبول</span>
    </div>
    <div className="bg-gray-400/10 rounded-lg p-3 flex flex-col items-center space-y-4">
      <svg className="size-8" viewBox="0 0 24 24" id="meteor-icon-kit__solid-language" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M14 7H21C22.6569 7 24 8.34315 24 10V21C24 22.6569 22.6569 24 21 24H13C11.3431 24 10 22.6569 10 21V17H3C1.34315 17 0 15.6569 0 14V3C0 1.34315 1.34315 0 3 0H11C12.6569 0 14 1.34315 14 3V7ZM14 9V11H16C16 10.4477 16.4477 10 17 10C17.5523 10 18 10.4477 18 11H18.9794C18.9924 10.9997 19.0054 10.9997 19.0185 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H19.7985C19.4241 14.4757 18.8531 15.8257 18.0876 17.0466C18.7882 17.8313 19.6099 18.538 20.5548 19.1679C21.0143 19.4743 21.1385 20.0952 20.8322 20.5547C20.5258 21.0142 19.9049 21.1384 19.4454 20.8321C18.4832 20.1906 17.6268 19.4745 16.8773 18.6846C16.2131 19.4542 15.4538 20.1597 14.6 20.8C14.1582 21.1314 13.5314 21.0418 13.2 20.6C12.8686 20.1582 12.9582 19.5314 13.4 19.2C14.2377 18.5717 14.9675 17.8745 15.5904 17.1065C15.2236 16.5795 14.8952 16.0263 14.6057 15.4472C14.3587 14.9532 14.5589 14.3526 15.0529 14.1056C15.5469 13.8586 16.1476 14.0588 16.3945 14.5528C16.5199 14.8035 16.6538 15.0485 16.7962 15.2878C17.1768 14.5736 17.4863 13.8113 17.7253 13H14V14C14 15.3062 13.1652 16.4175 12 16.8293V21C12 21.5523 12.4477 22 13 22H21C21.5523 22 22 21.5523 22 21V10C22 9.44771 21.5523 9 21 9H14ZM6.22076 9.5L7 7.16228L7.77924 9.5H6.22076ZM5.55409 11.5H8.44591L9.05132 13.3162C9.22596 13.8402 9.79228 14.1233 10.3162 13.9487C10.8402 13.774 11.1233 13.2077 10.9487 12.6838L7.94868 3.68377C7.64478 2.77208 6.35522 2.77208 6.05132 3.68377L3.05132 12.6838C2.87667 13.2077 3.15983 13.774 3.68377 13.9487C4.20772 14.1233 4.77404 13.8402 4.94868 13.3162L5.55409 11.5Z" fill="#20837F" /></g></svg>
      <span>التركية</span>
    </div>
  </div>
  <div className="bg-gray-400/10 text-gray-800 flex justify-between w-full gap-4 rounded-lg text-sm p-3">
    <span className="text-secondary">تبدأ الارسعار</span>
    <div className="flex items-center gap-2">
        <span>من</span>
        <span>1300$</span>
    </div>
    <div className="flex items-center gap-2">
      <span>الى</span>
      <span>3000$</span>
    </div>
  </div>
</section>
        
        {/* {university?.study_programs?.length > 0 && <>
          <h6 className="text-red-500 text-base md:text-lg">{major}</h6>
          <ul className="grid grid-cols-2 mt-4 text-xs md:text-base text-gray-600 text-start custom-bullet-university">
            {
              university.study_programs.slice(0, 4).map((item, index) => (
                <li key={index}>{item.name}</li>
              ))
            }
          </ul>
        </>
        } */}
        <div className="flex justify-center mt-2">
          <Button className="group-hover:bg-secondary">{btnText}</Button>
        </div>
      </div>
    </div>
  );
}
