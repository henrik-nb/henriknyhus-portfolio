import { EXPERIENCES, EDUCATION, CERTIFICATIONS } from "@/data/portfolio";
import { Award, Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 border-b border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-black/40 font-semibold block mb-2 font-mono">
              III. Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black">
              Resume & Credentials
            </h2>
          </div>
          <p className="text-sm text-black/60 max-w-md font-light leading-relaxed">
            A background combining information technology, human psychology, design systems, and physical coaching.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Work Experience */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-4 h-4 text-black/50" />
              <h3 className="text-xs uppercase tracking-widest font-semibold text-black/50">
                Experience
              </h3>
            </div>

            <div className="space-y-6">
              {EXPERIENCES.map((exp, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-black/[0.06] hover:border-black/15 transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h4 className="font-serif text-xl font-bold text-black">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-medium text-black/60">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {exp.badge && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {exp.badge}
                        </span>
                      )}
                      <span className="font-mono text-xs text-black/40 shrink-0">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-black/70 font-light leading-relaxed mt-3">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Sidebar */}
          <div className="lg:col-span-5 space-y-10">
            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-4 h-4 text-black/50" />
                <h3 className="text-xs uppercase tracking-widest font-semibold text-black/50">
                  Education
                </h3>
              </div>

              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-black/[0.06]"
                >
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h4 className="font-serif text-lg font-bold text-black">
                      {edu.degree}
                    </h4>
                    <span className="font-mono text-xs text-black/40 shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-black/60 mb-3">
                    {edu.institution}
                  </p>
                  <ul className="text-xs text-black/75 space-y-1">
                    {edu.details.map((d) => (
                      <li key={d}>• {d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-4 h-4 text-black/50" />
                <h3 className="text-xs uppercase tracking-widest font-semibold text-black/50">
                  Certifications
                </h3>
              </div>

              <div className="space-y-4">
                {CERTIFICATIONS.map((certGroup) => (
                  <div
                    key={certGroup.category}
                    className="p-5 rounded-2xl bg-white border border-black/[0.06]"
                  >
                    <span className="text-[11px] uppercase tracking-wider text-black/40 font-semibold block mb-3">
                      {certGroup.category}
                    </span>
                    <ul className="space-y-2">
                      {certGroup.items.map((item) => (
                        <li
                          key={item}
                          className="text-xs text-black/80 flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-black/40" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
