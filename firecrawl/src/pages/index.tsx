import { motion } from 'framer-motion'
import { ArrowRight, Code, Download, Github, Globe, Loader2 } from 'lucide-react'
import Head from 'next/head'
import React, { useState } from 'react'

// Import UI components
import Footer from '@/components/Footer'
import GeneratedCodePreview from '@/components/GeneratedCodePreview'
import Header from '@/components/Header'
import PromptInput from '@/components/PromptInput'
import TemplateSelector from '@/components/TemplateSelector'

// Template types
export interface Template {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  tags: string[]
}

// State type for the application
interface AppState {
  prompt: string
  selectedTemplate: string | null
  isGenerating: boolean
  generatedCode: Record<string, string> | null
  previewMode: 'code' | 'preview'
}

export default function Home() {
  // Application state
  const [state, setState] = useState<AppState>({
    prompt: '',
    selectedTemplate: null,
    isGenerating: false,
    generatedCode: null,
    previewMode: 'code'
  })

  // Templates available in the application
  const templates: Template[] = [
    { 
      id: 'nextjs', 
      name: 'Next.js', 
      description: 'Full-stack React framework with built-in SSR and API routes',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/><path d="M2 12h10"/><path d="M12 2v10"/><path d="M12 12 4.93 19.07"/><path d="M12 12 19.07 4.93"/></svg>,
      tags: ['React', 'SSR', 'Full-stack']
    },
    { 
      id: 'react', 
      name: 'React', 
      description: 'UI library for building interactive user interfaces',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><path d="M12 9a4.5 4.5 0 0 0 4.5 4.5"/><path d="M12 14.5A4.5 4.5 0 0 0 7.5 10"/><path d="M12 4.5A4.5 4.5 0 0 1 7.5 9"/><path d="M12 4.5A4.5 4.5 0 0 0 16.5 9"/></svg>,
      tags: ['Frontend', 'SPA']
    },
    { 
      id: 'vue', 
      name: 'Vue.js', 
      description: 'Progressive framework for building user interfaces',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 22 12 12 22 2 12 12 2"/></svg>,
      tags: ['Frontend', 'SPA']
    },
    { 
      id: 'express', 
      name: 'Express.js', 
      description: 'Fast, unopinionated, minimalist web framework for Node.js',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 8l-4 4 4 4"/><path d="M17 8l4 4-4 4"/><path d="M14 4l-4 16"/></svg>,
      tags: ['Backend', 'API', 'Node.js']
    },
    { 
      id: 'mobile', 
      name: 'React Native', 
      description: 'Create native apps for Android and iOS using React',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2"/><path d="M3 12h18"/><path d="M18 12v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6"/></svg>,
      tags: ['Mobile', 'Cross-platform']
    }
  ]

  // Handle prompt change
  const handlePromptChange = (value: string) => {
    setState({ ...state, prompt: value })
  }

  // Handle template selection
  const handleTemplateSelect = (templateId: string) => {
    setState({ ...state, selectedTemplate: templateId })
  }

  // Generate code based on the prompt and selected template
  const handleGenerateCode = async () => {
    if (!state.prompt || !state.selectedTemplate) return

    setState({ ...state, isGenerating: true })
    
    // Simulate code generation with a timeout
    setTimeout(() => {
      // Mock response - in a real application, this would come from an API call
      const mockCode = {
        'index.js': `import React from 'react';\n\nexport default function App() {\n  return (\n    <div>\n      <h1>Generated from prompt: ${state.prompt}</h1>\n      <p>Using template: ${state.selectedTemplate}</p>\n    </div>\n  );\n}`,
        'package.json': `{\n  "name": "generated-app",\n  "version": "1.0.0",\n  "description": "Generated from FireCrawl App Generator",\n  "scripts": {\n    "start": "react-scripts start",\n    "build": "react-scripts build"\n  },\n  "dependencies": {\n    "react": "^18.2.0",\n    "react-dom": "^18.2.0"\n  }\n}`
      }

      setState({
        ...state,
        isGenerating: false,
        generatedCode: mockCode
      })
    }, 2000)
  }

  // Toggle between code and preview modes
  const togglePreviewMode = () => {
    setState({
      ...state,
      previewMode: state.previewMode === 'code' ? 'preview' : 'code'
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>FireCrawl App Generator</title>
        <meta name="description" content="Generate full-stack applications from natural language prompts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 text-gradient"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Application Generator
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transform your ideas into code with a simple prompt. Select a template, describe what you want, and watch your application come to life.
          </motion.p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">Choose a Template</h2>
              <TemplateSelector 
                templates={templates} 
                selectedTemplate={state.selectedTemplate} 
                onSelect={handleTemplateSelect} 
              />
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">What do you want to build?</h2>
              <PromptInput 
                value={state.prompt} 
                onChange={handlePromptChange} 
                onSubmit={handleGenerateCode} 
                isLoading={state.isGenerating}
              />
              <button
                onClick={handleGenerateCode}
                disabled={!state.prompt || !state.selectedTemplate || state.isGenerating}
                className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {state.isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    Generate Application
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Generated Application</h2>
                {state.generatedCode && (
                  <div className="flex gap-2">
                    <button
                      onClick={togglePreviewMode}
                      className="text-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 py-1 px-3 rounded-md flex items-center"
                    >
                      {state.previewMode === 'code' ? (
                        <>
                          <Globe className="w-4 h-4 mr-1" />
                          Preview
                        </>
                      ) : (
                        <>
                          <Code className="w-4 h-4 mr-1" />
                          Code
                        </>
                      )}
                    </button>
                    <button
                      className="text-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 py-1 px-3 rounded-md flex items-center"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Export
                    </button>
                    <button
                      className="text-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 py-1 px-3 rounded-md flex items-center"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      GitHub
                    </button>
                  </div>
                )}
              </div>
              
              <div className="editor-container">
                {state.generatedCode ? (
                  <GeneratedCodePreview 
                    code={state.generatedCode} 
                    mode={state.previewMode} 
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center text-gray-500 dark:text-gray-400">
                      <Code className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg">Select a template and enter a prompt to generate your application.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 