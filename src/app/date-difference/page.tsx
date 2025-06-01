'use client'

import { useState } from 'react'
import CopyButton from '../../components/CopyButton'

export default function DateDifference() {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const calculateDifference = () => {
    if (!startDate || !endDate) return ''

    const start = new Date(startDate)
    const end = new Date(endDate)

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return 'Invalid date(s)'
    }

    const diffTime = Math.abs(end.getTime() - start.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    const weeks = Math.floor(diffDays / 7)
    const remainingDays = diffDays % 7
    
    const months = Math.floor(diffDays / 30.44) // Average days in a month
    const remainingDaysFromMonths = Math.floor(diffDays % 30.44)

    const results = [
      `Total days: ${diffDays}`,
      `Weeks and days: ${weeks} weeks, ${remainingDays} days`,
      `Months and days: ${months} months, ${remainingDaysFromMonths} days`
    ]

    return results.join('\n')
  }

  const difference = calculateDifference()

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Date Difference Calculator</h1>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-2">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="output" className="block text-sm font-medium text-gray-700">
              Date Difference
            </label>
            <CopyButton text={difference} />
          </div>
          <textarea
            id="output"
            value={difference}
            readOnly
            className="w-full h-32 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
          />
        </div>

        <div className="text-sm text-gray-500">
          <p>Select two dates to calculate the difference between them.</p>
          <p>The calculator will show the difference in total days, weeks and days, and months and days.</p>
        </div>
      </div>
    </div>
  )
} 