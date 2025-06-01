'use client'

import { useState } from 'react'
import { DocumentDuplicateIcon, CheckIcon } from '@heroicons/react/24/outline'

interface CopyButtonProps {
  text: string
  className?: string
}

export default function CopyButton({ text, className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text:', err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-sm font-medium text-gray-600 hover:bg-gray-200 ${className}`}
      title="Copy to clipboard"
    >
      {copied ? (
        <>
          <CheckIcon className="h-4 w-4" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <DocumentDuplicateIcon className="h-4 w-4" />
          <span>Copy</span>
        </>
      )}
    </button>
  )
} 