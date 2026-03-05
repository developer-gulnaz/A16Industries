"use client";
import { useState } from "react";

import HeroBackground from "@/components/HeroBackground";
import HeroButton from "@/components/ui/HeroButton";
import { TypingText } from "@/components/ui/TypingText";
import UniqueSections from "@/components/UniqueSections";

export default function HomePage() {
  const [secondLine, setSecondLine] = useState(false)
  return (
    <main className="relative">

      {/* HERO SECTION */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pb-10 pt-24 sm:px-6 sm:pt-28">

        {/* Background */}
        <HeroBackground />
        <div className="absolute inset-0 z-[1] bg-black/35" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-5xl px-2 text-center sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            <span className="block text-gray-100">
              <TypingText
                text="Advanced Drone &"
                onComplete={() => setSecondLine(true)}
              />
            </span>

            <span className="block text-brand">
              <TypingText
                text="Anti-Drone Systems"
                start={secondLine}
              />
            </span>
          </h1>
          <h1 className="galaxy-text select-none px-4 text-center">
            A16Industries
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-200 md:text-lg">
            Securing airspace with intelligent unmanned systems,
            precision detection, and next-generation counter-UAS
            technology.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <HeroButton
              href="/drone"
              label="Explore Solutions"
            />
            <HeroButton
              href="/contactus"
              label="Contact Us"
              variant="secondary"
            />
          </div>
        </div>

      </section>

      {/* NEXT SECTIONS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-2xl font-semibold text-gray-200">
          Our Capabilities
        </h2>
        <p className="mt-4 max-w-3xl text-gray-400">
          Modular drone platforms, AI-powered detection,
          and integrated anti-drone defense systems
          designed for military, homeland security,
          and critical infrastructure protection.
        </p>
      </section>

      {/* unique animated sections */}
      <UniqueSections />

    </main>
  );
}
