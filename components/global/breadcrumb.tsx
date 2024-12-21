'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'

export default function BreadcrumbApp() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(segment => segment !== '')

  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join('/')}`
          const isLast = index === segments.length - 1
          return (
            <li key={href} className="flex items-center">
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <Link
                href={href}
                className={`ml-2 ${
                  isLast
                    ? 'text-gray-900 font-semibold'
                    : 'text-gray-500 hover:text-gray-700 transition-colors'
                }`}
                aria-current={isLast ? 'page' : undefined}
              >
                {segment.charAt(0).toUpperCase() + segment.slice(1)}
              </Link>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

