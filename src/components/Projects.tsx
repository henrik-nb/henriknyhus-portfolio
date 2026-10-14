import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <section id="work" className="py-20 sm:py-28 border-b border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-black/40 font-semibold block mb-2 font-mono">
              II. Selected Work
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black">
              Project references
            </h2>
          </div>
          <p className="text-sm text-black/60 max-w-md font-light leading-relaxed">
            A curated selection of digital products, brand refreshes, and web
            platforms designed and engineered for real-world impact.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {PROJECTS.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col rounded-2xl bg-white border border-black/[0.06] overflow-hidden hover:border-black/20 hover:shadow-xl transition-all duration-300 no-underline"
            >
              {/* Image Preview */}
              <div className="relative w-full aspect-[16/10] bg-neutral-100 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
              </div>

              {/* Card Meta & Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between text-xs text-black/40 font-mono mb-2">
                    <span>{project.year || "2023–2024"}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-black mb-1 group-hover:text-black/80 transition-colors flex items-center justify-between gap-2">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </h3>
                  <p className="text-xs font-medium text-black/60 uppercase tracking-wider mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-black/70 font-light leading-relaxed mb-6">
                    {project.summary}
                  </p>
                </div>

                {/* Tech & Tools Tag Row */}
                <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between flex-wrap gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techOrTools.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-0.5 rounded-full bg-black/[0.04] text-black/70 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-semibold text-black/60 group-hover:text-black transition-colors flex items-center gap-1">
                    Read case study
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
