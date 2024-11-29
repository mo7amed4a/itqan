
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

export default function InputSearch({placeholder} : {
    placeholder: string
}) {
  return (
    <div dir="rt" className="relative w-full max-w-sm">
      <Input
        type="search"
        placeholder={placeholder}
        className="w-full ps-10 pe-4 py-2 border border-input hover:border-white focus:border-white bg-transparent text-white focus:ring-transparent focus:outline-transparent  placeholder:!text-white"
      />
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <Search className="h-4 w-4 text-white" aria-hidden="true" />
      </div>
    </div>
  )
}

