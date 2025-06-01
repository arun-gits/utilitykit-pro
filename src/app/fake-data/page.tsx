'use client'

import { useState } from 'react'
import CopyButton from '../../components/CopyButton'

const firstNames = [
  'James', 'Mary', 'John', 'Patricia', 'Robert', 'Jennifer', 'Michael', 'Linda',
  'William', 'Elizabeth', 'David', 'Barbara', 'Richard', 'Susan', 'Joseph', 'Jessica',
  'Thomas', 'Sarah', 'Charles', 'Karen', 'Christopher', 'Nancy', 'Daniel', 'Lisa',
  'Matthew', 'Margaret', 'Anthony', 'Betty', 'Mark', 'Sandra'
]

const lastNames = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
  'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson',
  'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson',
  'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson'
]

const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com']

const loremIpsum = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
]

export default function FakeDataGenerator() {
  const [generatedData, setGeneratedData] = useState<Record<string, string>>({})

  const generateFullName = () => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    return `${firstName} ${lastName}`
  }

  const generateEmail = () => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)].toLowerCase()
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)].toLowerCase()
    const domain = domains[Math.floor(Math.random() * domains.length)]
    return `${firstName}.${lastName}@${domain}`
  }

  const generatePhoneNumber = () => {
    const areaCode = Math.floor(Math.random() * 900) + 100
    const prefix = Math.floor(Math.random() * 900) + 100
    const lineNumber = Math.floor(Math.random() * 9000) + 1000
    return `${areaCode}-${prefix}-${lineNumber}`
  }

  const generateUUID = () => {
    return crypto.randomUUID()
  }

  const generateLoremIpsum = () => {
    const sentences = []
    const numSentences = Math.floor(Math.random() * 2) + 3 // 3-4 sentences
    for (let i = 0; i < numSentences; i++) {
      sentences.push(loremIpsum[Math.floor(Math.random() * loremIpsum.length)])
    }
    return sentences.join(' ')
  }

  const handleGenerate = (type: string) => {
    let value = ''
    switch (type) {
      case 'fullName':
        value = generateFullName()
        break
      case 'email':
        value = generateEmail()
        break
      case 'phoneNumber':
        value = generatePhoneNumber()
        break
      case 'uuid':
        value = generateUUID()
        break
      case 'loremIpsum':
        value = generateLoremIpsum()
        break
    }
    setGeneratedData(prev => ({ ...prev, [type]: value }))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Fake Data Generator</h1>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-300 rounded-md">
            <h2 className="text-lg font-medium mb-2">Full Name</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleGenerate('fullName')}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Generate
              </button>
              {generatedData.fullName && (
                <CopyButton text={generatedData.fullName} />
              )}
            </div>
            {generatedData.fullName && (
              <div className="mt-2 p-2 bg-gray-50 rounded">
                {generatedData.fullName}
              </div>
            )}
          </div>

          <div className="p-4 border border-gray-300 rounded-md">
            <h2 className="text-lg font-medium mb-2">Email Address</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleGenerate('email')}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Generate
              </button>
              {generatedData.email && (
                <CopyButton text={generatedData.email} />
              )}
            </div>
            {generatedData.email && (
              <div className="mt-2 p-2 bg-gray-50 rounded">
                {generatedData.email}
              </div>
            )}
          </div>

          <div className="p-4 border border-gray-300 rounded-md">
            <h2 className="text-lg font-medium mb-2">Phone Number</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleGenerate('phoneNumber')}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Generate
              </button>
              {generatedData.phoneNumber && (
                <CopyButton text={generatedData.phoneNumber} />
              )}
            </div>
            {generatedData.phoneNumber && (
              <div className="mt-2 p-2 bg-gray-50 rounded">
                {generatedData.phoneNumber}
              </div>
            )}
          </div>

          <div className="p-4 border border-gray-300 rounded-md">
            <h2 className="text-lg font-medium mb-2">UUID</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleGenerate('uuid')}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Generate
              </button>
              {generatedData.uuid && (
                <CopyButton text={generatedData.uuid} />
              )}
            </div>
            {generatedData.uuid && (
              <div className="mt-2 p-2 bg-gray-50 rounded">
                {generatedData.uuid}
              </div>
            )}
          </div>
        </div>

        <div className="p-4 border border-gray-300 rounded-md">
          <h2 className="text-lg font-medium mb-2">Lorem Ipsum</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleGenerate('loremIpsum')}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Generate
            </button>
            {generatedData.loremIpsum && (
              <CopyButton text={generatedData.loremIpsum} />
            )}
          </div>
          {generatedData.loremIpsum && (
            <div className="mt-2 p-2 bg-gray-50 rounded">
              {generatedData.loremIpsum}
            </div>
          )}
        </div>

        <div className="text-sm text-gray-500">
          <p>Click the Generate button for each type of data to create new random values.</p>
          <p>Use the Copy button to copy the generated value to your clipboard.</p>
        </div>
      </div>
    </div>
  )
} 