import Image from "next/image";
import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy for Sesh App — Henrik Nyhus",
  description: "Privacy policy for Sesh App, developed by Henrik Nyhus.",
};

export default function SeshPrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          {/* Top Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
            <div className="lg:col-span-7">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#141413] leading-[1.1] mb-6">
                Privacy Policy for Sesh App
              </h1>
              <p className="font-serif italic text-lg sm:text-xl text-[#141413]/80 leading-relaxed">
                This privacy policy applies to the Sesh app, developed by Henrik Nyhus
              </p>
            </div>

            {/* App Mockup */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-[180px] sm:w-[220px] transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="/images/sesh/app-mockup.png"
                  alt="Sesh Workout Timer App"
                  width={525}
                  height={1024}
                  priority
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="max-w-2xl space-y-10 text-[#141413]">
            <section className="space-y-2">
              <h2 className="font-sans font-bold text-base sm:text-lg text-[#141413]">
                Data Collection
              </h2>
              <p className="text-sm sm:text-base text-[#141413]/80 leading-relaxed font-light">
                We do not collect, store, or share any personal data from users. All app functionality operates without requiring user data.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-sans font-bold text-base sm:text-lg text-[#141413]">
                Third-Party Services
              </h2>
              <p className="text-sm sm:text-base text-[#141413]/80 leading-relaxed font-light">
                This app does not use third-party services that collect user data.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-sans font-bold text-base sm:text-lg text-[#141413]">
                Children&apos;s Privacy
              </h2>
              <p className="text-sm sm:text-base text-[#141413]/80 leading-relaxed font-light">
                This app does not knowingly collect any personal information from children under the age of 13.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-sans font-bold text-base sm:text-lg text-[#141413]">
                Changes to This Policy
              </h2>
              <p className="text-sm sm:text-base text-[#141413]/80 leading-relaxed font-light">
                We may update this privacy policy from time to time. Any changes will be posted on this page.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-sans font-bold text-base sm:text-lg text-[#141413]">
                Contact Us
              </h2>
              <p className="text-sm sm:text-base text-[#141413]/80 leading-relaxed font-light">
                If you have any questions about this Privacy Policy, you can contact us at:{" "}
                <a
                  href="mailto:henrik.b.nyhus@gmail.com"
                  className="font-medium underline hover:text-black transition-colors"
                >
                  henrik.b.nyhus@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Contact />
    </>
  );
}
