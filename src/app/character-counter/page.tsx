'use client'

import { useState, useEffect } from 'react'
import CopyButton from '../../components/CopyButton'

interface Counts {
  charsWithSpaces: number
  charsWithoutSpaces: number
  words: number
  sentences: number
}

export default function CharacterCounter() {
  const [input, setInput] = useState('')
  const [counts, setCounts] = useState<Counts>({
    charsWithSpaces: 0,
    charsWithoutSpaces: 0,
    words: 0,
    sentences: 0,
  })

  useEffect(() => {
    const calculateCounts = () => {
      const charsWithSpaces = input.length
      const charsWithoutSpaces = input.replace(/\s/g, '').length
      const words = input.trim().split(/\s+/).filter(Boolean).length
      const sentences = input.split(/[.!?]+/).filter(Boolean).length

      setCounts({
        charsWithSpaces,
        charsWithoutSpaces,
        words,
        sentences,
      })
    }

    calculateCounts()
  }, [input])

  const getCountDisplay = () => {
    return [
      `Characters (with spaces): ${counts.charsWithSpaces}`,
      `Characters (without spaces): ${counts.charsWithoutSpaces}`,
      `Words: ${counts.words}`,
      `Sentences: ${counts.sentences}`,
    ].join('\n')
  }

  const countDisplay = getCountDisplay()

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Character & Word Counter</h1>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="input" className="block text-sm font-medium text-gray-700 mb-2">
            Enter Text
          </label>
          <textarea
            id="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-48 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Type or paste your text here..."
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="output" className="block text-sm font-medium text-gray-700">
              Counts
            </label>
            <CopyButton text={countDisplay} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 border border-gray-300 rounded-md">
              <div className="text-lg font-medium text-gray-900">
                {counts.charsWithSpaces}
              </div>
              <div className="text-sm text-gray-500">Characters (with spaces)</div>
            </div>
            <div className="p-4 bg-gray-50 border border-gray-300 rounded-md">
              <div className="text-lg font-medium text-gray-900">
                {counts.charsWithoutSpaces}
              </div>
              <div className="text-sm text-gray-500">Characters (without spaces)</div>
            </div>
            <div className="p-4 bg-gray-50 border border-gray-300 rounded-md">
              <div className="text-lg font-medium text-gray-900">
                {counts.words}
              </div>
              <div className="text-sm text-gray-500">Words</div>
            </div>
            <div className="p-4 bg-gray-50 border border-gray-300 rounded-md">
              <div className="text-lg font-medium text-gray-900">
                {counts.sentences}
              </div>
              <div className="text-sm text-gray-500">Sentences</div>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-500">
          <p>Counts are updated in real-time as you type.</p>
          <p>Words are counted by splitting on whitespace.</p>
          <p>Sentences are counted by splitting on periods, exclamation marks, and question marks.</p>
        </div>
      </div>
    </div>
  )
} 