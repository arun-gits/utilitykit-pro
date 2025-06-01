'use client'

import { useState } from 'react'
import CopyButton from '../../components/CopyButton'

export default function CopyCleaner() {
  const [input, setInput] = useState('')
  const [removeSpecialChars, setRemoveSpecialChars] = useState(false)

  const cleanText = (text: string) => {
    let cleaned = text
      .trim()
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .replace(/\n{3,}/g, '\n\n') // Replace 3+ newlines with 2

    if (removeSpecialChars) {
      // Keep only alphanumeric, basic punctuation, and whitespace
      cleaned = cleaned.replace(/[^a-zA-Z0-9\s.,!?'-]/g, '')
    }

    return cleaned
  }

  const cleanedText = cleanText(input)

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Copy Cleaner</h1>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="input" className="block text-sm font-medium text-gray-700 mb-2">
            Input Text
          </label>
          <textarea
            id="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-48 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Paste your text here..."
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="removeSpecialChars"
            checked={removeSpecialChars}
            onChange={(e) => setRemoveSpecialChars(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="removeSpecialChars" className="ml-2 block text-sm text-gray-700">
            Remove special characters (except basic punctuation)
          </label>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="output" className="block text-sm font-medium text-gray-700">
              Cleaned Text
            </label>
            <CopyButton text={cleanedText} />
          </div>
          <textarea
            id="output"
            value={cleanedText}
            readOnly
            className="w-full h-48 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
          />
        </div>
      </div>
    </div>
  )
} 