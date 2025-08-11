// Utilitaires TypeScript pour l'application

/**
 * Combine plusieurs classes CSS en une seule chaîne
 * @param classes - Liste des classes CSS à combiner
 * @returns Chaîne de classes CSS combinées
 */
export function classNames(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Formate une date en format français
 * @param date - Date à formater
 * @returns Date formatée en français
 */
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Valide si une URL est valide
 * @param url - URL à valider
 * @returns true si l'URL est valide, false sinon
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Tronque un texte à une longueur donnée
 * @param text - Texte à tronquer
 * @param maxLength - Longueur maximale
 * @returns Texte tronqué avec "..." si nécessaire
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}