import { SectionPage } from "@/components/layout/SectionPage"
import LayeredVisual from "@/components/ui/LayeredVisual"

export default function AntiDronePage() {
  return (
    <>
      {/* HERO */}
      <SectionPage
        eyebrow="ANTI-DRONE SYSTEMS"
        title="Layered counter-UAS architecture for controlled airspace dominance."
        description="A16Industries delivers an integrated counter-UAS framework combining multi-sensor detection, AI-assisted classification, and policy-aware response orchestration — engineered for real-world operational clarity."
        points={[
          "Multi-layer sensor fusion across RF, EO/IR, and acoustic domains.",
          "Low-latency threat identification with human-in-the-loop control.",
          "Mission-aligned response workflows with rule-based safeguards.",
          "Designed for seamless integration into existing security stacks.",
        ]}
      />

      {/* ARCHITECTURE OVERVIEW */}
      <section className="relative bg-black px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-3xl text-3xl font-semibold text-gray-100">
            System architecture built for layered awareness
          </h2>
          <p className="mt-4 max-w-3xl text-gray-400">
            The platform aggregates heterogeneous sensor inputs into a unified
            operational picture, enabling operators to reason, verify, and act
            with confidence in contested airspace environments.
          </p>
        </div>
      </section>

      {/* LAYERED DEFENSE (ANIMATION SECTION) */}
      <section className="relative overflow-hidden bg-[#020617] px-6 py-32">
        {/* subtle depth background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(219,113,7,0.18),_transparent_55%)]" />

        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          {/* LEFT – YOUR ANIMATION */}
          <div className="flex justify-center">
            <LayeredVisual />
            <div className="scale-90 opacity-90">
              {/* animation element */}
            </div>
          </div>

          {/* RIGHT – EXPLANATION */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-brand/80">
              LAYERED DEFENSE LOGIC
            </p>

            <h3 className="mt-4 text-3xl font-semibold text-gray-100">
              Detection → Classification → Control
            </h3>

            <p className="mt-6 text-gray-400">
              Each defensive layer operates independently yet feeds into a
              shared decision pipeline — allowing early detection, threat
              validation, and controlled response escalation.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Wide-area RF and spectrum monitoring for early cueing.",
                "AI-assisted object classification with confidence scoring.",
                "Operator-authorized response aligned with mission policy.",
              ].map((item) => (
                <li
                  key={item}
                  className="border-l border-brand/40 pl-4 text-sm text-gray-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="relative bg-black px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-gray-100">
            Operational capabilities
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Persistent airspace monitoring",
              "Anomaly and intent detection",
              "Policy-aware response orchestration",
              "Command-center integration",
              "Scalable deployment architecture",
              "Audit-ready event logging",
            ].map((cap) => (
              <div
                key={cap}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
              >
                <p className="text-sm text-gray-200">{cap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}