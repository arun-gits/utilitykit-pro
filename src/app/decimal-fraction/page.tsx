'use client'

import { useState, KeyboardEvent } from 'react'
import CopyButton from '../../components/CopyButton'

export default function DecimalFraction() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [error, setError] = useState('')

  // const gcd = (a: number, b: number): number => {
  //   return b === 0 ? a : gcd(b, a % b)
  // }

  const decimalToFraction = (decimal: number): string => {
    const tolerance = 1.0E-6
    let h1 = 1
    let h2 = 0
    let k1 = 0
    let k2 = 1
    let b = decimal
    do {
      const a = Math.floor(b)
      let aux = h1
      h1 = a * h1 + h2
      h2 = aux
      aux = k1
      k1 = a * k1 + k2
      k2 = aux
      b = 1 / (b - a)
    } while (Math.abs(decimal - h1 / k1) > decimal * tolerance)

    return `${h1}/${k1}`
  }

  const fractionToDecimal = (fraction: string): string => {
    const [numerator, denominator] = fraction.split('/').map(Number)
    if (isNaN(numerator) || isNaN(denominator) || denominator === 0) {
      throw new Error('Invalid fraction')
    }
    return (numerator / denominator).toString()
  }

  const handleConvert = () => {
    setError('')
    setResult('')

    try {
      if (input.includes('/')) {
        // Convert fraction to decimal
        const decimal = fractionToDecimal(input)
        setResult(decimal)
      } else {
        // Convert decimal to fraction
        const decimal = parseFloat(input)
        if (isNaN(decimal)) {
          throw new Error('Invalid input')
        }
        const fraction = decimalToFraction(decimal)
        setResult(fraction)
      }
    } catch (err) {
      console.log(err)
      setError('Invalid input. Please enter a valid decimal number or fraction (e.g., 0.75 or 3/4)')
    }
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleConvert()
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Decimal ↔ Fraction Converter</h1>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="input" className="block text-sm font-medium text-gray-700">
            Enter a decimal number or fraction
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              id="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., 0.75 or 3/4"
            />
            <button
              onClick={handleConvert}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-150"
            >
              Convert
            </button>
          </div>
        </div>

        {error && (
          <div className="text-red-600 text-sm">
            {error}
          </div>
        )}

        {result && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="output" className="block text-sm font-medium text-gray-700">
                Result
              </label>
              <CopyButton text={result} />
            </div>
            <div className="px-3 py-2 bg-gray-50 border-gray-300 rounded-md">
              {result}
            </div>
          </div>
        )}

        <div className="text-sm text-gray-500">
          <p>Enter either a decimal number (e.g., 0.75) or a fraction (e.g., 3/4).</p>
          <p>The converter will automatically detect the format and convert to the other form.</p>
        </div>
      </div>
    </div>
  )
} 