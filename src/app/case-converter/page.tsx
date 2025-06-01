'use client'

import { useState } from 'react'
import CopyButton from '../../components/CopyButton'

interface CaseConversion {
  name: string
  convert: (text: string) => string
}

const caseConversions: CaseConversion[] = [
  {
    name: 'UPPERCASE',
    convert: (text) => text.toUpperCase(),
  },
  {
    name: 'lowercase',
    convert: (text) => text.toLowerCase(),
  },
  {
    name: 'Title Case',
    convert: (text) =>
      text
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
  },
  {
    name: 'Sentence case',
    convert: (text) =>
      text
        .toLowerCase()
        .split('. ')
        .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
        .join('. '),
  },
  {
    name: 'camelCase',
    convert: (text) =>
      text
        .toLowerCase()
        .split(' ')
        .map((word, index) =>
          index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join(''),
  },
  {
    name: 'PascalCase',
    convert: (text) =>
      text
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(''),
  },
  {
    name: 'snake_case',
    convert: (text) => text.toLowerCase().replace(/\s+/g, '_'),
  },
  {
    name: 'kebab-case',
    convert: (text) => text.toLowerCase().replace(/\s+/g, '-'),
  },
]

export default function CaseConverter() {
  const [input, setInput] = useState('')

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Case Converter</h1>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="input" className="block text-sm font-medium text-gray-700 mb-2">
            Enter Text
          </label>
          <textarea
            id="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Type or paste your text here..."
          />
        </div>

        <div className="space-y-4">
          {caseConversions.map(({ name, convert }) => {
            const convertedText = convert(input)
            return (
              <div key={name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-gray-700">
                    {name}
                  </label>
                  <CopyButton text={convertedText} />
                </div>
                <div className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-md">
                  {convertedText}
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-sm text-gray-500">
          <p>Enter text to convert it into various cases.</p>
          <p>Each case has its own copy button for easy copying.</p>
        </div>
      </div>
    </div>
  )
} 