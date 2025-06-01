import React from 'react'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Welcome to UtilityKit Pro</h1>
      
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-8">
          A collection of powerful client-side utility tools to help you with everyday tasks.
          All tools run entirely in your browser - no data is sent to any server.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Text Tools</h2>
            <ul className="space-y-2">
              <li>• Copy Cleaner - Clean and format text</li>
              <li>• Text Divider - Split text into sentences</li>
              <li>• Character Counter - Count characters, words, and sentences</li>
              <li>• Case Converter - Convert text to various cases</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Data Tools</h2>
            <ul className="space-y-2">
              <li>• Date Difference Calculator - Calculate time between dates</li>
              <li>• Decimal ↔ Fraction Converter - Convert between number formats</li>
              <li>• Timezone Converter - View time in different timezones</li>
              <li>• Fake Data Generator - Generate random test data</li>
              <li>• ASCII Table Viewer - View ASCII character codes</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
          <h2 className="text-xl font-semibold mb-4 text-blue-900">Features</h2>
          <ul className="space-y-2 text-blue-800">
            <li>• All tools run entirely in your browser</li>
            <li>• No data is sent to any server</li>
            <li>• Instant results with no loading time</li>
            <li>• Copy results with one click</li>
            <li>• Responsive design for all devices</li>
          </ul>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Select a tool from the sidebar to get started.</p>
        </div>
      </div>
    </div>
  )
} 