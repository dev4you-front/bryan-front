"use client";

import { useState, useEffect } from 'react';

interface ClientFormattedDateProps {
  date: string;
  format?: 'full' | 'monthYear';
}

export default function ClientFormattedDate({ date, format = 'full' }: ClientFormattedDateProps) {
  const [formattedDate, setFormattedDate] = useState('');

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

  return <span>{formattedDate}</span>;
}