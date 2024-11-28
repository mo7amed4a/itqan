import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsComponent } from "@/components/universities/TabApp";
import { useTranslation } from "@/i18n";
import { getData } from "@/lib/data";

import img1 from "../../../../../public/images/sp/1.png";
import img2 from "../../../../../public/images/sp/2.png";
import img3 from "../../../../../public/images/sp/3.png";
import img4 from "../../../../../public/images/sp/4.png";
import img5 from "../../../../../public/images/sp/5.png";
import StudyProgramsTabs from "@/components/universities/study-programs-tabs";
import HousingList from "@/components/housing/HousingList";


// This is a mock of the data. In a real application, you'd fetch this data from an API.
const universityData = {
  success: true,
  data: {
    university: {
      id: 15,
      name: "Istanbul Aydin University",
      logo: "http://admin.itqaneducation.com/storage/universities/c0zsrXLjfKX3fk2PX0iaRVKXVDgKWYCedUGqQMsH.png",
      image:
        "http://admin.itqaneducation.com/storage/universities/PLDXxusKEA17qwX6SiyFFtjItsZJy2RsUSv7VTUl.jpg",
      description:
        "<p>Istanbul Aydin University<br />\r\nEstablishment of Istanbul Aydin University and its prestigious position</p>\r\n\r\n<p>&nbsp;</p>",
      languages: [{ name: "Turkish" }, { name: "English" }],
      found_year: 1000,
      global_rank: 1000,
    },
    faqs: [
      {
        id: 6,
        question: "why register with us?",
        answer:
          "<p>loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;</p>",
      },
      {
        id: 7,
        question: "can start study immediatly?",
        answer:
          "<p>loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;loreum inspeum&nbsp;</p>",
      },
    ],
    study_programs: [
      {
        level_id: 4,
        level_name: "Master",
        programs: [
          {
            id: 6,
            specialization_name: "Medicine",
            study_years: 544,
            study_language: "arabic",
            fees: "54.00",
            annual_fees: 45,
            has_grant: 1,
          },
          // ... other programs
        ],
      },
    ],
    student_housings: [
      {
        id: 13,
        capacity: 200,
        type: "female_housing",
        price: "345.00",
        city: "1",
        beds: 3,
        meals: 3,
        internet: 100,
        name: "housing 1",
        description:
          "<p>housing 1housing 1housing 1housing 1housing 1housing 1housing 1</p>",
        images: [
          "http://admin.itqaneducation.com/storage/universities/MQi7I6luw5biDcgPRJpSfZL0xgqSQVTo2Ud5AmmD.png",
          // ... other images
        ],
      },
      // ... other housings
    ],
    specifications: [
      {
        id: 82,
        name: "The university offers the possibility of studying more than 60 specializations in various fields for bachelor's and master's degrees.",
      },
    ],
  },
};

export default async function UniversityInfo({
  params,
}: {
  params: { lng: string; id: string };
}) {
  const { lng, id } = params;

  const { t } = await useTranslation(lng, "university_details");
  let data: any = {
    university: {
      id: 24,
      slug: "istanbul-aydin-university",
      category_id: 13,
      country: "2",
      city_id: 1,
      type: "3",
      international_rate: 1000,
      local_rate: 1000,
      student_count: 15000,
      teachers_count: 15000,
      national_count: 500,
      logo: "http://admin.itqaneducation.com/storage/universities/bgJ93iELuIEgupJGN2DPkekapnzgkaJaAGsh56Xg.png",
      image:
        "http://admin.itqaneducation.com/storage/universities/DuX59TXhxImHuZUK7pmo5bG2g0HTsrigAA6MHN4t.jpg",
      video: "https://www.youtube.com/watch?v=wGBDWdTGDxE",
      is_featured: 1,
      photo_album: [],
      confessions: [
        {
          name: "mudek",
          image:
            "http://admin.itqaneducation.com/storage/confensions/jsgS3It92c0CM4sSAVUUd1JzWgkCgT2YgtL5K781.png",
        },
        {
          name: "cea",
          image:
            "http://admin.itqaneducation.com/storage/confensions/ULWDkxw0CdLMfd2yx3V7JkvzTGhynPwstqCrqeP9.png",
        },
      ],
      languages: [
        {
          name: "Turkish",
        },
        {
          name: "English",
        },
      ],
      found_year: 2007,
      global_rank: 600,
      name: "Istanbul Aydin University",
      description: "\u003Cp\u003EIstanbul Aydin University\u003C/p\u003E",
    },
    faqs: [
      {
        id: 17,
        question:
          "Istanbul Aydin University Accreditations and Their Importance",
        answer:
          "\u003Cp\u003EIstanbul Aydin University Accreditations and Their Importance\u003C/p\u003E",
      },
      {
        id: 18,
        question: "The importance of academic accreditation",
        answer:
          "\u003Cp\u003EThe importance of academic accreditation\u003C/p\u003E",
      },
      {
        id: 19,
        question: "Istanbul Aydin University Confessions",
        answer:
          "\u003Cp\u003EIstanbul Aydin University Confessions\u003C/p\u003E",
      },
    ],
    study_programs: [
      {
        level_id: 3,
        level_name: "Bachelor",
        programs: [
          {
            id: 29,
            specialization_id: 5,
            specialization_name: "Medicine",
            study_years: 6,
            study_language: "en",
            fees: "22000.00",
            annual_fees: 4000,
            has_grant: null,
            old_fees: null,
          },
          {
            id: 30,
            specialization_id: 6,
            specialization_name: "Engineering",
            study_years: 4,
            study_language: "en , tu",
            fees: "22000.00",
            annual_fees: 4000,
            has_grant: null,
            old_fees: null,
          },
          {
            id: 31,
            specialization_id: 9,
            specialization_name: "Business Administration",
            study_years: 4,
            study_language: "en , tu",
            fees: "22000.00",
            annual_fees: 4000,
            has_grant: null,
            old_fees: null,
          },
          {
            id: 32,
            specialization_id: 10,
            specialization_name: "Economics",
            study_years: 4,
            study_language: "en , tu",
            fees: "22000.00",
            annual_fees: 4000,
            has_grant: null,
            old_fees: null,
          },
        ],
      },
      {
        level_id: 4,
        level_name: "Master",
        programs: [
          {
            id: 33,
            specialization_id: 9,
            specialization_name: "Business Administration",
            study_years: 4,
            study_language: "en",
            fees: "22000.00",
            annual_fees: 4000,
            has_grant: null,
            old_fees: null,
          },
          {
            id: 34,
            specialization_id: 6,
            specialization_name: "Engineering",
            study_years: 2,
            study_language: "en",
            fees: "22000.00",
            annual_fees: 4000,
            has_grant: null,
            old_fees: null,
          },
          {
            id: 35,
            specialization_id: 5,
            specialization_name: "Medicine",
            study_years: 4,
            study_language: "en",
            fees: "22000.00",
            annual_fees: 4000,
            has_grant: null,
            old_fees: null,
          },
        ],
      },
      {
        level_id: 8,
        level_name: "Diploma (2 years)",
        programs: [
          {
            id: 36,
            specialization_id: 5,
            specialization_name: "Medicine",
            study_years: 4,
            study_language: "en",
            fees: "22000.00",
            annual_fees: 4000,
            has_grant: null,
            old_fees: null,
          },
          {
            id: 37,
            specialization_id: 6,
            specialization_name: "Engineering",
            study_years: 4,
            study_language: "en",
            fees: "20000.00",
            annual_fees: 4000,
            has_grant: null,
            old_fees: null,
          },
          {
            id: 38,
            specialization_id: 9,
            specialization_name: "Business Administration",
            study_years: 4,
            study_language: "tu",
            fees: "22000.00",
            annual_fees: 4000,
            has_grant: null,
            old_fees: null,
          },
        ],
      },
    ],
    conditions: [
      {
        level_id: 3,
        level_name: "Bachelor",
        conditions: [
          {
            id: 31,
            conditions:
              "\u003Cp\u003ELanguage Requirements and Application for Study Programs\u003Cbr /\u003E\r\nAccepted Language Certificates\u003Cbr /\u003E\r\n- TOEFL (IBT 79) or PTE (55) or IAU English Proficiency Examination (B2) score.\u003Cbr /\u003E\r\n- Turkish Proficiency Certificate (T&Ouml;MER B1).\u003C/p\u003E\r\n\r\n\u003Cp\u003EFor Pharmacy, Dentistry and Medicine programs, T&Ouml;MER C1 certificate is required.\u003C/p\u003E\r\n\r\n\u003Cp\u003ERequired Documents:\u003Cbr /\u003E\r\n1. If the student has Turkish citizenship:\u003Cbr /\u003E\r\n- Copy of foreign passport and identity record (vukuatlı n&uuml;fus kayıt &ouml;rneği) from the Population Directorate or name equivalence certificate (isim denlik belgesi) from E-devlet.\u003C/p\u003E\r\n\r\n\u003Cp\u003E2. The following documents must be submitted and stamped and translated into English/Turkish:\u003Cbr /\u003E\r\n- Official transcript and diploma.\u003C/p\u003E\r\n\r\n\u003Cp\u003E3. For students studying under the British Cambridge system:\u003Cbr /\u003E\r\nFor medical specialties:\u003Cbr /\u003E\r\nAt least two full A-level courses in Biology and Chemistry.\u003Cbr /\u003E\r\nFor Engineering majors:\u003C/p\u003E\r\n\r\n\u003Cp\u003EAt least two full A-level courses in Physics and Mathematics.\u003C/p\u003E\r\n\r\n\u003Cp\u003E4. Documents must be in pdf format.\u003C/p\u003E\r\n\r\n\u003Cp\u003EEnsure that all required documents are submitted correctly and in the specified formats.\u003C/p\u003E",
          },
          {
            id: 33,
            conditions:
              "\u003Cp\u003ELanguage Requirements and Application for Study Programs\u003Cbr /\u003E\r\nAccepted Language Certificates\u003Cbr /\u003E\r\n- TOEFL (IBT 79) or PTE (55) or IAU English Proficiency Examination (B2) score.\u003Cbr /\u003E\r\n- Turkish Proficiency Certificate (T&Ouml;MER B1).\u003C/p\u003E\r\n\r\n\u003Cp\u003EFor Pharmacy, Dentistry and Medicine programs, T&Ouml;MER C1 certificate is required.\u003C/p\u003E\r\n\r\n\u003Cp\u003ERequired Documents:\u003Cbr /\u003E\r\n1. If the student has Turkish citizenship:\u003Cbr /\u003E\r\n- Copy of foreign passport and identity record (vukuatlı n&uuml;fus kayıt &ouml;rneği) from the Population Directorate or name equivalence certificate (isim denlik belgesi) from E-devlet.\u003C/p\u003E\r\n\r\n\u003Cp\u003E2. The following documents must be submitted and stamped and translated into English/Turkish:\u003Cbr /\u003E\r\n- Official transcript and diploma.\u003C/p\u003E\r\n\r\n\u003Cp\u003E3. For students studying under the British Cambridge system:\u003Cbr /\u003E\r\nFor medical specialties:\u003Cbr /\u003E\r\nAt least two full A-level courses in Biology and Chemistry.\u003Cbr /\u003E\r\nFor Engineering majors:\u003C/p\u003E\r\n\r\n\u003Cp\u003EAt least two full A-level courses in Physics and Mathematics.\u003C/p\u003E\r\n\r\n\u003Cp\u003E4. Documents must be in pdf format.\u003C/p\u003E\r\n\r\n\u003Cp\u003EEnsure that all required documents are submitted correctly and in the specified formats.\u003C/p\u003E",
          },
        ],
      },
      {
        level_id: 4,
        level_name: "Master",
        conditions: [
          {
            id: 32,
            conditions:
              "\u003Cp\u003ELanguage Requirements and Application for Study Programs\u003Cbr /\u003E\r\nAccepted Language Certificates\u003Cbr /\u003E\r\n- TOEFL (IBT 79) or PTE (55) or IAU English Proficiency Examination (B2) score.\u003Cbr /\u003E\r\n- Turkish Proficiency Certificate (T&Ouml;MER B1).\u003C/p\u003E\r\n\r\n\u003Cp\u003EFor Pharmacy, Dentistry and Medicine programs, T&Ouml;MER C1 certificate is required.\u003C/p\u003E\r\n\r\n\u003Cp\u003ERequired Documents:\u003Cbr /\u003E\r\n1. If the student has Turkish citizenship:\u003Cbr /\u003E\r\n- Copy of foreign passport and identity record (vukuatlı n&uuml;fus kayıt &ouml;rneği) from the Population Directorate or name equivalence certificate (isim denlik belgesi) from E-devlet.\u003C/p\u003E\r\n\r\n\u003Cp\u003E2. The following documents must be submitted and stamped and translated into English/Turkish:\u003Cbr /\u003E\r\n- Official transcript and diploma.\u003C/p\u003E\r\n\r\n\u003Cp\u003E3. For students studying under the British Cambridge system:\u003Cbr /\u003E\r\nFor medical specialties:\u003Cbr /\u003E\r\nAt least two full A-level courses in Biology and Chemistry.\u003Cbr /\u003E\r\nFor Engineering majors:\u003C/p\u003E\r\n\r\n\u003Cp\u003EAt least two full A-level courses in Physics and Mathematics.\u003C/p\u003E\r\n\r\n\u003Cp\u003E4. Documents must be in pdf format.\u003C/p\u003E\r\n\r\n\u003Cp\u003EEnsure that all required documents are submitted correctly and in the specified formats.\u003C/p\u003E",
          },
          {
            id: 34,
            conditions:
              "\u003Cp\u003ELanguage Requirements and Application for Study Programs\u003Cbr /\u003E\r\nAccepted Language Certificates\u003Cbr /\u003E\r\n- TOEFL (IBT 79) or PTE (55) or IAU English Proficiency Examination (B2) score.\u003Cbr /\u003E\r\n- Turkish Proficiency Certificate (T&Ouml;MER B1).\u003C/p\u003E\r\n\r\n\u003Cp\u003EFor Pharmacy, Dentistry and Medicine programs, T&Ouml;MER C1 certificate is required.\u003C/p\u003E\r\n\r\n\u003Cp\u003ERequired Documents:\u003Cbr /\u003E\r\n1. If the student has Turkish citizenship:\u003Cbr /\u003E\r\n- Copy of foreign passport and identity record (vukuatlı n&uuml;fus kayıt &ouml;rneği) from the Population Directorate or name equivalence certificate (isim denlik belgesi) from E-devlet.\u003C/p\u003E\r\n\r\n\u003Cp\u003E2. The following documents must be submitted and stamped and translated into English/Turkish:\u003Cbr /\u003E\r\n- Official transcript and diploma.\u003C/p\u003E\r\n\r\n\u003Cp\u003E3. For students studying under the British Cambridge system:\u003Cbr /\u003E\r\nFor medical specialties:\u003Cbr /\u003E\r\nAt least two full A-level courses in Biology and Chemistry.\u003Cbr /\u003E\r\nFor Engineering majors:\u003C/p\u003E\r\n\r\n\u003Cp\u003EAt least two full A-level courses in Physics and Mathematics.\u003C/p\u003E\r\n\r\n\u003Cp\u003E4. Documents must be in pdf format.\u003C/p\u003E\r\n\r\n\u003Cp\u003EEnsure that all required documents are submitted correctly and in the specified formats.\u003C/p\u003E",
          },
        ],
      },
      {
        level_id: 7,
        level_name: "PhD",
        conditions: [
          {
            id: 35,
            conditions:
              "\u003Cp\u003ELanguage Requirements and Application for Study Programs\u003Cbr /\u003E\r\nAccepted Language Certificates\u003Cbr /\u003E\r\n- TOEFL (IBT 79) or PTE (55) or IAU English Proficiency Examination (B2) score.\u003Cbr /\u003E\r\n- Turkish Proficiency Certificate (T&Ouml;MER B1).\u003C/p\u003E\r\n\r\n\u003Cp\u003EFor Pharmacy, Dentistry and Medicine programs, T&Ouml;MER C1 certificate is required.\u003C/p\u003E\r\n\r\n\u003Cp\u003ERequired Documents:\u003Cbr /\u003E\r\n1. If the student has Turkish citizenship:\u003Cbr /\u003E\r\n- Copy of foreign passport and identity record (vukuatlı n&uuml;fus kayıt &ouml;rneği) from the Population Directorate or name equivalence certificate (isim denlik belgesi) from E-devlet.\u003C/p\u003E\r\n\r\n\u003Cp\u003E2. The following documents must be submitted and stamped and translated into English/Turkish:\u003Cbr /\u003E\r\n- Official transcript and diploma.\u003C/p\u003E\r\n\r\n\u003Cp\u003E3. For students studying under the British Cambridge system:\u003Cbr /\u003E\r\nFor medical specialties:\u003Cbr /\u003E\r\nAt least two full A-level courses in Biology and Chemistry.\u003Cbr /\u003E\r\nFor Engineering majors:\u003C/p\u003E\r\n\r\n\u003Cp\u003EAt least two full A-level courses in Physics and Mathematics.\u003C/p\u003E\r\n\r\n\u003Cp\u003E4. Documents must be in pdf format.\u003C/p\u003E\r\n\r\n\u003Cp\u003EEnsure that all required documents are submitted correctly and in the specified formats.\u003C/p\u003E",
          },
        ],
      },
      {
        level_id: 8,
        level_name: "Diploma (2 years)",
        conditions: [
          {
            id: 36,
            conditions:
              "\u003Cp\u003ELanguage Requirements and Application for Study Programs\u003Cbr /\u003E\r\nAccepted Language Certificates\u003Cbr /\u003E\r\n- TOEFL (IBT 79) or PTE (55) or IAU English Proficiency Examination (B2) score.\u003Cbr /\u003E\r\n- Turkish Proficiency Certificate (T&Ouml;MER B1).\u003C/p\u003E\r\n\r\n\u003Cp\u003EFor Pharmacy, Dentistry and Medicine programs, T&Ouml;MER C1 certificate is required.\u003C/p\u003E\r\n\r\n\u003Cp\u003ERequired Documents:\u003Cbr /\u003E\r\n1. If the student has Turkish citizenship:\u003Cbr /\u003E\r\n- Copy of foreign passport and identity record (vukuatlı n&uuml;fus kayıt &ouml;rneği) from the Population Directorate or name equivalence certificate (isim denlik belgesi) from E-devlet.\u003C/p\u003E\r\n\r\n\u003Cp\u003E2. The following documents must be submitted and stamped and translated into English/Turkish:\u003Cbr /\u003E\r\n- Official transcript and diploma.\u003C/p\u003E\r\n\r\n\u003Cp\u003E3. For students studying under the British Cambridge system:\u003Cbr /\u003E\r\nFor medical specialties:\u003Cbr /\u003E\r\nAt least two full A-level courses in Biology and Chemistry.\u003Cbr /\u003E\r\nFor Engineering majors:\u003C/p\u003E\r\n\r\n\u003Cp\u003EAt least two full A-level courses in Physics and Mathematics.\u003C/p\u003E\r\n\r\n\u003Cp\u003E4. Documents must be in pdf format.\u003C/p\u003E\r\n\r\n\u003Cp\u003EEnsure that all required documents are submitted correctly and in the specified formats.\u003C/p\u003E",
          },
        ],
      },
    ],
    registration_dates: [
      {
        level_id: 3,
        level_name: "Bachelor",
        conditions: [
          {
            id: 31,
            registration_dates:
              "\u003Cp\u003EEnsure that all required documents are submitted correctly and in the specified formats.\u003C/p\u003E",
          },
          {
            id: 33,
            registration_dates:
              "\u003Cp\u003ELanguage Requirements and Application for Study Programs\u003Cbr /\u003E\r\nAccepted Language Certificates\u003Cbr /\u003E\r\n- TOEFL (IBT 79) or PTE (55) or IAU English Proficiency Examination (B2) score.\u003Cbr /\u003E\r\n- Turkish Proficiency Certificate (T&Ouml;MER B1).\u003C/p\u003E\r\n\r\n\u003Cp\u003EFor Pharmacy, Dentistry and Medicine programs, T&Ouml;MER C1 certificate is required.\u003C/p\u003E\r\n\r\n\u003Cp\u003ERequired Documents:\u003Cbr /\u003E\r\n1. If the student has Turkish citizenship:\u003Cbr /\u003E\r\n- Copy of foreign passport and identity record (vukuatlı n&uuml;fus kayıt &ouml;rneği) from the Population Directorate or name equivalence certificate (isim denlik belgesi) from E-devlet.\u003C/p\u003E\r\n\r\n\u003Cp\u003E2. The following documents must be submitted and stamped and translated into English/Turkish:\u003Cbr /\u003E\r\n- Official transcript and diploma.\u003C/p\u003E\r\n\r\n\u003Cp\u003E3. For students studying under the British Cambridge system:\u003Cbr /\u003E\r\nFor medical specialties:\u003Cbr /\u003E\r\nAt least two full A-level courses in Biology and Chemistry.\u003Cbr /\u003E\r\nFor Engineering majors:\u003C/p\u003E\r\n\r\n\u003Cp\u003EAt least two full A-level courses in Physics and Mathematics.\u003C/p\u003E\r\n\r\n\u003Cp\u003E4. Documents must be in pdf format.\u003C/p\u003E\r\n\r\n\u003Cp\u003EEnsure that all required documents are submitted correctly and in the specified formats.\u003C/p\u003E",
          },
        ],
      },
      {
        level_id: 4,
        level_name: "Master",
        conditions: [
          {
            id: 32,
            registration_dates:
              "\u003Cp\u003EEnsure that all required documents are submitted correctly and in the specified formats.\u003C/p\u003E",
          },
          {
            id: 34,
            registration_dates:
              "\u003Cp\u003ELanguage Requirements and Application for Study Programs\u003Cbr /\u003E\r\nAccepted Language Certificates\u003Cbr /\u003E\r\n- TOEFL (IBT 79) or PTE (55) or IAU English Proficiency Examination (B2) score.\u003Cbr /\u003E\r\n- Turkish Proficiency Certificate (T&Ouml;MER B1).\u003C/p\u003E\r\n\r\n\u003Cp\u003EFor Pharmacy, Dentistry and Medicine programs, T&Ouml;MER C1 certificate is required.\u003C/p\u003E\r\n\r\n\u003Cp\u003ERequired Documents:\u003Cbr /\u003E\r\n1. If the student has Turkish citizenship:\u003Cbr /\u003E\r\n- Copy of foreign passport and identity record (vukuatlı n&uuml;fus kayıt &ouml;rneği) from the Population Directorate or name equivalence certificate (isim denlik belgesi) from E-devlet.\u003C/p\u003E\r\n\r\n\u003Cp\u003E2. The following documents must be submitted and stamped and translated into English/Turkish:\u003Cbr /\u003E\r\n- Official transcript and diploma.\u003C/p\u003E\r\n\r\n\u003Cp\u003E3. For students studying under the British Cambridge system:\u003Cbr /\u003E\r\nFor medical specialties:\u003Cbr /\u003E\r\nAt least two full A-level courses in Biology and Chemistry.\u003Cbr /\u003E\r\nFor Engineering majors:\u003C/p\u003E\r\n\r\n\u003Cp\u003EAt least two full A-level courses in Physics and Mathematics.\u003C/p\u003E\r\n\r\n\u003Cp\u003E4. Documents must be in pdf format.\u003C/p\u003E\r\n\r\n\u003Cp\u003EEnsure that all required documents are submitted correctly and in the specified formats.\u003C/p\u003E",
          },
        ],
      },
      {
        level_id: 7,
        level_name: "PhD",
        conditions: [
          {
            id: 35,
            registration_dates:
              "\u003Cp\u003EEnsure that all required documents are submitted correctly and in the specified formats.\u003C/p\u003E",
          },
        ],
      },
      {
        level_id: 8,
        level_name: "Diploma (2 years)",
        conditions: [
          {
            id: 36,
            registration_dates:
              "\u003Cp\u003EEnsure that all required documents are submitted correctly and in the specified formats.\u003C/p\u003E",
          },
        ],
      },
    ],
    student_housings: [
      {
        id: 20,
        capacity: 3000,
        type: "female_housing",
        price: "1700.00",
        city: "1",
        beds: 265,
        meals: 3,
        internet: 2000,
        name: "Istanbul Aydin University Residence",
        description:
          "\u003Cp\u003EIstanbul Aydin University Residence\u003C/p\u003E",
        images: [
          "http://admin.itqaneducation.com/storage/universities/8eX3IfTROD0Oosf8tsN5KbFO268PEK0kFPtJcQHG.webp",
        ],
      },
      {
        id: 22,
        capacity: 260,
        type: "female_housing",
        price: "1700.00",
        city: "1",
        beds: 260,
        meals: 3,
        internet: 2000,
        name: "City Residence",
        description: "\u003Cp\u003ECity Residence\u003C/p\u003E",
        images: [
          "http://admin.itqaneducation.com/storage/universities/1wVzC3C04v1fZ0Dn3APXLsrnytaHGYqom0jK2NjM.webp",
        ],
      },
    ],
    specifications: {
      "0": {
        id: 379,
        name: "Istanbul Aydin University",
      },
      "3": {
        id: 382,
        name: "Istanbul Aydin University",
      },
      "6": {
        id: 385,
        name: "Istanbul Aydin University",
      },
      "9": {
        id: 388,
        name: "Istanbul Aydin University",
      },
    },
  };
  const response = await getData(`/universities/${id}/details`, lng);
  data = response?.data;

  if (data && data?.university) {
    const {
      university,
      faqs,
      study_programs,
      student_housings,
      specifications,
    } = data;
    return (
      <div className="container mx-auto p-4 text-start text-base space-y-4 text-gray-500">
        <Card className="flex flex-col md:flex-row md:h-96 rounded-xl shadow-none border-none hover:shadow-md">
          <CardHeader className="md:w-2/4 p-5 py-12 order-2 md:order-1">
            <div className="flex gap-4">
              <div>
                <Image
                  src={university.logo.split("http://").join("https://")}
                  alt=""
                  width={500}
                  height={500}
                  className="size-20 rounded-xl"
                />
              </div>
              <div className="space-y-2 text-gray-500">
                <h1 className="text-lg font-[600]">{university.name}</h1>
                <p className="text-sm text-primary">turkish - jkn</p>
                <span className="text-sm text-secondary">komkm</span>
              </div>
            </div>
            <div className="text-gray-500 py-4">
              <p className="line-clamp-4"
                dangerouslySetInnerHTML={{ __html: university.description.slice(0, 300) }}
              ></p>
            </div>
            <div className="text-sm flex text-center gap-4 justify-center">
              <div className="bg-gray-50 py-3 px-5 space-y-2 rounded-lg">
                <h2 className="text-primary text-base">{t('university.globalRank')}</h2>
                <p className="text-secondary">{university.global_rank}</p>
              </div>
              <div className="bg-gray-50 py-3 px-5 space-y-2 rounded-lg">
                <h2 className="text-primary text-base">{t('university.localRank')}</h2>
                <p className="text-secondary">{university.local_rate}</p>
              </div>
              <div className="bg-gray-50 py-3 px-5 space-y-2 rounded-lg">
                <h2 className="text-primary text-base">{t('university.studentsCount')}</h2>
                <p className="text-secondary">{university.student_count}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="md:w-2/4 p-4 md:order-2">
            <Image
              src={university.image.split("http://").join("https://")}
              alt=""
              width={500}
              height={500}
              className="size-full rounded-xl"
            />
          </CardContent>
        </Card>

        <div className="bg-white space-y-7 text-gray-500">
          <Card className="border-none shadow-none">
            <CardHeader>
              <h1 className="text-lg md:text-xl font-bold my-2">
                {t("university.video")} {university.name}
              </h1>
            </CardHeader>
            <CardContent className="h-[30rem]">
              {university.video === null ? (
                <Image
                  src={university.image.split("http://").join("https://")}
                  alt=""
                  width={500}
                  height={500}
                  className="size-full rounded-xl"
                />
              ) : (
                <iframe
                  className="size-full rounded-xl"
                  width={1280}
                  src={`https://www.youtube.com/embed/${
                    university.video.split("=")[1]
                  }`}
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              )}
            </CardContent>
          </Card>
          <div className="py-10">
            <h1 className="text-lg md:text-xl font-bold px-4">{t('university.photo')}</h1>
          </div>
         {  university.photo_album.length > 0  && <div className="flex items-stretch gap-4 h-[30rem] rounded-xl px-4">
            <div className="flex flex-col w-1/3 gap-y-2 -mt-1">
              <img
                src={
                  university.photo_album.length > 0 &&
                  university.photo_album[0].split("http://").join("https://")
                }
                alt="photo_album image 1"
                className="w-full h-1/2 object-cover rounded-2xl"
              />
              <img
                src={
                  university.photo_album.length >= 2 &&
                  university.photo_album[1].university.image
                    .split("http://")
                    .join("https://")
                }
                alt="photo_album image 2"
                className="w-full h-1/2 object-cover rounded-2xl"
              />
            </div>

            <div className="w-2/3">
              <img
                src={
                  university.photo_album.length >= 3 &&
                  university.photo_album[2].split("http://").join("https://")
                }
                alt="photo_album image 3"
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
          </div>}
        </div>

        <div className="space-y-7 text-gray-500 mt-10 py-10">
          <h1 className="text-lg md:text-xl font-bold px-4">{t('university.features')}</h1>
          <div className="w-4/5 mx-auto">
            <Card className="flex items-center border-none shadow-none gap-4 p-3 md:gap-6 group hover:shadow-2xl">
              <CardHeader className="p-0">
                <div className="size-12 text-xl rounded-full bg-primary text-center flex items-center justify-center text-white group-hover:bg-secondary">
                  1
                </div>
              </CardHeader>
              <CardContent className="p-0">
                lorem kjf kmwefomefw wefnwe fowef
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="border-none shadow-none rounded-none bg-primary py-10">
          <CardHeader>
            <h1 className="text-white text-lg md:text-xl font-bold">{university.name}</h1>
          </CardHeader>
          <CardContent className="text-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            <Card className="border-none shadow-none group">
              <CardHeader className="flex justify-center items-center">
              <Image
                  src={img1}
                  alt=""
                  width={500}
                  height={500}
                  className="size-28 group-hover:scale-110 duration-300 transition-all"
                />
              </CardHeader>
              <CardContent>
                <h1 className="text-lg md:text-xl font-bold text-primary">{t("university.globalRank")}</h1>
              </CardContent>
              <CardFooter className="flex justify-center border-t py-3">
                <p>{university.global_rank}</p>
              </CardFooter>
            </Card>
            <Card className="border-none shadow-none group">
              <CardHeader className="flex justify-center items-center">
              <Image
                  src={img2}
                  alt=""
                  width={500}
                  height={500}
                  className="size-28 group-hover:scale-110 duration-300 transition-all"
                />
              </CardHeader>
              <CardContent>
                <h1 className="text-lg md:text-xl font-bold text-primary">{t("university.localRank")}</h1>
              </CardContent>
              <CardFooter className="flex justify-center border-t py-3">
                <p>{university.local_rate}</p>
              </CardFooter>
            </Card>
            <Card className="border-none shadow-none group">
              <CardHeader className="flex justify-center items-center">
              <Image
                  src={img4}
                  alt=""
                  width={500}
                  height={500}
                  className="size-28 group-hover:scale-110 duration-300 transition-all"
                />
              </CardHeader>
              <CardContent>
                <h1 className="text-lg md:text-xl font-bold text-primary">{t("university.studentsCount")}</h1>
              </CardContent>
              <CardFooter className="flex justify-center border-t py-3">
                <p>{university.student_count}</p>
              </CardFooter>
            </Card>
            <Card className="border-none shadow-none group">
              <CardHeader className="flex justify-center items-center">
              <Image
                  src={img3}
                  alt=""
                  width={500}
                  height={500}
                  className="size-28 group-hover:scale-110 duration-300 transition-all"
                />
              </CardHeader>
              <CardContent>
                <h1 className="text-lg md:text-xl font-bold text-primary">{t("university.staff")}</h1>
              </CardContent>
              <CardFooter className="flex justify-center border-t py-3">
                <p>{university.teachers_count}</p>
              </CardFooter>
            </Card>
            <Card className="border-none shadow-none group">
              <CardHeader className="flex justify-center items-center">
              <Image
                  src={img5}
                  alt=""
                  width={500}
                  height={500}
                  className="size-28 group-hover:scale-110 duration-300 transition-all"
                />
              </CardHeader>
              <CardContent>
                <h1 className="text-lg md:text-xl font-bold text-primary">{t("university.nationalityCount")}</h1>
              </CardContent>
              <CardFooter className="flex justify-center border-t py-3">
                <p>{university.national_count}</p>
              </CardFooter>
            </Card>
          </CardContent>
        </Card>


<div className="my-8">
  <h1 className="text-2xl font-bold mb-4">{t('tabs.studyPrograms')}</h1>
        <StudyProgramsTabs studyPrograms={data.study_programs} lng={lng}/>
</div>


<div className="px-4 py-10 mt-10 bg-white rounded-md">

<div className="prose prose-h3:text-primary prose-h1:text-primary prose-h2:text-primary prose-h4:text-primary prose-h3:py-0" dangerouslySetInnerHTML={{__html: university.description}}></div>
</div>

<div className="px-4 py-10 mt-10 rounded-md">
<h1 className="text-lg md:text-xl font-bold mb-4">{t('university.studentHousings')}</h1>
{student_housings && student_housings?.length > 0 && (
        <HousingList t={t} housings={student_housings} />
      )}

      </div>

        {/* <Card className="mb-8 border-none">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Image
                src={university.logo.split("http://").join("https://")}
                alt={university.name}
                width={100}
                height={100}
                className="rounded-full"
              />
              <div className="space-y-1"> 
                <CardTitle>{university.name}</CardTitle>
                <CardDescription>
                  {t("university.foundedIn")} {university.found_year} •{" "}
                  {t("university.globalRank")}: {university.global_rank}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Image
              src={university.image.split("http://").join("https://")}
              alt={university.name}
              width={800}
              height={400}
              className="w-full rounded-lg mb-4"
            />
            <div dangerouslySetInnerHTML={{ __html: university.description }} />
            <div className="mt-4">
              <strong>{t("university.languages")}:</strong>{" "}
              {university.languages.map((lang: any) => lang.name).join(", ")}
            </div>
          </CardContent>
        </Card> */}

        {/* <TabsComponent
          lng={lng}
          studyPrograms={study_programs}
          studentHousings={student_housings}
          faqs={faqs}
        /> */}

        {/* <Card>
          <CardHeader>
            <CardTitle>{t("specifications.title")}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              {specifications && specifications.length > 0 && 
              Object.keys(specifications).map((key: any) => (
                <li key={specifications[key].id}>
                  {specifications[key].name}
                </li>
              ))
              }
            </ul>
          </CardContent>
        </Card> */}
      </div>
    );
  } else
    return (
      <div className="h-[50vh] flex justify-center items-center">
        <h1 className="text-2xl text-gray-500 font-bold">
          University Not Found
        </h1>
      </div>
    );
}
