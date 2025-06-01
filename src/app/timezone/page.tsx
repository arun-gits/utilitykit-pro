'use client'

import { useState, useEffect } from 'react'
import CopyButton from '../../components/CopyButton'

const timezones = [
  { name: 'Local Time', timezone: Intl.DateTimeFormat().resolvedOptions().timeZone },
  { name: 'UTC', timezone: 'UTC' },
  { name: 'EST (New York)', timezone: 'America/New_York' },
  { name: 'PST (Los Angeles)', timezone: 'America/Los_Angeles' },
  { name: 'CET (Central European)', timezone: 'Europe/Paris' },
  { name: 'IST (India)', timezone: 'Asia/Kolkata' },
  { name: 'JST (Japan)', timezone: 'Asia/Tokyo' },
]

export default function TimezoneConverter() {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [convertedTimes, setConvertedTimes] = useState<string[]>([])

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date()
      if (selectedDate && selectedTime) {
        const [hours, minutes] = selectedTime.split(':')
        now.setFullYear(parseInt(selectedDate.split('-')[0]))
        now.setMonth(parseInt(selectedDate.split('-')[1]) - 1)
        now.setDate(parseInt(selectedDate.split('-')[2]))
        now.setHours(parseInt(hours))
        now.setMinutes(parseInt(minutes))
      }

      const times = timezones.map(({ name, timezone }) => {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: timezone,
          dateStyle: 'full',
          timeStyle: 'long',
        })
        return `${name}: ${formatter.format(now)}`
      })

      setConvertedTimes(times)
    }

    updateTimes()
    const interval = setInterval(updateTimes, 1000)
    return () => clearInterval(interval)
  }, [selectedDate, selectedTime])

  const allTimes = convertedTimes.join('\n')

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Timezone Converter</h1>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
              Date (Optional)
            </label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
              Time (Optional)
            </label>
            <input
              type="time"
              id="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="output" className="block text-sm font-medium text-gray-700">
              Converted Times
            </label>
            <CopyButton text={allTimes} />
          </div>
          <div className="space-y-2">
            {convertedTimes.map((time, index) => (
              <div
                key={index}
                className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
              >
                {time}
              </div>
            ))}
          </div>
        </div>

        <div className="text-sm text-gray-500">
          <p>Select a date and time to convert, or leave empty to use current time.</p>
          <p>Times are automatically updated every second when using current time.</p>
        </div>
      </div>
    </div>
  )
} 