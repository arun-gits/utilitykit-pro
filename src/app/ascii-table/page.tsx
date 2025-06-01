'use client'

import { useState, useMemo } from 'react'
import CopyButton from '../../components/CopyButton'

interface ASCIIChar {
  char: string
  decimal: number
  hex: string
  binary: string
  description: string
}

export default function ASCIITable() {
  const [search, setSearch] = useState('')
  const [showExtended, setShowExtended] = useState(false)

  const getCharDescription = (char: string, code: number): string => {
    if (code === 32) return 'Space'
    if (code === 9) return 'Tab'
    if (code === 10) return 'Line Feed'
    if (code === 13) return 'Carriage Return'
    if (code < 32) return 'Control Character'
    if (code === 127) return 'Delete'
    if (code > 127) return 'Extended ASCII'
    return char
  }

  const asciiChars = useMemo(() => {
    const chars: ASCIIChar[] = []
    const end = showExtended ? 255 : 127

    for (let i = 0; i <= end; i++) {
      const char = String.fromCharCode(i)
      chars.push({
        char: char === ' ' ? '␣' : char,
        decimal: i,
        hex: i.toString(16).toUpperCase().padStart(2, '0'),
        binary: i.toString(2).padStart(8, '0'),
        description: getCharDescription(char, i)
      })
    }

    return chars
  }, [showExtended])

  const filteredChars = useMemo(() => {
    if (!search) return asciiChars

    const searchLower = search.toLowerCase()
    return asciiChars.filter(char => 
      char.char.toLowerCase().includes(searchLower) ||
      char.decimal.toString().includes(search) ||
      char.hex.toLowerCase().includes(searchLower) ||
      char.binary.includes(search) ||
      char.description.toLowerCase().includes(searchLower)
    )
  }, [asciiChars, search])

  const getTableText = () => {
    return filteredChars
      .map(char => `${char.char}\t${char.decimal}\t0x${char.hex}\t${char.binary}\t${char.description}`)
      .join('\n')
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">ASCII Table Viewer</h1>
      
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              Search
            </label>
            <input
              type="text"
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search by character, decimal, hex, or binary..."
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="showExtended"
              checked={showExtended}
              onChange={(e) => setShowExtended(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="showExtended" className="ml-2 block text-sm text-gray-700">
              Show Extended ASCII (0-255)
            </label>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-medium">ASCII Table</h2>
            <CopyButton text={getTableText()} />
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Character</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Decimal</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Hex</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Binary</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>

                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredChars.map((char) => (
                  <tr key={char.decimal} className="hover:bg-gray-50">
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 font-mono">
                      {char.char}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 font-mono">
                      {char.decimal}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 font-mono">
                      0x{char.hex}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 font-mono">
                      {char.binary}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                      {char.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-sm text-gray-500">
          <p>Search the table by character, decimal code, hexadecimal code, binary code, or description.</p>
          <p>Toggle &quot;Show Extended ASCII&ldquo; to view characters from 0-255 instead of just 0-127.</p>
          <p>Use the Copy button to copy the entire table in a tab-separated format.</p>
        </div>
      </div>
    </div>
  )
} 