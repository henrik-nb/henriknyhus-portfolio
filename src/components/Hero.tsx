"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { HERO_DATA, CLIENT_LOGOS } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="pt-24 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 border-b border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start lg:items-center">
          {/* Main Statement */}
          <div className="lg:col-span-8 space-y-5 sm:space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-black/50">
              <span>{HERO_DATA.roleHeadline}</span>
              <span>•</span>
              <span>{HERO_DATA.location}</span>
            </div>

            {/* Mobile Side-by-Side: Statement + Compact Portrait */}
            <div className="flex items-start gap-4 lg:block">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[4.25rem] leading-[1.12] sm:leading-[1.08] tracking-tight font-medium text-black flex-1">
                {HERO_DATA.statement}
              </h1>

              {/* Mobile-only compact portrait */}
              <div className="lg:hidden shrink-0 pt-1">
                <div className="relative w-20 h-24 sm:w-28 sm:h-36 rounded-xl overflow-hidden bg-neutral-200/60 shadow-xs border border-black/[0.06]">
                  <Image
                    src={HERO_DATA.avatar}
                    alt={HERO_DATA.name}
                    fill
                    sizes="112px"
                    priority
                    className="object-cover grayscale contrast-[1.05]"
                  />
                </div>
              </div>
            </div>
            
            <p className="text-base sm:text-lg text-black/70 leading-relaxed max-w-2xl font-light">
              {HERO_DATA.bio}
            </p>

            <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-black text-white rounded-full font-medium hover:bg-black/85 transition-all shadow-xs"
              >
                Explore selected work
                <ArrowDown className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-black/15 bg-transparent rounded-full font-medium text-black hover:bg-black/[0.04] transition-all"
              >
                Let&apos;s talk
                <ArrowUpRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              </a>
            </div>
          </div>

          {/* Desktop Studio Portrait (hidden on mobile, visible on lg) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col items-end">
            <div className="w-full max-w-[320px]">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-neutral-200/60 shadow-xs">
                <Image
                  src={HERO_DATA.avatar}
                  alt={HERO_DATA.name}
                  fill
                  sizes="320px"
                  priority
                  className="object-cover grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-700 ease-out"
                />
              </div>

              {/* Minimal caption directly underneath */}
              <div className="w-full pt-3.5 space-y-1">
                <div className="flex items-center justify-between text-xs font-serif font-bold text-black">
                  <span>{HERO_DATA.name}</span>
                  <span className="font-mono font-normal text-[11px] text-black/40">
                    Oslo, NO
                  </span>
                </div>
                <p className="text-xs text-black/60 font-light leading-snug">
                  {HERO_DATA.currentRole}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos Row */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-black/[0.06]">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-10 items-center">
            {CLIENT_LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="h-10 flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 px-2"
              >
                <div className="relative w-full max-w-[140px] h-7">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    sizes="140px"
                    className="object-contain object-center"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
