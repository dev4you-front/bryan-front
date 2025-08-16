import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  id?: string;
}

export default function SectionWrapper({ 
  children, 
  maxWidth = '5xl', 
  spacing = 'xl',
  className = '',
  id
}: SectionWrapperProps) {
  const maxWidthClasses = {
    'sm': 'max-w-sm',
    'md': 'max-w-md',
    'lg': 'max-w-lg',
    'xl': 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl'
  };

  const spacingClasses = {
    'sm': 'space-y-8',
    'md': 'space-y-12',
    'lg': 'space-y-16',
    'xl': 'space-y-16'
  };

  return (
    <section id={id} className={`py-12 bg-light-gray ${className}`}>
      <div className={`${maxWidthClasses[maxWidth]} mx-auto px-6 ${spacingClasses[spacing]}`}>
        {children}
      </div>
    </section>
  );
}