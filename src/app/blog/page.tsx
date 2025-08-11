import { Article } from "@/types";

export default function Blog(): JSX.Element {
  const articles: Article[] = [
    {
      title: "Pourquoi la prévention des blessures est essentielle ?",
      image: "/images/article.png",
      excerpt:
        "Découvrez pourquoi la prévention est la clé pour les sportifs et comment l’intégrer dans votre pratique.",
      date: "2024-05-01",
      author: "Bryan Littré",
      link: "#",
    },
    {
      title: "Retour sur la conférence SPO : récidives dans le sport",
      image: "/images/article.png",
      excerpt:
        "Résumé et points clés de la conférence SPO animée par Bryan Littré.",
      date: "2024-04-15",
      author: "Bryan Littré",
      link: "#",
    },
    {
      title: "Podcast : Les ischios, mythes et réalités",
      image: "/images/article.png",
      excerpt:
        "Dans ce podcast, on fait le point sur les idées reçues autour des blessures des ischio-jambiers.",
      date: "2024-03-28",
      author: "Bryan Littré",
      link: "#",
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-extrabold uppercase tracking-wide mb-8">Blog</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a: Article, idx: number) => (
            <article key={idx} className="bg-white rounded-xl shadow overflow-hidden flex flex-col">
              <img src={a.image} alt="" className="w-full h-48 object-cover" />
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-xl font-bold mb-2">{a.title}</h2>
                <p className="text-gray-700 mb-4 flex-1">{a.excerpt}</p>
                <div className="text-sm text-gray-500 mb-4">
                  {a.date} — {a.author}
                </div>
                <a href={a.link} className="inline-block mt-auto text-brandviolet font-semibold">Lire →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

