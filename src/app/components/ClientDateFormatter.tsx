"use client";

import { useState, useEffect } from 'react';

interface ClientDateFormatterProps {
  date: string;
  format?: 'full' | 'monthYear';
}

export default function ClientDateFormatter({ date, format = 'full' }: ClientDateFormatterProps) {
  const [formattedDate, setFormattedDate] = useState<string>('');

  useEffect(() => {
    const dateObj = new Date(date);
    
    if (format === 'monthYear') {
      setFormattedDate(dateObj.toLocaleDateString('fr-FR', {
        month: 'long',
        year: 'numeric'
      }));
    } else {
      setFormattedDate(dateObj.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }));
    }
  }, [date, format]);

  if (!formattedDate) {
    return <span>Chargement...</span>;
  }

  return <span>{formattedDate}</span>;
}