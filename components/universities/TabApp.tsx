import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from 'next/image'
import { useTranslation } from '@/i18n'
import { dir } from 'i18next'

interface Program {
  id: number
  specialization_name: string
  study_years: number
  study_language: string
  fees: string
  annual_fees: number
  has_grant: number
}

interface StudyProgram {
  level_id: number
  level_name: string
  programs: Program[]
}

interface Housing {
  id: number
  name: string
  type: string
  capacity: number
  price: string
  beds: number
  meals: number
  internet: number
  description: string
  images: string[]
}

interface FAQ {
  id: number
  question: string
  answer: string
}

interface TabsComponentProps {
  studyPrograms: StudyProgram[]
  studentHousings: Housing[]
  faqs: FAQ[]
  lng: string
}

export async function TabsComponent({ studyPrograms, studentHousings, faqs , lng}: TabsComponentProps) {
    const {t} = await useTranslation(lng, "university_details")
    return (
        <Tabs defaultValue="programs" dir={dir(lng)} className="mb-8 text-start bg-white p-4">
          <TabsList>
            <TabsTrigger value="programs">{t('tabs.studyPrograms')}</TabsTrigger>
            <TabsTrigger value="housing">{t('tabs.studentHousing')}</TabsTrigger>
            <TabsTrigger value="faqs">{t('tabs.faqs')}</TabsTrigger>
          </TabsList>
          <TabsContent value="programs">
            {studyPrograms.map((level) => (
              <Card key={level.level_id} className="mb-4 border-none text-start">
                <CardHeader>
                  <CardTitle>{level.level_name} {t('studyPrograms.programs')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]" dir={dir(lng)}>
                    {level.programs.map((program) => (
                      <div key={program.id} className="mb-4">
                        <h3 className="text-lg font-semibold">{program.specialization_name}</h3>
                        <p>{t('studyPrograms.studyYears')}: {program.study_years}</p>
                        <p>{t('studyPrograms.language')}: {program.study_language}</p>
                        <p>{t('studyPrograms.fees')}: ${program.fees}</p>
                        <p>{t('studyPrograms.annualFees')}: ${program.annual_fees}</p>
                        {program.has_grant === 1 && <Badge>{t('studyPrograms.grantAvailable')}</Badge>}
                      </div>
                    ))}
                  </ScrollArea>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="housing" className='text-start'>
            {studentHousings.map((housing: any) => (
              <Card key={housing.id} className="mb-4 border-none text-start">
                <CardHeader>
                  <CardTitle>{housing.name}</CardTitle>
                  <p>{housing.type} • {t('housing.capacity')}: {housing.capacity}</p>
                </CardHeader>
                <CardContent>
                  <p>{t('housing.price')}: ${housing.price}</p>
                  <p>{t('housing.beds')}: {housing.beds} • {t('housing.meals')}: {housing.meals} • {t('housing.internet')}: {housing.internet}Mbps</p>
                  <div dangerouslySetInnerHTML={{ __html: housing.description }} />
                  <div className="grid grid-cols-3 md:flex gap-2 mt-4">
                    {housing.images.map((image: string, index: number) => (
                      <Image key={index} src={image.split('http://').join('https://')} alt={`${housing.name} image ${index + 1}`} width={200} height={150} className="rounded w-auto min-h-32 bg-red-500 " />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="faqs">
            <Accordion type="single" collapsible>
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={`faq-${faq.id}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        </Tabs>
      )
}
