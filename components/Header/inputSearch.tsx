'use client'
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function InputSearch({placeholder} : {
    placeholder: string
}) {
  const [search, setSearch] = useState<string | null>(null)
  const router = useRouter()
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (search) {
      router.push(`/search?name=${search}`)
    }
  }
  return (
    <form onSubmit={handelSubmit} dir="rt" className="relative w-full max-w-sm">
      <Input
        type="search"
        placeholder={placeholder}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full ps-10 pe-4 py-2 border border-input hover:border-white focus:border-white bg-transparent text-white focus:ring-transparent focus:outline-transparent  placeholder:!text-white"
      />
      <button type="submit" className="cursor-pointer absolute inset-y-0 start-0 flex items-center ps-3">
        <Search className="h-4 w-4 text-white" aria-hidden="true" />
      </button>
    </form>
  )
}

