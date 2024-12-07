"use client"

import { useRouter, usePathname } from "next/navigation"
import { ChangeEvent, useTransition } from "react"
import { dir } from "i18next"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function LocaleSwitcher({ lng }: { lng: string }) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = lng

  if (typeof document !== 'undefined') {
    document.documentElement.lang = currentLocale
    document.documentElement.dir = dir(currentLocale)
  }

  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      const newPath = pathname.replace(`/${currentLocale}`, `/${nextLocale}`)
      router.replace(newPath)
      document.documentElement.lang = nextLocale
      document.documentElement.dir = dir(nextLocale)
    })
  }

  return (
    <Select
      defaultValue={currentLocale}
      onValueChange={onSelectChange}
      disabled={isPending}
      
    >
      <SelectTrigger className="w-[55px] md:w-[70px] h-8 md:h-9 bg-transparent !text-white focus:ring-0 focus:outline-none focus-visible:ring-0 focus:border-none">
        <div className="!text-white">
          <SelectValue placeholder="Select language" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">EN</SelectItem>
        <SelectItem value="ar">AR</SelectItem>
        <SelectItem value="fa">FA</SelectItem>
      </SelectContent>
    </Select>
  )
}

