import { Loader2 } from 'lucide-react'
import React, { useState } from 'react'

interface PromptInputProps {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  isLoading: boolean
}

const PromptInput: React.FC<PromptInputProps> = ({
  value,
  onChange,
  onSubmit,
  isLoading
}) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={`relative border rounded-md transition duration-200 ${
          isFocused
            ? 'border-purple-500 ring-2 ring-purple-500/20'
            : 'border-gray-300 dark:border-gray-600'
        }`}
      >
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Describe your application in detail... (e.g. 'A todo app with categories, dark mode, and local storage')"
          className="w-full p-3 min-h-[120px] resize-y bg-transparent placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none"
          disabled={isLoading}
        />
        {isLoading && (
          <div className="absolute top-2 right-2 text-purple-500">
            <Loader2 className="w-5 h-5 animate-spin" />
          </div>
        )}
      </div>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
        <p>
          Be specific about features, design, technologies, and functionality you want to include.
        </p>
      </div>
    </form>
  )
}

export default PromptInput 