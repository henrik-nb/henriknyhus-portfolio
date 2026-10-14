import Image from "next/image";
import { SERVICES } from "@/data/portfolio";
import { Check } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 border-b border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-black/40 font-semibold block mb-2 font-mono">
              I. Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black">
              What I can do for you
            </h2>
          </div>
          <p className="text-sm text-black/60 max-w-md font-light leading-relaxed">
            Every project is unique. I tailor my tools, activities, and process
            according to your challenge and organizational needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              tabIndex={0}
              className="group relative rounded-2xl bg-white border border-black/[0.06] hover:border-black/20 hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer h-[380px] sm:h-[400px] flex flex-col focus:outline-none focus:ring-2 focus:ring-black/20"
            >
              {/* Image Layer - Fills background with subtle scaling */}
              <div className="relative w-full h-full bg-neutral-100 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-108 group-hover:blur-xs transition-all duration-700 ease-out"
                />

                {/* Default Bottom Gradient to make title pop at rest */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent group-hover:opacity-0 transition-opacity duration-300" />

              </div>

              {/* Default resting state: Clean Title pinned at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 group-hover:opacity-0 group-hover:translate-y-2 transition-all duration-300 pointer-events-none">
                <h3 className="font-serif text-2xl font-bold text-white drop-shadow-sm">
                  {s.title}
                </h3>
                <span className="text-xs text-white/75 font-mono tracking-wider uppercase mt-1 block">
                  <span className="md:hidden">Tap to explore →</span>
                  <span className="hidden md:inline">Hover to explore →</span>
                </span>
              </div>

              {/* Hover Overlay: Silky smooth cross-fade with backdrop blur */}
              <div className="absolute inset-0 z-20 bg-[#141413]/90 backdrop-blur-md p-6 sm:p-7 text-white flex flex-col justify-between opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 ease-in-out">
                <div className="transform transition-transform duration-500 ease-out translate-y-2 group-hover:translate-y-0 group-focus:translate-y-0">
                  <div className="pb-3 mb-3 border-b border-white/10 text-left">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white text-left">
                      {s.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 transform transition-transform duration-500 ease-out translate-y-1 group-hover:translate-y-0 group-focus:translate-y-0">
                  <span className="text-[10px] uppercase tracking-wider text-white/40 font-semibold block mb-2 font-mono">
                    Key Deliverables
                  </span>
                  <ul className="space-y-1.5">
                    {s.deliverables.map((item) => (
                      <li
                        key={item}
                        className="text-xs text-white/90 flex items-start gap-2"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
