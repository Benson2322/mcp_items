import { motion } from 'framer-motion'
import React from 'react'
import { Template } from '../pages/index'

interface TemplateSelectorProps {
  templates: Template[]
  selectedTemplate: string | null
  onSelect: (templateId: string) => void
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  templates,
  selectedTemplate,
  onSelect
}) => {
  return (
    <div className="grid grid-cols-1 gap-3">
      {templates.map((template) => (
        <motion.button
          key={template.id}
          onClick={() => onSelect(template.id)}
          className={`flex items-start p-4 border rounded-lg text-left transition duration-200 ${
            selectedTemplate === template.id
              ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
              : 'border-gray-200 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="mr-3 p-2 rounded-md bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300">
            {template.icon}
          </div>
          <div>
            <h3 className="font-medium mb-1">{template.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {template.description}
            </p>
            <div className="flex mt-2 gap-2">
              {template.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="inline-block px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  )
}

export default TemplateSelector 