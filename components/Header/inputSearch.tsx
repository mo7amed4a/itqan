
import { TextInput } from "flowbite-react"
import { HiOutlineSearch } from "react-icons/hi"

export default function InputSearch({placeholder} : {
    placeholder: string
}) {
  return (
    <div className="max-w-md">
    <TextInput id="email4" rightIcon={HiOutlineSearch} type="email" placeholder={placeholder} required />
  </div>
  )
}
