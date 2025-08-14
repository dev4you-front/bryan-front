import { notFound } from "next/navigation";
import { blogArticles } from "@/data/blogArticles";
import ClientFormattedDate from "@/app/components/ClientFormattedDate";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Image from "next/image";
import SectionWrapper from "@/app/components/SectionWrapper";

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

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const resolvedParams = await params;
  const article = blogArticles.find(
    (a) => a.link === `/blog/${resolvedParams.slug}`
  );

  if (!article) {
    notFound();
  }

  // Chargement dynamique du contenu de l'article
  const { default: content } = await import(article.contentPath);

  return (
    <SectionWrapper maxWidth="4xl">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        {/* En-tête de l'article */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center text-gray-600 mb-6">
            <span className="text-sm">
              Publié le <ClientFormattedDate date={article.date} /> par {article.author}
            </span>
          </div>
          <Image 
            src={article.image} 
            alt={article.title}
            width={400}
            height={300}
            className="w-full max-w-md mx-auto rounded-lg shadow-md mb-6"
          />
        </div>

        {/* Contenu de l'article */}
        <div className="prose prose-lg max-w-none article-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {content}
          </ReactMarkdown>
        </div>

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
    </SectionWrapper>
  );
}