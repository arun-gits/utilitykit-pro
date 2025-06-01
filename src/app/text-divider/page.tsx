'use client'

import { useState } from 'react'
import CopyButton from '../../components/CopyButton'

export default function TextDivider() {
  const [input, setInput] = useState('')

  const divideIntoSentences = (text: string) => {
    // Split by common sentence endings followed by space or newline
    const sentences = text
      .split(/(?<=[.!?])\s+/)
      .filter(sentence => sentence.trim().length > 0)
      .map(sentence => sentence.trim())
    
    return sentences.join('\n')
  }

  const dividedText = divideIntoSentences(input)

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Text Divider</h1>
      
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
            placeholder="Enter your text here..."
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="output" className="block text-sm font-medium text-gray-700">
              Divided Sentences
            </label>
            <CopyButton text={dividedText} />
          </div>
          <textarea
            id="output"
            value={dividedText}
            readOnly
            className="w-full h-48 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md"
          />
        </div>

        <div className="text-sm text-gray-500">
          <p>Each sentence will be displayed on a new line.</p>
          <p>Sentences are split by periods, exclamation marks, and question marks followed by a space.</p>
        </div>
      </div>
    </div>
  )
} 