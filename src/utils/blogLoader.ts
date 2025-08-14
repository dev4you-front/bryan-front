// Utilitaire pour charger le contenu des articles de blog à la demande

export async function loadBlogContent(slug: string): Promise<string> {
  try {
    // Importer dynamiquement le fichier Markdown correspondant
    const content = await import(`@/data/blog-posts/${slug}.md?raw`);
    return content.default;
  } catch (error) {
    console.error(`Erreur lors du chargement de l'article ${slug}:`, error);
    throw new Error(`Article non trouvé : ${slug}`);
  }
}

// Fonction utilitaire pour vérifier si un article existe
export async function articleExists(slug: string): Promise<boolean> {
  try {
    await import(`@/data/blog-posts/${slug}.md?raw`);
    return true;
  } catch {
    return false;
  }
}