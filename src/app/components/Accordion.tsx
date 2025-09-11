"use client";

import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface AccordionSection {
  title: string;
  content: string;
}

interface AccordionProps {
  sections: AccordionSection[];
  className?: string;
}

export default function Accordion({ sections, className = '' }: AccordionProps) {
  const [openSections, setOpenSections] = useState<Set<number>>(new Set());
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Initialiser les refs pour les boutons
  useEffect(() => {
    buttonRefs.current = buttonRefs.current.slice(0, sections.length);
  }, [sections.length]);

  const toggleSection = (index: number) => {
    const newOpenSections = new Set(openSections);
    if (newOpenSections.has(index)) {
      newOpenSections.delete(index);
    } else {
      newOpenSections.add(index);
    }
    setOpenSections(newOpenSections);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        toggleSection(index);
        break;
      case 'ArrowDown':
        event.preventDefault();
        const nextIndex = (index + 1) % sections.length;
        buttonRefs.current[nextIndex]?.focus();
        break;
      case 'ArrowUp':
        event.preventDefault();
        const prevIndex = (index - 1 + sections.length) % sections.length;
        buttonRefs.current[prevIndex]?.focus();
        break;
      case 'Home':
        event.preventDefault();
        buttonRefs.current[0]?.focus();
        break;
      case 'End':
        event.preventDefault();
        buttonRefs.current[sections.length - 1]?.focus();
        break;
    }
  };

  return (
    <div className={`space-y-4 ${className}`} role="presentation">
      {sections.map((section, index) => {
        const isOpen = openSections.has(index);
        const sectionId = `accordion-section-${index}`;
        const headerId = `accordion-header-${index}`;

        return (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            {/* En-tête de l'accordéon */}
            <button
              ref={(el) => { buttonRefs.current[index] = el; }}
              id={headerId}
              className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brandviolet focus:ring-inset transition-colors duration-200 flex items-center justify-between"
              onClick={() => toggleSection(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              aria-expanded={isOpen}
              aria-controls={sectionId}
              type="button"
            >
              <h3 className="text-lg font-semibold text-gray-900 pr-4">
                {section.title}
              </h3>
              <svg
                className={`w-5 h-5 text-brandviolet transition-transform duration-200 flex-shrink-0 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Contenu de l'accordéon */}
            <div
              id={sectionId}
              role="region"
              aria-labelledby={headerId}
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-6 py-4 bg-white">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h2: ({ children }: { children?: React.ReactNode }) => (
                        <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                          {children}
                        </h4>
                      ),
                      h3: ({ children }: { children?: React.ReactNode }) => (
                        <h5 className="text-lg font-bold text-gray-900 mt-4 mb-2">
                          {children}
                        </h5>
                      ),
                      p: ({ children }: { children?: React.ReactNode }) => (
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {children}
                        </p>
                      ),
                      ul: ({ children }: { children?: React.ReactNode }) => (
                        <ul className="mb-4 pl-6 list-disc">{children}</ul>
                      ),
                      li: ({ children }: { children?: React.ReactNode }) => (
                        <li className="text-gray-700 mb-2">{children}</li>
                      ),
                      strong: ({ children }: { children?: React.ReactNode }) => (
                        <strong className="font-bold text-gray-900">
                          {children}
                        </strong>
                      ),
                    }}
                  >
                    {section.content}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}