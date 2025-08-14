import { notFound } from "next/navigation";
import { blogArticles } from "@/data/blogArticles";
import { formatDate } from "@/utils/helpers";

interface BlogArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.link.replace('/blog/', ''),
  }));
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  const article = blogArticles.find(
    (a) => a.link === `/blog/${params.slug}`
  );

  if (!article) {
    notFound();
  }

  return (
    <section className="py-12 bg-[#E0E0E0]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* En-tête de l'article */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center text-gray-600 mb-6">
              <span className="text-sm">
                Publié le {formatDate(article.date)} par {article.author}
              </span>
            </div>
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full max-w-md mx-auto rounded-lg shadow-md mb-6"
            />
          </div>

          {/* Contenu de l'article */}
          <div 
            className="prose prose-lg max-w-none article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Navigation de retour */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <a 
              href="/blog" 
              className="inline-flex items-center text-brandviolet hover:text-purple-600 transition font-semibold"
            >
              ← Retour aux articles
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}