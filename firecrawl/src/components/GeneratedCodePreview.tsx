import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FileIcon, Folder } from 'lucide-react'
import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface GeneratedCodePreviewProps {
  code: Record<string, string>
  mode: 'code' | 'preview'
}

const GeneratedCodePreview: React.FC<GeneratedCodePreviewProps> = ({ 
  code, 
  mode 
}) => {
  const [activeFile, setActiveFile] = useState<string>(Object.keys(code)[0] || '')
  
  const getLanguage = (filename: string): string => {
    if (filename.endsWith('.js') || filename.endsWith('.jsx')) return 'javascript'
    if (filename.endsWith('.ts') || filename.endsWith('.tsx')) return 'typescript'
    if (filename.endsWith('.css')) return 'css'
    if (filename.endsWith('.html')) return 'html'
    if (filename.endsWith('.json')) return 'json'
    if (filename.endsWith('.md')) return 'markdown'
    return 'javascript'
  }

  // Mock preview for demonstration purposes
  // In a real implementation, this would be an iframe with the rendered application
  const PreviewMode = () => (
    <div className="h-full flex flex-col items-center justify-center bg-white p-6">
      <div className="text-center max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4">Preview Mode</h2>
        <p className="text-gray-600 mb-4">
          This is a placeholder for the application preview. In a real implementation, 
          this would show a live preview of your generated application.
        </p>
        <div className="p-4 bg-gray-100 rounded-md">
          <pre className="text-left text-sm overflow-auto">
            {/* Show a snippet of the generated code */}
            {activeFile && code[activeFile] ? 
              code[activeFile].split('\n').slice(0, 5).join('\n') + '\n...' 
              : 'No file selected'}
          </pre>
        </div>
      </div>
    </div>
  )
  
  if (mode === 'preview') {
    return <PreviewMode />
  }

  return (
    <div className="h-full flex flex-col">
      <Tabs defaultValue={activeFile} onValueChange={setActiveFile} className="flex flex-col h-full">
        <div className="border-b dark:border-gray-700">
          <TabsList className="h-auto bg-transparent p-0">
            {Object.keys(code).map((filename) => (
              <TabsTrigger
                key={filename}
                value={filename}
                className="data-[state=active]:bg-background data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-purple-500 rounded-none px-4 py-2"
              >
                {filename.endsWith('.json') ? (
                  <FileIcon className="w-4 h-4 mr-2" />
                ) : (
                  <Folder className="w-4 h-4 mr-2" />
                )}
                {filename}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {Object.entries(code).map(([filename, content]) => (
          <TabsContent key={filename} value={filename} className="flex-1 overflow-auto p-0 mt-0">
            <SyntaxHighlighter
              language={getLanguage(filename)}
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                height: '100%',
                borderRadius: 0,
                fontSize: '14px',
              }}
              showLineNumbers
            >
              {content}
            </SyntaxHighlighter>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default GeneratedCodePreview 