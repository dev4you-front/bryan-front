"use client";

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface AccordionSection {
  title: string;
  content: string;
}

interface AccordionProps {
  sections: AccordionSection[];
}

export default function Accordion({ sections }: AccordionProps) {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {sections.map((section, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <button
            onClick={() => toggleSection(index)}
            className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
          >
            <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
            <svg
              className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                openSection === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {openSection === index && (
            <div className="px-6 py-4 bg-white border-t border-gray-200">
              <div className="prose prose-gray max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h4: ({children}) => <h4 className="text-base font-semibold text-gray-900 mt-4 mb-2">{children}</h4>,
                    p: ({children}) => <p className="text-gray-700 mb-3 leading-relaxed">{children}</p>,
                    ul: ({children}) => <ul className="mb-3 pl-4 list-disc">{children}</ul>,
                    li: ({children}) => <li className="text-gray-700 mb-1">{children}</li>,
                    strong: ({children}) => <strong className="font-semibold text-gray-900">{children}</strong>
                  }}
                >
                  {section.content}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}