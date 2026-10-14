import Image from "next/image";
import { ARTICLES } from "@/data/portfolio";
import { ArrowUpRight, BookOpen } from "lucide-react";

export function Articles() {
  return (
    <section id="articles" className="py-20 sm:py-28 border-b border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-black/40 font-semibold block mb-2 font-mono">
              II. Articles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black">
              Articles & Guides
            </h2>
          </div>
          <p className="text-sm text-black/60 max-w-md font-light leading-relaxed">
            Practical strategies, facilitation protocols, and mental models on
            remote workshops, personal clarity, and team performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {ARTICLES.map((article) => (
            <div
              key={article.slug}
              className="group flex flex-col justify-between rounded-2xl bg-white border border-black/[0.06] overflow-hidden hover:border-black/20 hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="relative w-full aspect-[16/10] bg-neutral-100 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[11px] font-mono text-black/80 font-medium">
                    {article.readTime}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/70 font-light leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-black hover:opacity-60 transition-opacity"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Request full article / notes
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
