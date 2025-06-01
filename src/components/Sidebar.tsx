'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import {
  DocumentDuplicateIcon,
  ScissorsIcon,
  CalendarIcon,
  CalculatorIcon,
  ClockIcon,
  DocumentTextIcon,
  ArrowsUpDownIcon,
  UserIcon,
  TableCellsIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Copy Cleaner', href: '/copy-cleaner', icon: DocumentDuplicateIcon },
  { name: 'Text Divider', href: '/text-divider', icon: ScissorsIcon },
  { name: 'Date Difference', href: '/date-difference', icon: CalendarIcon },
  { name: 'Decimal ↔ Fraction', href: '/decimal-fraction', icon: CalculatorIcon },
  { name: 'Timezone Converter', href: '/timezone', icon: ClockIcon },
  { name: 'Character Counter', href: '/character-counter', icon: DocumentTextIcon },
  { name: 'Case Converter', href: '/case-converter', icon: ArrowsUpDownIcon },
  { name: 'Fake Data Generator', href: '/fake-data', icon: UserIcon },
  { name: 'ASCII Table', href: '/ascii-table', icon: TableCellsIcon },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col bg-white dark:bg-gray-800 shadow-lg">
      <div className="flex h-16 items-center justify-center border-b dark:border-gray-700">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">UtilityKit Pro</h1>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              prefetch={true}
              className={clsx(
                'group flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors duration-150',
                isActive
                  ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
              )}
            >
              <item.icon
                className={clsx(
                  'mr-3 h-6 w-6 flex-shrink-0 transition-colors duration-150',
                  isActive ? 'text-gray-500 dark:text-gray-300' : 'text-gray-400 dark:text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300'
                )}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
} 