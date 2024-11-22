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
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="ar">العربية</SelectItem>
        <SelectItem value="fa">فارسی</SelectItem>
      </SelectContent>
    </Select>
  )
}

