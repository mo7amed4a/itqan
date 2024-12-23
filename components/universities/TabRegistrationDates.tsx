"use client"
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { usePathname } from 'next/navigation';
import { dir } from 'i18next';

interface EducationLevel {
  level_id: number;
  level_name: string;
  conditions: Condition[];
}

interface Condition {
  id: number;
  registration_dates: string;
}

export default function TabRegistrationDates({
  conditions
}: {
  conditions: EducationLevel[]
}) {
  const [activeTab, setActiveTab] = useState(conditions[0].level_id.toString())
  const pathname = usePathname()

  return (
    <div >
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full space-y-5" dir={dir(pathname.split('/')[1])}>
        <TabsList className="flex bg-transparent w-full justify-start">
          {conditions.map((level) => (
            <TabsTrigger
              key={level.level_id}
              value={level.level_id.toString()}
              className="data-[state=active]:border-b-2 data-[state=active]:border-b-secondary"
            >
              {level.level_name}
            </TabsTrigger>
          ))}
        </TabsList>
        {conditions.map((level) => (
          <TabsContent key={level.level_id} value={level.level_id.toString()}>
            <Card className='border-none shadow-none'>
              {/* <CardHeader>
                <CardTitle className='text-primary'>{level.level_name} Registration Dates</CardTitle>
              </CardHeader> */}
              <CardContent>
                <div 
                  className='w-3/5 prose prose-h3:text-primary prose-h1:text-primary prose-h2:text-primary prose-h4:text-primary prose-h3:py-0' 
                  dangerouslySetInnerHTML={{ __html: level.conditions[0].registration_dates }} 
                />
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

