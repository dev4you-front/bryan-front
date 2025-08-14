"use client";

interface ClientFormattedDateProps {
  date: string;
  format?: 'full' | 'monthYear';
}

export default function ClientFormattedDate({ date, format = 'full' }: ClientFormattedDateProps) {
  const dateObj = new Date(date);
  
  if (format === 'monthYear') {
    return (
      <span>
        {dateObj.toLocaleDateString('fr-FR', {
          month: 'long',
          year: 'numeric'
        })}
      </span>
    );
  }
  
  return (
    <span>
      {dateObj.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}
    </span>
  );
}