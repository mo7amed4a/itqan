import Link from "next/link"
import React from "react"

export default function LinkApp({children,href, lng}: {
    children: React.ReactNode
    href: string,
    lng: string
}) {
  return (
    <Link href={`/${lng}${href}`}>{children}</Link>
  )
}
