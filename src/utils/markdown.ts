import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm) // Support pour les tableaux, listes de tâches, etc.
    .use(remarkHtml, { sanitize: false }) // Convertit en HTML
    .process(markdown);
  
  return result.toString();
}