'use client'

import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { dir } from 'i18next'
import { useTranslation } from '@/i18n/client'

interface Program {
  id: number
  specialization_id: number
  specialization_name: string
  study_years: number
  study_language: string
  fees: string
  annual_fees: number
  has_grant: boolean | null
  old_fees: string | null
}

interface StudyLevel {
  level_id: number
  level_name: string
  programs: Program[]
}

interface StudyProgramsTabsProps {
  studyPrograms: StudyLevel[],
  lng: string
}

export default function StudyProgramsTabs({ studyPrograms, lng }: StudyProgramsTabsProps) {
    const {t} = useTranslation(lng, "university_details")

  const [activeTab, setActiveTab] = useState(studyPrograms[0]?.level_id.toString() || '')

  if (studyPrograms.length === 0) {
    return <p className="text-center text-lg">No study programs available.</p>
  }

  return (
    <Tabs value={activeTab} dir={dir(lng)} onValueChange={setActiveTab} className="w-full">
      <TabsList className="flex gap-4 w-full justify-start rounded-none mb-8 bg-transparent">
        {studyPrograms.map((level) => (
          <TabsTrigger className="bg-transparent" key={level?.level_id} value={level?.level_id?.toString() || ''}>
            {level?.level_name}
          </TabsTrigger>
        ))}
      </TabsList>
      {studyPrograms.map((level) => (
        <TabsContent key={level?.level_id} value={level?.level_id?.toString() || ''}>
          <div className="rounded-xl border overflow-hidden">
            <Table dir="rtl" >
              <TableHeader className="bg-primary">
                <TableRow>
                  <TableHead className="text-right border text-white md:w-2/5">{t('tabs.majors')}</TableHead>
                  <TableHead className="text-right border text-white">{t('tabs.studyYears')}</TableHead>
                  <TableHead className="text-right border text-white">{t('tabs.studyLanguage')}</TableHead>
                  <TableHead className="text-right border text-white">{t('tabs.tuitionFee')}</TableHead>
                  <TableHead className="text-right border text-white w-44">{t('tabs.registration')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {level?.programs?.map((program) => (
                  <TableRow key={program?.id} className="even:bg-muted/50">
                    <TableCell className="font-medium md:w-2/5 border">
                      {program?.specialization_name}
                    </TableCell>
                    <TableCell className='border'>{program?.study_years} {t('tabs.years')}</TableCell>
                    <TableCell className='border'>{program?.study_language}</TableCell>
                    <TableCell className='border'>${program?.annual_fees?.toLocaleString()}</TableCell>
                    <TableCell className='border flex justify-center'>
                      <Button 
                        className="bg-primary hover:bg-secondary hover:!scale-x-100 !px-8" size="sm"
                      >
                        {t('booking_now')}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}

