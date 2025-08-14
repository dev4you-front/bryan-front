import { blogArticles } from "@/data/blogArticles";

export default function Blog() {
  return (
    <section className="py-12 bg-[#E0E0E0]">
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 uppercase tracking-wide">
            Mes Articles
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogArticles.map((a, idx: number) => (
              <article key={idx} className="bg-gray-50 rounded-xl shadow overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <img src={a.image} alt="" className="w-full h-48 object-cover" />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{a.title}</h3>
                  <p className="text-gray-700 mb-4 flex-1">{a.excerpt}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    {new Date(a.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })} — {a.author}
                  </div>
                  <a href={a.link} className="inline-block mt-auto text-brandviolet font-semibold hover:text-purple-600 transition">Lire l'article →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

