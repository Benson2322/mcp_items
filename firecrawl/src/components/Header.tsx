import { Github, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header className="border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-gradient">
            FireCrawl
          </Link>
          <span className="ml-2 text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full">
            Beta
          </span>
        </div>

        <nav className="flex items-center space-x-6">
          <Link href="/templates" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
            Templates
          </Link>
          <Link href="/docs" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
            Docs
          </Link>
          <a 
            href="https://github.com/firecrawl/app-generator" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
          >
            <Github className="w-5 h-5" />
          </a>
          <button 
            onClick={toggleTheme} 
            className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header 