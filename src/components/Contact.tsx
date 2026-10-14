"use client";

import { useState } from "react";
import { CONTACT_INFO } from "@/data/portfolio";
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-20 sm:py-28 bg-[#141413] text-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-white/40 font-semibold block font-mono">
              IV. Contact
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
              Sounds interesting? Let&apos;s talk.
            </h2>
            <p className="text-base sm:text-lg text-white/70 font-light max-w-xl leading-relaxed">
              Reach out for a quick chat and coffee to discuss your team&apos;s
              needs, product challenges or workshop requirements.
            </p>

            {/* Quick copy email pill */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-mono border border-white/10 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied email to clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-white/50" />
                    <span>{CONTACT_INFO.email}</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-white/90 transition-colors"
              >
                Send direct email
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-white/40 font-semibold block">
                Direct Details
              </span>
              <div className="space-y-3 text-sm text-white/80">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-white/40" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-white/40" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
                <div className="flex items-center gap-3 text-white/60">
                  <MapPin className="w-4 h-4 text-white/40" />
                  <span>{CONTACT_INFO.location}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-white/40 font-semibold block">
                Online & Community
              </span>
              <div className="flex flex-wrap gap-2.5">
                {CONTACT_INFO.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-xs text-white/80 hover:text-white transition-all"
                  >
                    <span>{s.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-white/40" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex items-center justify-between text-xs text-white/40">
          <p>© {new Date().getFullYear()} Henrik Nyhus</p>
        </div>
      </div>
    </footer>
  );
}
