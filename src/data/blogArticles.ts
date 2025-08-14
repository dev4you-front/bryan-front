import { Article } from "@/types";

// Articles avec métadonnées uniquement (sans le contenu complet)
export const blogArticles: Omit<Article, 'content'>[] = [
  {
    title: "Douleur et activité physique : faut-il avoir mal pour progresser ?",
    image: "https://www.kinefact.com/wp-content/uploads/2019/10/cat-814952_1920.jpg",
    excerpt: "La douleur pendant l'exercice est-elle normale ? Découvrez les différences entre douleur bénéfique et signaux d'alarme, et apprenez à adapter votre pratique sportive en conséquence.",
    date: "2024-01-15",
    author: "Bryan Littré",
    link: "/blog/douleur-et-activite-physique"
  },
  {
    title: "Les ischio-jambiers : anatomie, blessures et prévention",
    image: "https://www.kinefact.com/wp-content/uploads/2019/10/cat-814952_1920.jpg",
    excerpt: "Tout ce qu'il faut savoir sur les ischio-jambiers : leur rôle, les mécanismes de blessure et les stratégies de prévention efficaces pour les sportifs.",
    date: "2024-01-10",
    author: "Bryan Littré",
    link: "/blog/ischio-jambiers-anatomie-blessures-prevention"
  },
  {
    title: "Troubles vasculaires en kinésithérapie : savoir les reconnaître",
    image: "https://www.kinefact.com/wp-content/uploads/2019/10/cat-814952_1920.jpg",
    excerpt: "Guide pratique pour identifier les troubles vasculaires en consultation de kinésithérapie et orienter efficacement vos patients.",
    date: "2024-01-05",
    author: "Bryan Littré",
    link: "/blog/troubles-vasculaires-kinesitherapie"
  }
];

// Fonction utilitaire pour obtenir un article par son slug
export function getArticleBySlug(slug: string): Omit<Article, 'content'> | undefined {
  return blogArticles.find(article => article.link === `/blog/${slug}`);
}