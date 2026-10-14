import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { PROJECTS } from "@/data/portfolio";
import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from "lucide-react";
import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — Henrik Nyhus Case Study`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Related projects
  const relatedProjects = PROJECTS.filter((p) => p.slug !== project.slug).slice(
    0,
    2
  );

  return (
    <>
      <Header />
      <main className="pt-32 sm:pt-40 pb-24">
        <article className="max-w-4xl mx-auto px-5 sm:px-8">
          {/* Back Navigation */}
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-black/50 hover:text-black mb-8 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to selected work
          </Link>

          {/* Heading Section */}
          <header className="space-y-4 mb-10">
            <div className="flex items-center gap-2 text-xs font-mono text-black/50">
              <span>{project.year || "Case Study"}</span>
              <span>•</span>
              <span>{project.subtitle}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-black">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-black/70 font-light leading-relaxed max-w-3xl">
              {project.summary}
            </p>
          </header>

          {/* Hero Project Image */}
          <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-100 border border-black/[0.08] mb-12 shadow-md">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover object-top"
            />
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-8 rounded-2xl bg-white border border-black/[0.06] mb-12">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-black/40 font-semibold block mb-2">
                My Role
              </span>
              <ul className="text-xs text-black/80 space-y-1">
                {project.role.map((r) => (
                  <li key={r}>• {r}</li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-wider text-black/40 font-semibold block mb-2">
                Key Deliverables
              </span>
              <ul className="text-xs text-black/80 space-y-1">
                {project.deliverables.map((d) => (
                  <li key={d}>• {d}</li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-wider text-black/40 font-semibold block mb-2">
                Tech & Tools
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.techOrTools.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 rounded-full bg-black/[0.04] text-black/70 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.externalUrl && (
                <div className="mt-4 pt-3 border-t border-black/[0.06]">
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-black hover:opacity-70 transition-opacity"
                  >
                    Visit live site
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Full Narrative */}
          <div className="space-y-6 text-base sm:text-lg text-black/80 font-light leading-relaxed mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-black pt-4">
              Overview & Background
            </h2>
            {project.fullDescription.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Related Projects */}
          <div className="pt-12 border-t border-black/[0.08]">
            <h3 className="font-serif text-2xl font-bold text-black mb-6">
              More Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/projects/${rel.slug}`}
                  className="group block p-5 rounded-2xl bg-white border border-black/[0.06] hover:border-black/20 hover:shadow-md transition-all"
                >
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-neutral-100">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-black group-hover:text-black/80 flex items-center justify-between">
                    <span>{rel.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-xs text-black/60 mt-1 line-clamp-2">
                    {rel.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Contact />
    </>
  );
}
